<template>
    <div class="container">
        <h1>{{pokemon.number}} - {{pokemon.name}}</h1>
        <div class="pokemon">
            <div class="image">
                <img :src="pokemon.image" width="40%">
            </div>
            <div class="stats">
                <h3>Stats</h3>
                <div v-if="pokemon.weight"><b>Weight: </b>{{pokemon.weight.minimum}} - {{pokemon.weight.maximum}}</div>
                <div v-if="pokemon.height"><b>Height: </b>{{pokemon.height.minimum}} - {{pokemon.height.maximum}}</div>
                <div><b>Types: </b><span class="types" v-for="(type,index) in pokemon.types" :key="type">{{type}}<span
                        v-if="index != pokemon.types.length-1 ">, </span></span></div>
                <div><b>Resistances: </b><span class="resistant" v-for="(res, index) in pokemon.resistant" :key="res">{{res}}<span
                        v-if="index != pokemon.resistant.length-1 ">, </span></span></div>
                <div><b>Weaknesses: </b><span  class="weaknesses" v-for="(weak, index) in pokemon.weaknesses" :key="weak">{{weak}}<span
                        v-if="index != pokemon.weaknesses.length-1 ">, </span></span></div>
            </div>
        </div>
        <div class="right">
            <div class="attacks" v-if="pokemon.attacks">
                <div class="fastattacks">
                    <h3>Fast Attacks</h3>
                    <li class="attackHeader"><span class="entryType"><b>Type</b></span><span
                            class="entryName"><b>Name</b></span> <span class="entryDamage"><b>Damage</b></span></li>
                    <li class="attack" v-for="fast in pokemon.attacks.fast" :key="fast.name"><span class="entryType">{{fast.type}}</span><span
                            class="entryName">{{fast.name}}</span> <span class="entryDamage">{{fast.damage}}</span></li>
                </div>
                <div class="specialattacks">
                    <h3>Special Attacks</h3>
                    <li class="attackHeader"><span class="entryType"><b>Type</b></span><span
                            class="entryName"><b>Name</b></span> <span class="entryDamage"><b>Damage</b></span></li>
                    <li class="attack" v-for="spec in pokemon.attacks.special" :key="spec.name"><span class="entryType">{{spec.type}}</span><span
                            class="entryName">{{spec.name}}</span> <span class="entryDamage">{{spec.damage}}</span></li>
                </div>
            </div>
            <div class="evolution" v-if="pokemon.evolutions">
                <h3>Evolutions</h3>
                <li v-for="evolution in pokemon.evolutions" :key="evolution.id"><input type="image"
                                                                                       :src="evolution.image"
                                                                                       height="100"
                                                                                       v-on:click="showDetails(evolution.name)">
                    <h4>{{evolution.name}}</h4></li>
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'PokemonDetail',
  props: ['name'],
  data () {
    return {
      pokemon: ''
    }
  },
  methods: {
    showDetails: function (pokemonName) {
      if (event) {
        this.$router.push({name: 'detail', params: {name: pokemonName}})
        location.reload()
      }
    }
  },
  apollo: {
    pokemon () {
      return {
        query: gql`query getPokemonByName ($name: String!) {
  pokemon(name: $name) {
      id
      number
      name
      image
      types
      resistant
      weaknesses
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        number
        name
        image
        weight {
          minimum
          maximum
        }
        attacks {
          fast {
            name
            type
            damage
          }
        }
      }
    }
}`,
        variables: {
          name: this.$route.params.name
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .container {
        border-radius: 10px 10px 10px 10px;
        border-style: solid;
        border-width: 3px;
        height: 700px;
        width: 100%;
        padding: 0 0 0 0;
        color: darkgreen;

    }

    h3 {
        background: green;
        color: lightgreen;
        text-align: center;
    }

    h1 {
        background: darkgreen;
        color: lightgreen;
        height: 10%;
        padding-top: 15px;
        margin-bottom: 0px;
        vertical-align: bottom;
    }

    .pokemon {
        display: inline-block;
        vertical-align: top;
        width: 65%;
        height: 90%;
    }

    .right {
        display: inline-block;
        vertical-align: top;
        width: 35%;
        height: 90%;
    }

    .entryType {
        display: inline-block;
        width: 25%;
        font-size: 20px;
    }

    .entryName {
        display: inline-block;
        width: 50%;
        font-size: 20px;
    }

    .entryDamage {
        display: inline-block;
        width: 25%;
        font-size: 20px;
    }

    .stats {
        display: inline-block;
        width: 100%;
        background: lightgreen;
        border-style: solid;
        border-width: 2px;
        height: 45%;
        border-left-width: 0px;
        border-top-width: 0px;
        border-bottom-width: 0px;
        color: darkgreen;
        font-size: 26px;
        text-align: left;
        border-radius: 0 0 0 5px;
    }

    .stats div {
        padding-left: 2%;
    }

    .image {
        height: 55%;
        padding-top: 2%;

        border-style: solid;
        border-width: 2px;
        border-left-width: 0px;
        border-top-width: 0px;
        background: lightgreen;
        color: darkgreen;
    }

    .evolution {
        display: inline-block;
        width: 100%;
        height: 34%;
        background: lightgreen;
        color: darkgreen;
        border-radius: 0 0 5px 0;
    }

    .attacks {
        display: inline-block;
        width: 100%;
        height: 66%;
    }

    .attack {
        border-style: solid;
        margin-left: 0px;
        text-align: left;
        padding-left: 5%;
        width: 100%;
        border-width: 1px;
        border-left-width: 0px;
        border-right-width: 0px;
        border-top-width: 0px;
        color: darkgreen;

    }

    .attackHeader {
        border-style: solid;
        margin-left: 0px;
        text-align: left;
        padding-left: 5%;
        width: 100%;
        color: darkgreen;
        border-width: 2px;
        border-left-width: 0px;
        border-right-width: 0px;
    }

    .fastattacks {
        display: inline-block;
        width: 100%;
        background: lightgreen;

        border-style: solid;
        border-width: 2px;
        height: 50%;
        border-left-width: 0px;
        border-right-width: 0px;
        border-top-width: 0px;
        color: darkgreen;
    }

    .specialattacks {
        display: inline-block;
        width: 100%;
        background: lightgreen;

        border-style: solid;
        border-width: 2px;
        height: 50%;
        border-left-width: 0px;
        border-right-width: 0px;
        border-top-width: 0px;
        color: darkgreen;
    }
</style>
