const express = require('express');
const app = express()
const PORT = 5000;


app.use(express.json());

app.get('/', (request, response) => {
	response.send('Main Page')
})
app.listen(PORT, () => {
	console.log('http://localhost:5000')
})

console.log("I XYESOS");