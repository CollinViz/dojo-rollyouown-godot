const express = require('express');
const app = express();
const PORT = 3000;
var cors = require("cors")
app.use(cors())
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));