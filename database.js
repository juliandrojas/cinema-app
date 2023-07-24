import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:admin@tickets.qtxni89.mongodb.net/clients?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('Db is connected')).catch(error => console.error(error));
