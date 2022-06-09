# u7-companion-api
Ultima VII Part I object database API.

## What is the purpose?
An API consiting of detailed objects built from data related to Ultima VII Part I (1992). This data is primarily intended to be used as a quick reference resourse for speedrunners to help plan routing for runs. 

## Endpoints

### Party Starting Stats Endpoints

```
https://u7-companion-api.herokuapp.com/unknown
```

Replace /unknown with the name of one of the 9 party members available in the game. (Case insensitive.)

* /Iolo
* /Shamino
* /Dupre
* /Jaana
* /Julia
* /Katrina
* /Sentri
* /Spark
* /Tseramed

## Tech Used
This app was built using:

* Node.js
* Express
* MongoDB/Mongoose

## Optimizations
Future improvements could include:

* Starting coordinate locations for items and NPCs.
* Item size data.
* Bestiary and monster egg generator coordinates.
* Coordinates for keys and matching containers/doors.
* Trainer location and formulas.
* Spell vendor data.

## Lessons Learned
Data that is useful to speedrunners varies as routes are optimized and altered. **Ultima**tely, knowing what to account for in a database like this is practicably impossible and based on the creativity of the individual runner.
