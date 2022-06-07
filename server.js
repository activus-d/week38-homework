const express = require('express')
const app = express()
const PORT = 3000


const footballClubs = {
    'manchester united': {
        'owner': 'Manchester United Plc',
        'year founded': 1878,
        'manager': 'Erik ten Hag',
        'captain': 'David de Gea',
    },
    'chelsea': {
        'owner': 'Todd Boehly',
        'year founded': 1905,
        'manager': 'Thomas Tuchel',
        'captain': 'Azpilicueta',
    },
    'arsenal': {
        'owner': 'Stan Kroenke',
        'year founded': 1886,
        'manager': 'Mikel Arteta',
        'captain': 'Martin Odegaard',
    }
}

app.get( '/', ( request, response ) => {
    response.sendFile(__dirname + '/index.html')
} )

app.get( '/api/:footballClub', ( request, response ) => {
    let footballClub = request.params.footballClub.toLowerCase()
    if( footballClubs[footballClub] ) {
        response.json(football[footballClub])
    }else {
        response.json('unknown')
    }
} )

app.listen( process.env.PORT || PORT, () => {
    console.log( `${PORT} is running` )
} )
