<template>
  <v-container>
    <div class="search-container">
      <input type="search" v-model="query" @keydown.enter="search" placeholder="Query" />
      <v-btn @click="search" dark>
        <i class="material-icons">search</i>
        <v-icon icon="md:home"></v-icon>
        <span style="margin-left: 12px;">Search</span>
      </v-btn>
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

<style scoped lang="scss">
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
}

input {
  width: 600px;
  padding: 6px 16px;
  border-radius: 6px;
  outline: none;
  background-color: #fff;

  @media screen and (max-width: 920px) {
    width: 100%;
  }
}
</style>
