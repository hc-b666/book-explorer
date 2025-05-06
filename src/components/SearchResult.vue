<template>
  <div class="results-container">
    <book-card v-for="book in books" :book="book" :key="book.key">
      <button class="like-btn" @click="likeFav(book)" style="padding: 0 8px ;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"
          :class="{ liked: isLiked(book) }">
          <path
            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </button>
    </book-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import BookCard from './BookCard.vue';
import { isEqual } from 'lodash';

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
    isLiked(v) {
      return this.$store.state.favs.some((fav) => isEqual(fav, v));
    },
    ...mapMutations(['addFav']),
  },
}
</script>

<style lang="scss" scoped>
.like-btn>svg {
  width: 20px;
  height: 20px;
  stroke: #000;
}

.like-btn>svg:hover {
  fill: red;
  opacity: 0.5;
}

.liked {
  stroke: red !important;
  fill: red;
}
</style>
