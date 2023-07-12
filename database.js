import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://admin:admin@cinemacluster.ziod8dk.mongodb.net/carritoMercado?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('Db is connected')).catch(error => console.error(error))