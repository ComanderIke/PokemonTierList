<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="types">
      <b-button @click="updateType(event, '')">All</b-button>
      <b-button v-for="type in types" :key="type" @click="updateType($event, type)">{{type}}</b-button>
    </div>
    <div class="list">
      <div v-if="$apollo.loading">Loading...</div>
      <list-item v-for="pokemon in pokemons" :key="pokemon.id" :number="pokemon.number" :name="pokemon.name" :types="pokemon.types" :image="pokemon.image"></list-item>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem'
import gql from 'graphql-tag'

export default {
  name: 'List',
  components: {
    ListItem
  },
  data () {
    return {
      msg: 'Here you see all pokemon',
      pokemons: [
        // {id: 1, name: 'Pikachu', type: 'Electric'},
        // {id: 2, name: 'Bulbasaur', type: 'Grass'}
      ],
      types: ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'],
      selectedType: ''
    }
  },
  apollo: {
    pokemons: {
      query: gql`query getPokemonsByType ($first: Int!, $type: String!){
        pokemons(first: $first, type: $type) {
          number,
          name,
          types,
          image
        }
      }`,
      variables () {
        return {
          first: 160,
          type: this.selectedType
        }
      }
    }
  },
  methods: {
    updateType: function (event, type) {
      console.log(type)
      this.selectedType = type
      this.$apollo.queries.pokemons.refetch()
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
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-auto-flow: row;
  }
</style>
