<template>
  <div class="results-container">
    <v-card v-for="book in books" :key="book.key" class="book-wrapper">
      <v-card-title>
        <div class="book-title">
          {{ book.title }}
        </div>
      </v-card-title>

      <v-card-subtitle>
        <span v-for="(author, idx) in book.author_name" :key="idx">
          <router-link :to="`/authors/${book.author_key[idx]}`">{{ author }}</router-link>,
        </span>
      </v-card-subtitle>

      <v-img v-if="book.cover_i" :src="`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`"
        height="300px"></v-img>
      <div class="no-image" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-image-icon lucide-image">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>

      <v-row class="book-info">
        <v-card-actions>
          Languages: {{ book.language?.length ? book.language.length : 1 }}
        </v-card-actions>
        <v-card-actions>
          Publish year: {{ book.first_publish_year }}
        </v-card-actions>
        <v-card-actions>
          <v-btn class="btn-like" @click="likeFav(book)">
            Like
          </v-btn>
        </v-card-actions>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: "SearchResult",
  props: {
    books: {
      type: [Array, Function]
    },
  },
  methods: {
    likeFav(v) {
      this.addFav(v);
    },
    ...mapMutations(['addFav']),
  }
}
</script>

<style scoped>
.book-wrapper {
  overflow: hidden;
}

.book-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.no-image {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
}
</style>
