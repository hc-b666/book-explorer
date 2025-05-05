<template>
  <v-app>
    <base-toaster />
    <v-layout>
      <the-sidebar />
      <main style="width: 100%; display: flex; flex-direction: column;">
        <the-navbar />
        <router-view />
      </main>
    </v-layout>
  </v-app>
</template>

<script>
import BaseToaster from './components/BaseToaster.vue';
import TheNavbar from './components/TheNavbar.vue';
import TheSidebar from './components/TheSidebar.vue';

export default {
  name: "App",
  components: { TheSidebar, TheNavbar, BaseToaster },
};
</script>

<style scoped lang="scss">
.v-application {
  background-color: #42b883 !important;
  display: flex !important;
}
</style>
