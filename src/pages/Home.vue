<template>
  <div class="main-content">
    <div class="search-container">
      <input type="search" v-model="query" @keydown.enter="search" placeholder="Query" title="Search bar" />
      <v-btn @click="search" dark title="Search">
        <i class="material-icons">search</i>
        <v-icon icon="md:home"></v-icon>
        <span style="margin-left: 12px;">Search</span>
      </v-btn>
    </div>
  </div>
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
        query: { 
          query: this.query,
          page: 1,
        },
      });
    }
  },
}
</script>

<style scoped lang="scss">
.main-content {
  height: 100%;
  flex-grow: 1;
  position: relative;
  background-color: #000;

  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.main-content::before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.6;
  background: url("../../public/background.jpg") no-repeat center center;
  background-size: cover;
  border-radius: 25px;
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  position: relative;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }

  &:deep(.v-btn) {
    background-color: #42b883;

    z-index: 20;

    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%)
  }
}

input {
  width: 600px;
  padding: 12px 160px 12px 24px;
  border-radius: 6px;
  outline: none;
  background-color: #fff;
  
  z-index: 5;

  &::placeholder {
    font-size: 18px;
    font-weight: 500;
  }

  @media screen and (max-width: 920px) {
    width: 100%;
  }
}
</style>
