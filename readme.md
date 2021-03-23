# nahsh-hafas

**Client for the [Nahverkehrsverbund Schleswig-Holstein (NAH.SH)](http://www.nah.sh) HAFAS API.** It acts as a consistent and straightforward interface on top of a verbose API.

This project is actually a thin wrapper around [`hafas-client@5`](https://github.com/public-transport/hafas-client/blob/5/readme.md). [Its docs](https://github.com/derhuerst/hafas-client/tree/5/docs) document the API in general.

[![npm version](https://img.shields.io/npm/v/nahsh-hafas.svg)](https://www.npmjs.com/package/nahsh-hafas)
[![dependency status](https://img.shields.io/david/juliuste/nahsh-hafas.svg)](https://david-dm.org/juliuste/nahsh-hafas)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/nahsh-hafas.svg)](https://david-dm.org/juliuste/nahsh-hafas#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/nahsh-hafas.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installing

```shell
npm install nahsh-hafas
```

## API

Check [the docs for `hafas-client@2`](https://github.com/derhuerst/hafas-client/tree/5/docs) as well as [the NAH.SH-specific customisations](https://github.com/derhuerst/hafas-client/blob/5/p/nahsh/readme.md).


## Getting Started

```javascript
const createClient = require('nahsh-hafas')

const client = createHafas('my-awesome-program-useragent')
```

As an example, we will search for a route from *Flensburg* to *Kiel Hbf*. To get the station ids, use [`locations(query, [opt])`](https://github.com/derhuerst/hafas-client/blob/5/docs/locations.md).

```javascript
client.journeys('8000103', '8000199')
.then((journeys) => console.log(journeys[0]))
.catch(console.error)
```

The output will be a [`journey` object in the *Friendly Public Transport Format* `1.0.1` format](https://github.com/public-transport/friendly-public-transport-format/tree/1.0.1/spec#journey):

```javascript
[ {
    type: "journey",
    legs: [
        {
            origin: {
                type: "station",
                id: "8000103",
                name: "Flensburg",
                location: {
                    type: "location",
                    latitude: 54.774043,
                    longitude: 9.436525
                },
                products: {
                    nationalExp: true,
                    national: true,
                    interregional: false,
                    regional: true,
                    suburban: false,
                    bus: false,
                    ferry: false,
                    subway: false,
                    tram: false,
                    onCall: false
                }
            },
            destination: {
                type: "station",
                id: "8000199",
                name: "Kiel Hbf",
                location: {
                    type: "location",
                    latitude: 54.314982,
                    longitude: 10.131976
                },
                products: {
                    nationalExp: true,
                    national: true,
                    interregional: false,
                    regional: true,
                    suburban: false,
                    bus: false,
                    ferry: false,
                    subway: false,
                    tram: false,
                    onCall: false
                }
            },
            departure: "2018-03-18T14:04:00.000+01:00",
            arrival: "2018-03-18T15:17:00.000+01:00",
            departureDelay: 0,
            arrivalDelay: 0,
            id: "1|36867|6|100|18032018",
            line: {
                type: "line",
                id: "re72",
                name: "RE72",
                public: true,
                class: 8,
                productCode: 3,
                operator: {
                    type: "operator",
                    id: "db-regio-ag-nord",
                    name: "DB Regio AG Nord"
                },
                product: "regional",
                mode: "train"
            },
            direction: "Kiel Hbf",
            departurePlatform: "4",
            arrivalPlatform: "6a"
        }
    ],
    origin: {
        type: "station",
        id: "8000103",
        name: "Flensburg",
        location: {
            type: "location",
            latitude: 54.774043,
            longitude: 9.436525
        },
        products: {
            nationalExp: true,
            national: true,
            interregional: false,
            regional: true,
            suburban: false,
            bus: false,
            ferry: false,
            subway: false,
            tram: false,
            onCall: false
        }
    },
    destination: {
        type: "station",
        id: "8000199",
        name: "Kiel Hbf",
        location: {
            type: "location",
            latitude: 54.314982,
            longitude: 10.131976
        },
        products: {
            nationalExp: true,
            national: true,
            interregional: false,
            regional: true,
            suburban: false,
            bus: false,
            ferry: false,
            subway: false,
            tram: false,
            onCall: false
        }
    },
    departure: "2018-03-18T14:04:00.000+01:00",
    arrival: "2018-03-18T15:17:00.000+01:00",
    tickets: [
        {
            name: "Normalpreis - Einzelkarte 2.Kl",
            tariff: "Normalpreis",
            variant: "Einzelkarte 2.Kl",
            amount: 18.7,
            currency: "EUR"
        },
        {
            name: "Normalpreis - Einzelkarte Kind 2.Kl",
            tariff: "Normalpreis",
            variant: "Einzelkarte Kind 2.Kl",
            amount: 11.25,
            currency: "EUR"
        }
        // …
    ]
} ]
```


## Similar Projects

- - [*Friendly Public Transport Format*](https://github.com/public-transport/friendly-public-transport-format#friendly-public-transport-format-fptf) – A format for APIs, libraries and datasets containing and working with public transport data.
- [db-hafas](https://github.com/derhuerst/db-hafas) – Client for the German Railways (DB).
- [oebb-hafas](https://github.com/juliuste/oebb-hafas) – Client for the Austrian Railways (ÖBB).
- [vbb-hafas](https://github.com/derhuerst/vbb-hafas) – Client for the Berlin & Brandenburg public transport service (VBB).


## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/nahsh-hafas/issues).
