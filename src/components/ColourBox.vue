<template>
  <li class="box-container">
      <label :for="colour.name">
          <span class="label-text">{{colour.name}}</span>
          <span class="colour-box" :style="styleObject" :data-value="colour.hex"></span>
      </label>
      <input
        type="radio"
        name="colours"
        :id="colour.name"
        :value="colour.hex"
        @change="updateSelectedColour($event)"
        :checked="selectedColour.name === colour.name"        
        >
  </li>
</template>

<script>
export default {
  name: 'ColourBox',
  props: {
      colour: Object,
      selectedColour: Object,
  },
  methods: {
    updateSelectedColour(event) {
      this.$emit('handleChange', {
        key: 'selectedColour',
        name: event.target.id,
        hex: event.target.value,
      })
    }
  },
  computed: {
    styleObject() {
      return {
        backgroundColor: this.colour.hex,
      }
    }
  }
};
</script>

<style lang="sass" scoped>
  li
    list-style-type: none;
    display: inline-block;
    padding: 2px;
    box-sizing: border-box;
    &.selected-colour-display
      display: block;

  input[type="radio"], .label-text 
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    left: -10000px;
    top: auto;


  .colour-box
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid black;
    &:focused 
      outline: 1px dotted #212121;
      outline: 5px auto -webkit-focus-ring-color;
</style>

