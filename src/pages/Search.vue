<template>
  <v-container>
    <div class="search-wrapper">
      <input type="text" v-model="query" title="Search bar" />
    </div>
    <div v-if="totalPages > 0" class="text-center" style="margin-bottom: 20px;">
      <v-pagination v-model="page" :length="totalPages" rounded="circle" title="Pagination"></v-pagination>
    </div>
    <div v-if="isLoading" class="spinner-wrapper">
      <spinner />
    </div>
    <div v-if="!isLoading">
      <search-result :books="books" />
    </div>
  </v-container>
</template>

<script>
import { debounce } from "lodash";
import SearchResult from "@/components/SearchResult.vue";
import Spinner from "vue-simple-spinner";

export default {
  name: "SearchPage",
  components: {
    SearchResult,
    Spinner,
  },
  data: () => ({
    query: "",
    page: 1,
  }),
  mounted() {
    this.query = this.$route.query.query;
    this.page = this.$route.query.page ? parseInt(this.$route.query.page) : 0;
    this.loadBooks();
  },
  methods: {
    fetchBooks() {
      this.$store.dispatch("searchBooks", { query: this.query, page: this.page });
    },
    loadBooks() {
      this.fetchBooks();
    },
    searching: debounce(function () {
      this.fetchBooks();
    }, 300),
    updatePage() {
      if (parseInt(this.$route.query.page) === this.page) return;
      this.$router.push({ query: { ...this.$route.query, page: this.page } });
    },
  },
  watch: {
    query: "searching",
    page: ["loadBooks", "updatePage"],
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    totalPages() {
      return this.$store.getters.totalPages;
    },
    books() {
      return this.$store.getters.books;
    },
  }
}
</script>

<style scoped lang="scss">
.spinner-wrapper {
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  width: 600px;
  margin-bottom: 32px;
  padding: 12px 16px;
  border-radius: 6px;
  outline: none;
  background-color: #fff;

  @media screen and (max-width: 920px) {
    width: 100%;
  }
}
</style>
