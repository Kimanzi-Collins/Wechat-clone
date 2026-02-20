import app from "./src/app";
import { connectDB } from "./src/config/database.ts";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is up and running on port: ${PORT}`);
    }
    );
});