<template>
  <router-link :to="{ name: 'detail', params: { name: name }}">
    <div class="pokemon">
      <img :src="image" height="200"/>
      {{number}} {{name}} {{types}}
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['number', 'name', 'types', 'image']
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
  .pokemon {
    box-sizing: border-box;
  }
  img {
    display: block;
    margin: 0 auto;
  }
</style>
