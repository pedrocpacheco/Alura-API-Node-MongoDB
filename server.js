import app from "./src/app.js"

const PORT = process.env.PORT || 3000; // ? Um dos dois

app.listen(PORT, () => console.log(`Server Listening PORT: http://localhost:${PORT}`));