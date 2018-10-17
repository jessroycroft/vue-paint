<template>
  <section id="colour-picker">
    <span id="selected-colour" class="colour-box"></span>
    <fieldset>
      <legend>Colour picker:</legend>
      <ColourBox
        class="selected-colour-display"
        :colour="selectedColour"
        :selectedColour="selectedColour"
      />
      <ColourBox 
        v-for="colour in colourList"
        :key="colour.name"
        :colour="colour"
        :selectedColour="selectedColour"
        @handleChange="handleChange($event)"
        />
    </fieldset>
  </section>
</template>

<script>
import ColourBox from '@/components/ColourBox.vue';
import Canvas from '@/components/Canvas.vue';

export default {
  name: 'ColourPicker',
  components: { ColourBox, Canvas },
  methods: {
    handleChange(event) {
        this[event.key] = {
          name: event.name,
          hex: event.hex
        };
    }
  },
  data() {
    return {
      selectedColour: {
        name: 'black',
        hex: '#000',
      },
      colourList: [
        {
          name: 'black',
          hex: '#000',
        },
        {
          name: 'dark-grey',
          hex: '#70757A',
        },
        {
          name: 'light-grey',
          hex: '#9A9DA0',
        },
        {
          name: 'dark-red',
          hex: '#781B1E',
        },
        {
          name: 'light-yellow',
          hex: '#FFFF00',
        }
      ],
    };
  },
};
</script>

