<template>
  <v-app>
    <base-toaster />
    <v-layout>
      <the-sidebar />
      <main>
        <v-container>
          <the-navbar />
          <router-view />
        </v-container>
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
  background-color: #42b883;
  display: flex;

  main {
    width: 100%;
    height: 100%;
    
    .container {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }

  &:deep(nav) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .navbar-logo {
      color: #000;
      font-size: 24px;
      font-weight: 600;
      text-decoration: none;
    }
  }
}
</style>
