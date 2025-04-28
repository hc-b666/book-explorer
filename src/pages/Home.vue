<template>
  <v-container>
    <div class="search-container">
      <input type="search" v-model="query" placeholder="Query" />
      <v-btn @click="search" dark>Search</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    query: "",
  }),
  methods: {
    search() {
      if (this.query.trim() === "") return;

      this.$router.push({
        name: "search",
        query: { query: this.query },
      });
    }
  },
}
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

input {
  width: 600px;
  padding: 6px 16px;
  border-radius: 6px;
  outline: none;
  background-color: #fff;
}
</style>
