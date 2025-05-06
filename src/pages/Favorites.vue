<template>
  <v-container>
    <div class="results-container">
      <book-card v-for="book, id in getFavs" :book="book" :key="id">
        <v-card-actions>
          <v-btn class="btn-remove" @click="removeFav(id)">
            Remove
          </v-btn>
        </v-card-actions>
      </book-card>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import BookCard from '@/components/BookCard.vue';

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
    }
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
