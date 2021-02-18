const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const CronJob = require('cron').CronJob;
const knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
});
const app = express()
const customCors = { origin: "https://hydenz-fake-api.herokuapp.com/" }
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.options('/api/', cors(customCors))



// GET JSON by ID
app.get('/api/:id', cors(), (req, res) => {
    knex('jsons').select('json').where({ 'id': req.params.id }).then(results => {
        let parsedJson = JSON.parse(results[0]['json'])
        return res.status(200).send(parsedJson)
    }).catch(reason => {
        return res.status(400).send(`Unable to find JSON of ID ${req.params.id}`)
    })
})

// Serve React
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// POST new JSON
app.post('/api/', cors(customCors), (req, res) => {
    const contentType = req.header("content-type");
    if (contentType !== "application/json") return res.send({msg: "Apenas o formato JSON é suportado}")
    let json = JSON.stringify(req.body)
    knex('jsons').insert({ json }, "id").then(value => {
        let id = value[0]
        return res.status(200).send({
            id,
            msg: `Sucess! Your JSON is available at /api/${id} for the next 24 hours`
        })
    })
})


const job = new CronJob('0,30 * * * *', function () {

    // Deleting rows older than 1 day then reseting auto increment to max ID+1
    knex('jsons').whereRaw("created_at <= NOW() - INTERVAL '1 day'")
        .del().then(() => knex.raw(`
            BEGIN;
            LOCK TABLE jsons IN EXCLUSIVE MODE;
            SELECT setval('jsons_id_seq', COALESCE((SELECT MAX(id)+1 FROM jsons), 1), false);
            COMMIT;`))

}, null, true);

app.listen(process.env.PORT, () => {
    console.log(`Fake-API is online!`)
})

