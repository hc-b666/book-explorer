<template>
  <aside @mouseover="handleMouseOver" @mouseleave="handleMouseLeave" class="sidebar" :class="{ sidebarActive: active }">
    <v-list>
      <v-list-item>
        <i class="material-icons">book</i>
        <span v-if="active" class="sidebar-title">Book Explorer</span>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item>
        <router-link to="/" class="sidebar-link">
          <i class="material-icons">home</i>
          <span v-if="active" class="sidebar-subtitle">Home</span>
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/favorites" class="sidebar-link">
          <i class="material-icons">favorite</i>
          <span v-if="active" class="sidebar-subtitle">Favorite</span>
        </router-link>
      </v-list-item>
    </v-list>
  </aside>
</template>

<script>
export default {
  name: "TheSidebar",
  data: () => ({
    active: false,
  }),
  methods: {
    handleMouseOver() {
      this.active = true;
    },
    handleMouseLeave() {
      this.active = false;
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  height: 100%;
}

.sidebar {
  width: 64px;
  background: #fff;
  transition: width 0.3s ease;
}

.sidebarActive {
  width: 300px;
}

.sidebar-link {
  color: #000 !important;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.sidebar-title {
  font-size: 20px;
  margin-left: 16px;
}

.sidebar-subtitle {
  font-size: 18px;
  margin-left: 16px;
}
</style>
