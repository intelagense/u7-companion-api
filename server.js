const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let companions = {
    'iolo': {
        'class': 'Bard',
        'str': 18,
        'dex': 19,
        'int': 20,
        'com': 19 
    },
    'shamino': {
        'class': 'Ranger',
        'str': 18,
        'dex': 21,
        'int': 19,
        'com': 16 
    },
    'dupre': {
        'class': 'Paladin',
        'str': 21,
        'dex': 20,
        'int': 18,
        'com': 18 
    },
    'jaana': {
        'class': 'Druid',
        'str': 13,
        'dex': 16,
        'int': 18,
        'com': 8 
    },
    'julia': {
        'class': 'Tinker',
        'str': 12,
        'dex': 14,
        'int': 18,
        'com': 8 
    },
    'katrina': {
        'class': 'Shepherd',
        'str': 11,
        'dex': 15,
        'int': 18,
        'com': 8 
    },
    'sentri': {
        'class': 'Fighter',
        'str': 18,
        'dex': 20,
        'int': 18,
        'com': 16 
    },
    'spark': {
        'class': 'None',
        'str': 14,
        'dex': 22,
        'int': 18,
        'com': 10 
    },
    'tseramed': {
        'class': 'Fighter',
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

app.get('/:name', (request, response) => {
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