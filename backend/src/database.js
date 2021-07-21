const mongoose = require('mongoose')

const {LEARN2LIFE_APP_MONGODB_HOST, LEARN2LIFE_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${LEARN2LIFE_APP_MONGODB_HOST}/${LEARN2LIFE_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});
