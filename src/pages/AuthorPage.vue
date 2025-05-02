<template>
  <v-container>
    <div v-if="searchingStatus.isLoading" class="spinner-wrapper">
      <spinner />
    </div>
    <h2>{{ author?.name }} <span v-if="author?.birth_date">({{ author?.birth_date }})</span></h2>
    <p>{{ author?.bio }}</p>
    <div v-if="author?.photos" class="images">
      <div v-for="photo in author?.photos" :key="photo">
        <v-img v-if="photo > 0" :src="`https://covers.openlibrary.org/b/id/${photo}-M.jpg`"></v-img>
      </div>
    </div>
  </v-container>
</template>

<script>
import api from "@/api";
import Spinner from "vue-simple-spinner";

export default {
  name: "AuthorPage",
  components: {
    Spinner,
  },
  data: () => ({
    authorId: "",
    author: null,
    searchingStatus: {
      message: "",
      isError: false,
      isLoading: false,
    },
  }),
  async mounted() {
    this.authorId = this.$route.params.id;
    await this.fetchAuthors();
  },
  methods: {
    async fetchAuthors() {
      this.searchingStatus.isLoading = true;

      try {
        const res = await api.get(`/authors/${this.authorId}.json`);
        console.log(res.data);
        this.author = res.data;
      } catch (error) {
        this.searchingStatus.isError = true;
        throw new Error(error);
      } finally {
        this.searchingStatus.isLoading = false;
      }
    }
  }
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
