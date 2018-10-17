<template>
  <div id="app">
    <h1>Paint</h1>
    <ColourPicker />
    <Canvas />
  </div>
</template>

<script>
import ColourPicker from '@/components/ColourPicker.vue';

export default {
  name: 'app',
  components: {
    ColourPicker,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
