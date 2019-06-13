import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import routes from "./app/api/routes";
import config from "./app/utils/config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const connectionString = `mongodb+srv://avanti:${config.dbPassword}@cluster0-8v2vi.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(connectionString, {useNewUrlParser: true})
    .then(() => {
        app.use('/api', routes())
    })
    .catch(console.log);

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`)
});
