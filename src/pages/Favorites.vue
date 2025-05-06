<template>
  <div style="flex-grow: 1; height: 100%;">
    <div class="results-container">
      <book-card v-for="book, id in getFavs" :book="book" :key="id">
        <button class="like-btn" @click="removeFav(id)" style="padding: 0 8px ;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-heart-icon lucide-heart" :class="{ liked: isLiked(book) }">
            <path
              d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </book-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BookCard from '@/components/BookCard.vue';
import { isEqual } from 'lodash';

export default {
  name: "FavoritesPage",
  components: { BookCard },
  methods: {
    removeFav(id) {
      this.$store.commit("addToast", {
        text: "Removed succesfully",
        status: "success",
      });
      this.$store.commit("removeFav", id);
    },
    isLiked(v) {
      return this.$store.state.favs.some((fav) => isEqual(fav, v));
    },
  },
  computed: {
    ...mapGetters(['getFavs']),
  }
}
</script>

<style scoped>
.v-card__actions {
  &:deep(.btn-remove) {
    color: white;
    background-color: red;
  }
}
</style>
