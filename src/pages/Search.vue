<template>
  <v-container>
    <div class="search-wrapper">
      <input type="text" v-model="query" />
    </div>
    <div class="text-center">
      <v-pagination v-model="page" :length="totalPages" rounded="circle"></v-pagination>
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
    this.fetchBooks();
  },
  methods: {
    fetchBooks() {
      this.$store.dispatch("searchBooks", { query: this.query, page: this.page });
    },
    searching: debounce(function () {
      this.$store.dispatch("searchBooks", { query: this.query, page: this.page });
    }, 300),
  },
  watch: {
    query: "searching",
    page: "fetchBooks",
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

h3 {
  color: white;
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
