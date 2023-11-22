import mongoose from "mongoose";
import app from "./app"
import config from "./config";

(async function server() {
    try {
        // DB connection
        await mongoose.connect(config.databaseURL as string);
        console.log('Connected to DB 🔌');

        // server listening
        app.listen(config.port, () => {
            console.log(`server 🔥 on port: ${config.port}`)
        });
    } catch (error) {
        console.log(error);
    }
})();