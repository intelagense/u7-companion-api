const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let companions = {
    'Iolo': {
        'class': 'Bard',
        'str': 18,
        'dex': 19,
        'int': 20,
        'com': 19 
    },
    'Shamino': {
        'class': 'Bard',
        'str': 18,
        'dex': 21,
        'int': 19,
        'com': 16 
    },
    'Dupre': {
        'class': 'Bard',
        'str': 21,
        'dex': 20,
        'int': 18,
        'com': 18 
    },
    'Jaana': {
        'class': 'Bard',
        'str': 13,
        'dex': 16,
        'int': 18,
        'com': 8 
    },
    'Julia': {
        'class': 'Bard',
        'str': 12,
        'dex': 14,
        'int': 18,
        'com': 8 
    },
    'Katrina': {
        'class': 'Bard',
        'str': 11,
        'dex': 15,
        'int': 18,
        'com': 8 
    },
    'Sentri': {
        'class': 'Bard',
        'str': 18,
        'dex': 20,
        'int': 18,
        'com': 16 
    },
    'Spark': {
        'class': 'Bard',
        'str': 14,
        'dex': 22,
        'int': 18,
        'com': 10 
    },
    'Tseramed': {
        'class': 'Bard',
        'str': 16,
        'dex': 17,
        'int': 18,
        'com': 12 
    },
    'unknown': {
        'class' : 'unknown',
        'str': 0,
        'dex': 0,
        'int': 0,
        'com': 0 
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const companionName = request.params.name.toLowerCase()
    if(companions[companionName]){
        response.json(companions[companionName])
    }else{
        response.json(companions['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT} betta catch it.`)
})