import express from "express";
import pm2 from "pm2";

const app = express();
const { PORT = 9070 } = process.env;

app.get('/', (req, res) => {
    console.log('foo');
    pm2.describe('testPm2app', (err, data) => {
        if (err) {
            res.status(500).end();
        }
        res.send(data);
    })
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});