const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const CronJob = require('cron').CronJob;
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: path.join(__dirname, "db", "db.sqlite3")
    },
    useNullAsDefault: true
});
const app = express()
const port = 3001
const customCors = { origin: "http://localhost:3000" }
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
    let json = JSON.stringify(req.body)
    knex('jsons').insert({ json }).then(value => {
        let id = value[0]
        return res.status(200).send({
            id,
            msg: `Sucess! Your JSON is available at /api/${id}`
        })
    })
})


const job = new CronJob('0,30 * * * *', function () {
    knex('jsons').whereRaw('created_at <= (SELECT datetime("now", "-1 day"))')
        .del().then(() => knex.raw("UPDATE sqlite_sequence SET seq=(SELECT MAX(id) FROM jsons) WHERE name='jsons'"))
}, null, true);

app.listen(port, () => {
    console.log(`Fake-API listening at http://localhost:${port}`)
})

