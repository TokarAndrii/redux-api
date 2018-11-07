const bodyParser = require('body-parser');
const router = require('./routes');
const config = require('./config');
const connect = require('./utils/connect')
const allowCrossDomain = require('./utils/allowCrossDomain')

const app = require('express')()
app.use(bodyParser.json());                     //for parsing application/json
app.use(bodyParser.urlencoded({extend: true})); // for parsing application/x-www-form-urlencoded

app.use(allowCrossDomain);

console.log('process.env.NODE_ENV - ', process.env.NODE_ENV);
app.use("/articles", router);

app.listen(
    config.port,
    () => {
        console.log('app started on port -', config.port)
    }
)