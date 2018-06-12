<template>
  <div class="list">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ol>
      <list-item v-for="pokemon in pokemons" :key="pokemon.id" :name="pokemon.name" :type="pokemon.type"></list-item>
    </ol>
  </div>
</template>

<script>
import ListItem from './ListItem'

export default {
  name: 'List',
  components: {
    ListItem
  },
  data () {
    return {
      msg: 'Here you see all pokemon',
      pokemons: [
        {id: 1, name: 'Pikachu', type: 'Electric'},
        {id: 2, name: 'Bulbasaur', type: 'Grass'}
      ]
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
</style>
