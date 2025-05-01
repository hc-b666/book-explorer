<template>
  <v-container>
    <div class="results-container">
      <v-card v-for="book in getFavs" :key="book.key">
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
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "FavoritesPage",
  computed: {
    ...mapGetters(['getFavs']),
  }
}
</script>
