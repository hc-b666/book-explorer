<template>
  <v-app-bar rounded>
    <nav>
      <router-link to="/" class="navbar-logo" title="Website Logo">
        Book Explorer
      </router-link>
      <router-link to="/favorites">
        <button class="btn-favorites" title="Favorites">
          <i class="material-icons">favorite</i>
          <div>{{ getFavs.length }}</div>
        </button>
      </router-link>
      <!-- <router-link to="/auth/register">
          Register
        </router-link> -->
    </nav>
  </v-app-bar>
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
.rounded {
  border-radius: 25px !important;
}

a {
  text-decoration: none;
  position: relative;
}

.btn-favorites {
  color: white;
  height: 56px;
  width: 56px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #42b883;

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
    left: 65%;
    bottom: 65%;
  }
}
</style>
