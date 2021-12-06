const mongoose = require('mongoose')

const {LEARN2LIFE_APP_MONGODB_HOST, LEARN2LIFE_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${LEARN2LIFE_APP_MONGODB_HOST}/${LEARN2LIFE_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));
