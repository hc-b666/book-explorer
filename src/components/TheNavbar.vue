<template>
  <v-container>
    <v-app-bar rounded>
      <div class="navbar">
        <router-link to="/" class="navbar-logo">
          Book Explorer
        </router-link>
        <router-link to="/favorites">
          <v-btn class="ml-3" dark>
            <i class="material-icons" style="margin-right: 8px;">favorite</i>
            Favorites ({{ getFavs.length }})
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "TheNavbar",
  computed: {
    ...mapGetters(['getFavs']),
  },
}
</script>

<style scoped>
.navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  color: #000;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
}
</style>
