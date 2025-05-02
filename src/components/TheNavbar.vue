<template>
  <v-container>
    <v-app-bar rounded>
      <router-link to="/">
        <v-btn dark>Home</v-btn>
      </router-link>
      <router-link to="/favorites">
        <v-btn class="ml-3" dark>Favorites</v-btn>
      </router-link>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>
