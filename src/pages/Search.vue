<template>
  <v-container>
    <h3>Total found: {{ numFound }}</h3>
    <div class="search-wrapper">
      <input type="text" v-model="query" />
    </div>
    <div class="text-center">
      <v-pagination v-model="page" :length="totalPages" rounded="circle"></v-pagination>
    </div>
    <search-result :books="books" />
  </v-container>
</template>

<script>
import api from "@/api";
import { debounce } from "lodash";
import SearchResult from "@/components/SearchResult.vue";

export default {
  name: "SearchPage",
  components: {
    SearchResult
  },
  data: () => ({
    query: "",
    books: [],
    page: 1,
    totalPages: 0,
    numFound: 0,
    searchingStatus: {
      message: "",
      isError: false,
      isLoading: false
    }
  }),
  async mounted() {
    this.query = this.$route.query.query;
    await this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      this.searchingStatus.isLoading = true;

      try {
        const response = await api.get(`/search.json?q=${this.query}&page=${this.page}`);
        console.log(response.data.docs);
        this.books = response.data.docs;
        this.numFound = response.data.numFound;
        this.totalPages = Math.ceil(response.data.numFound / 100);
      } catch (error) {
        this.searchingStatus.isError = true;
        throw new Error(error);
      } finally {
        this.searchingStatus.isLoading = false;
      }
    },
    searching: debounce(function () {
      this.fetchBooks();
    }, 300)
  },
  watch: {
    query: "searching",
    page: "fetchBooks",
  },
  computed: {
    totalResults() {
      return this.books.length;
    },
    hasResults() {
      return this.totalResults > 0;
    },
  }
}
</script>

<style scoped lang="scss">
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
