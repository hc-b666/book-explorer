<template>
  <v-container>
    <div class="results-container">
      <v-card v-for="(book, id) in getFavs" :key="id">
        <v-card-title>
          {{ book.title }}
        </v-card-title>

        <v-card-subtitle>
          <span v-for="(author, idx) in book.author_name" :key="idx">
            {{ author }},
          </span>
        </v-card-subtitle>

        <v-img v-if="book.cover_i" :src="`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`"
          height="300px"></v-img>

        <v-row class="book-info">
          <v-card-actions>
            Languages: {{ book.language?.length ? book.language.length : 1 }}
          </v-card-actions>
          <v-card-actions>
            Publish year: {{ book.first_publish_year }}
          </v-card-actions>
        </v-row>
        <v-card-actions>
          <v-btn class="btn-remove" @click="removeFav(id)">
            Remove
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "FavoritesPage",
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
