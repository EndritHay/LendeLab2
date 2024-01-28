import mongoose from "mongoose";

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectToDB = async () => {


    const connectionUrl = 'mongodb+srv://hajrullahuend:Presheva123@ecommerce.4yl17n9.mongodb.net/';

    mongoose.connect(connectionUrl, configOptions).then(() => console.log('Ecommerce database connected successfully')).catch((err) => console.log(`Getting error from db connection ${err.message}`))
};
export default connectToDB;