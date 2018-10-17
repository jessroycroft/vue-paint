<template>
  <canvas id="draw" ref="draw" width="800" height="800"></canvas>
</template>

<script>
export default {
  name: 'Canvas',
  data() {
    return {
      provider: {
        context: null,
      }
    }
  },
  provide() {
    return {
      provider: this.provider,
    }
  },
  mounted() {
    const canvas = this.$refs['draw'];
    this.provider.context = canvas.getContext('2d');
    const ctx = this.provider.context;
    ctx.strokeStyle = hue;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
  }
}
</script>

