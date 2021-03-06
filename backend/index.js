const express = require('express');
const cors = require('cors');
const CronJob = require('cron').CronJob;
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://postgres:postgres@localhost:5432/fakeapi',
});
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

// GET JSON by ID
app.get('/api/:id', (req, res) => {
  knex('jsons')
    .select('json')
    .where({ id: req.params.id })
    .then((results) => {
      const statusCode = results[0] ? 200 : 404;
      const respJson = results[0]
        ? JSON.parse(results[0]['json'])
        : JSON.stringify({
            msg: `JSON of ID ${req.params.id} does not exist`,
          });
      return res.status(statusCode).send(respJson);
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ msg: 'Internal server error, please try again later' });
    });
});

// POST new JSON
app.post('/api', (req, res) => {
  const contentType = req.header('content-type').split(';')[0];
  if (contentType !== 'application/json')
    return res.json({ response: 'Only JSON format is available' });
  let json = JSON.stringify(req.body);
  knex('jsons')
    .insert({ json }, 'id')
    .then((value) => {
      let id = value[0];
      return res.status(200).send({
        id,
        msg: `Sucess! Your JSON is available at /api/${id} for the next 24 hours`,
      });
    });
});

const job = new CronJob(
  '0,30 * * * *',
  function () {
    // Deleting rows older than 1 day then reseting auto increment to max ID+1
    knex('jsons')
      .whereRaw("created_at <= NOW() - INTERVAL '1 day'")
      .del()
      .then(() =>
        knex.raw(`
            BEGIN;
            LOCK TABLE jsons IN EXCLUSIVE MODE;
            SELECT setval('jsons_id_seq', COALESCE((SELECT MAX(id)+1 FROM jsons), 1), false);
            COMMIT;`)
      );
  },
  null,
  true
);

app.listen(port, () => {
  console.log(`Fake-API is online at localhost:${port}`);
});
