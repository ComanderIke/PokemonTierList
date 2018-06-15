import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import List from '@/components/List.vue'


describe('List.spec.js', () => {
  let cmp, vm
  beforeEach(() => {
    cmp = Vue.extend(List) // Create a copy of the original component
    vm = new cmp({
      data: {
        pokemons: [
          {
            "number": "001",
            "name": "Bulbasaur",
            "types": [
              "Grass",
              "Poison"
            ],
            "image": "https://img.pokemondb.net/artwork/bulbasaur.jpg"
          },
          {
            "number": "002",
            "name": "Ivysaur",
            "types": [
              "Grass",
              "Poison"
            ],
            "image": "https://img.pokemondb.net/artwork/ivysaur.jpg"
          },
          {
            "number": "003",
            "name": "Venusaur",
            "types": [
              "Grass",
              "Poison"
            ],
            "image": "https://img.pokemondb.net/artwork/venusaur.jpg"
          }]
      }
    }).$mount() // Instances and mounts the component
  })

it('equals messages to ["Magnetite"]', () => {
  expect(vm.pokemons.length).toEqual(3)
})
})