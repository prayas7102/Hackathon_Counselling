const mongoose = require('mongoose');
exports.databaseConnect = () => {
    mongoose.connect('mongodb://localhost:27017/Hackathon', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    })
}