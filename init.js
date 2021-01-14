import app from "./app";

const PORT = 4000;

const handleListening = () => console.log(`😊listening on : html//localhost:${PORT}`);

app.listen(PORT, handleListening);