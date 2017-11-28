<template>
  <div id="app">
    <NavMenu/>
    <TableOutNotes/>
  </div>
</template>

<script>
  import NavMenu       from './components/NavMenu.vue'
  import TableOutNotes from './components/TableOutNotes.vue'
export default {
  components: {
      NavMenu,
      TableOutNotes,
}}
</script>

<style>
  body {
    background: url('./assets/mounting.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
  }
</style>
