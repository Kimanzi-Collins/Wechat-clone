import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.json({ status: "ok", message : "Server is running" });
});

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;