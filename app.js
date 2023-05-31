const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.json());

const databaseFile = 'database.json';

function readDatabase() {
    try {
        const data = fs.readFileSync(databaseFile , "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error('Error', error);
        return [];
    }
}

function writeDatabase(database) {
    try {
        const data = JSON.stringify(database, null, 2);
        fs.writeFileSync(databaseFile, data);
    } catch (error) {
        console.error('Error', error);
    }
}

//ім'ям
function userExists(username) {
    const database = readDatabase();
    return database.some(user => user.name === username);
}

//ім'ям та віком
function validateUser(name, age) {
    return name.length > 3 && age >= 0;
}

const users = [
    {
        name: 'Oleh',
        age: 20,
        gender: 'male'
    },
    {
        name: 'Anton',
        age: 10,
        gender: 'male'
    },
    {
        name: 'Inokentiy',
        age: 25,
        gender: 'female'
    },
    {
        name: 'Anastasiya',
        age: 15,
        gender: 'female'
    },
    {
        name: 'Cocos',
        age: 25,
        gender: 'other'
    }
];

if (!fs.existsSync(databaseFile)) {
    writeDatabase(users);
}

// all  user
app.get('/users', (req, res) => {
    const database = readDatabase();
    res.json(database);
});

// +
app.post('/users', (req, res) => {
    const {name, age, gender} = req.body;

    if (validateUser(name, age) && !userExists(name)) {
        const database = readDatabase();
        database.push({name, age, gender});
        writeDatabase(database);
        res.sendStatus(200);
    } else {
        res.status(400).send('Invalid user data');
    }
});

// -
app.delete('/users/:name', (req, res) => {
    const {name} = req.params;

    if (userExists(name)) {
        const database = readDatabase();
        const updatedDatabase = database.filter(user => user.name !== name);
        writeDatabase(updatedDatabase);
        res.sendStatus(200);
    } else {
        res.status(404).send('User not found');
    }
});
//ignor   404
app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});

// Запуск

const PORT = 5001;
app.listen(PORT, () => {
    console.log(' port ${PORT} 🥸');
});
