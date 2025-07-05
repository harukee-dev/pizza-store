const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = 5000;

app.use(express.json());


const DB_URL = 'mongodb+srv://Htabos:14563322asdZ@pizzadb.8u4bd1x.mongodb.net/?retryWrites=true&w=majority&appName=PizzaDB'; 

async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log('MongoDB подключена успешно!');
  } catch (err) {
    console.error('Ошибка подключения к MongoDB:', err.message);
    process.exit(1); // Завершаем процесс при ошибке
  }
}

// Вызываем функцию подключения
connectDB();

app.listen(PORT, () => {
	console.log('http://localhost:5000');
});
