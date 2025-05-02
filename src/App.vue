<template>
  <v-app class="app">
    <the-navbar />
    <base-toaster />
    <router-view />
  </v-app>
</template>

<script>
import BaseToaster from './components/BaseToaster.vue';
import TheNavbar from './components/TheNavbar.vue';

export default {
  name: "App",
  components: { TheNavbar, BaseToaster },
};
</script>

<style>
.v-application {
  background-color: #42b883 !important;
}
</style>
