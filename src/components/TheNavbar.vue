<template>
  <v-container>
    <v-app-bar rounded>
      <nav>
        <router-link to="/" class="navbar-logo" title="Website Logo">
          Book Explorer
        </router-link>
        <router-link to="/favorites">
          <v-btn class="btn-favorites ml-3" title="Favorites">
            <i class="material-icons" style="margin-right: 8px;">favorite</i>
            Favorites
            <div>{{ getFavs.length }}</div>
          </v-btn>
        </router-link>
        <!-- <router-link to="/auth/register">
          Register
        </router-link> -->
      </nav>
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

<style lang="scss" scoped>
.btn-favorites {
  position: relative;

  div {
    color: white;
    
    width: 24px;
    height: 24px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 100%;
    background-color: red;
    
    position: absolute;
    left: 100%;
    bottom: 75%;
  }
}
</style>
