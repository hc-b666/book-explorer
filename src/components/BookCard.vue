<template>
  <v-card>
    <div style="border-top-left-radius: 16px; border-top-right-radius: 16px; overflow: hidden;">
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
    </div>

    <v-card-title>
      <div class="book-title">
        {{ book.title }}
      </div>
    </v-card-title>

    <v-row class="book-info">
      <v-card-subtitle v-if="book.author_name && book.author_name.length > 0">
        <router-link :to="`/authors/${book.author_key[0]}`">{{ truncateText(book.author_name[0], 16) }}</router-link>
      </v-card-subtitle>

      <slot></slot>
    </v-row>

    <!-- <v-row class="book-info"> -->
    <!-- <v-card-actions>
        Languages: {{ book.language?.length ? book.language.length : 1 }}
      </v-card-actions>
      <v-card-actions>
        Publish year: {{ book.first_publish_year }}
      </v-card-actions> -->
    <!-- <slot></slot> -->
    <!-- </v-row> -->
  </v-card>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: {
      type: Object,
    },
  },
  methods: {
    truncateText: function (text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      }
      return text;
    }
  },
}
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 16px;
  overflow: hidden;

  .v-card__title {
    font-size: 16px;
    padding: 8px 12px;
  }

  .v-card__subtitle {
    font-size: 14px;
    padding: 0 12px 12px;
  }
}

.book-info {
  padding: 0 12px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

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
