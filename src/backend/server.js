const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');


const app = express();
const PORT = 5000;

app.use(express.json());

const DBPizzaMenu = new MongoClient('mongodb+srv://Htabos:14563322asdZ@pizzadb.8u4bd1x.mongodb.net/Pizzateria?retryWrites=true&w=majority&appName=PizzaDB');


async function connectDB() {
  try {
    await DBPizzaMenu.connect();
    console.log('MongoDB подключена успешно!');
    
    const allPizza = DBPizzaMenu.db().collection('menu');
    const pizza = await allPizza.findOne({pizzaName: 'Paprica'});
    console.log(pizza);

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
