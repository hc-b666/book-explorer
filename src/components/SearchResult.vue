<template>
  <div class="results-container">
    <book-card v-for="book in books" :book="book" :key="book.key">
      <v-card-actions>
        <v-btn class="btn-like" @click="likeFav(book)">
          Like
        </v-btn>
      </v-card-actions>
    </book-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import BookCard from './BookCard.vue';

export default {
  name: "SearchResult",
  components: { BookCard },
  props: {
    books: {
      type: [Array, Function]
    },
  },
  methods: {
    likeFav(v) {
      this.$store.dispatch("addFavWithToast", v);
    },
    ...mapMutations(['addFav']),
  },
}
</script>

<style scoped>
.v-card__actions {
  &:deep(.btn-like) {
    color: white;
    background-color: blue;
  }
}
</style>
