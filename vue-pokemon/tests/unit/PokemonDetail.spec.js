import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import PokemonDetail from '@/components/PokemonDetail.vue'


describe('PokemonDetail.spec.js', () => {
  let cmp, vm
  beforeEach(() => {
    cmp = Vue.extend(PokemonDetail) // Create a copy of the original component
    vm = new cmp({
      data: { // Replace data value with this fake data
        pokemon: { number: '081', name: 'Magnetite' }
      }
    }).$mount() // Instances and mounts the component
  })

it('equals messages to ["Magnetite"]', () => {
  expect(vm.pokemon.name).toEqual('Magnetite')
})
})