<template>
  <v-container>
    <div v-if="isLoading" class="spinner-wrapper">
      <spinner />
    </div>
    <div v-if="!isLoading">
      <h2>{{ author?.name }} <span v-if="author?.birth_date">({{ author?.birth_date }})</span></h2>
      <p>{{ author?.bio }}</p>
      <div v-if="author?.photos" class="images">
        <div v-for="photo in author?.photos" :key="photo">
          <v-img v-if="photo > 0" :src="`https://covers.openlibrary.org/b/id/${photo}-M.jpg`"></v-img>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import Spinner from "vue-simple-spinner";

export default {
  name: "AuthorPage",
  components: {
    Spinner,
  },
  data: () => ({
    authorId: "",
  }),
  mounted() {
    this.authorId = this.$route.params.id;
    this.fetchAuthor();
  },
  methods: {
    fetchAuthor() {
      this.$store.dispatch("fetchAuthor", this.authorId);
    },
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    author() {
      return this.$store.getters.author;
    },
  },
}
</script>

<style scoped>
.spinner-wrapper {
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.images {
  display: flex;
}

.images img {
  height: 200px;
}
</style>
