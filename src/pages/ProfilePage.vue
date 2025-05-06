<template>
  <v-container>
    <h1>profile page</h1>
  </v-container>
</template>

<script>
export default {
  name: "ProfilePage",
  created() {
    this.$store.dispatch("getProfile");
  },
}
</script>
