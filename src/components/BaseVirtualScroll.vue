<template>

  <div @onscroll="startRowStyles">
    <h1 :style="nodeStyles"></h1>
    <h1 v-for="(el, idx) of data" :key="idx" :style="{ height: rowHeight }">
      {{ el }}
    </h1>
    <h1 :style="endRowStyles"></h1>
  </div>

</template>

<script>
export default {
  name: "BaseVirtualScroll",
  data: () => ({
    tPos: 0,
    rowHeight: 20,
    limit: 6,
    data: [],
    visibleData: [],
  }),
  mounted() {
    const rdmData = Array(100).fill();
    this.data = [...rdmData.map((_, i) => i + 1)];

    if (this.data.slice(this.startNode, this.startNode + this.limit).length > 0) {
      this.visibleData = this.data.slice(this.startNode, this.startNode + this.limit);
    }
  },
  methods: {
    captureOnScroll(e) {
      console.log(e);
    },
  },
  computed: {
    nodeStyles() {
      return {
        height: `${this.rowHeight}px`,
      };
    },
    startNode() {
      return Math.ceil(this.tPos / this.rowHeight);
    },
    startRowHeight() {
      return this.tPos;
    },
    startRowStyles() {
      return {
        height: `${this.startRowHeight}px`,
      };
    },
    endRowHeight() {
      return this.data.length * this.rowHeight - this.startRowHeight - this.limit * this.rowHeight;
    },
    endRowStyles() {
      return {
        height: `${this.endRowHeight}px`,
      };
    },
  },
}
</script>

<style scoped></style>
