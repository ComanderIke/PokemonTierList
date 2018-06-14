<template>
  <div class="pokemon" @click="showDetails">
    <img :src="image" height="200"/>
    <div class="description">
      {{name}} <br/>
      <span class="small">#{{number}}
        <span v-for="type in types" :key="type">{{type}} </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['number', 'name', 'types', 'image'],
  methods: {
    showDetails: function (event) {
      this.$router.push({name: 'detail', params: { name: this.name }})
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
  .pokemon {
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
  }
  img {
    display: block;
    margin: 0 auto;
    opacity: 1;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  .description {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .pokemon:hover img {
    opacity: 0.3;
  }

  .pokemon:hover .description {
    opacity: 1;
  }

  .small {
    font-size: 13px;
  }
</style>
