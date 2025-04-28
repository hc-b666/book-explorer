<template>
  <v-app class="app">
    
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
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.v-application {
  background-color: #42b883 !important;
}
</style>
