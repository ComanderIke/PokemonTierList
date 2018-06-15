# PokemonTierList

Created by Stefan Höller and Daniel Kepplinger.

This project consists of:
 * a list of pokemons
 * a detail page.
 * 3 unit tests
 * 3 e2e tests
 * a PWA manifest + serviceworker

To see the PWA capabilities like adding to the homescreen, look at:
https://pokemonvue-34b96.firebaseapp.com
Unfortunately we weren't able to deploy the GraphQL Server so it has to run locally.

Local configuration:
Server localhost:5000
Client localhost:8080

# Start server

```sh
yarn
yarn run watch # Using nodemon for auto-reloading
```

# Start client
Install modules:

```sh
yarn
yarn serve
```