<template>

    <div>{{pokemon.name}} {{pokemon.number}}</div>
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
  apollo: {
    pokemon () {
      return {
        query: gql`query getPokemonByName ($name: String!) {
  pokemon(name: $name) {
      id
      number
      name
      attacks {
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
</style>
