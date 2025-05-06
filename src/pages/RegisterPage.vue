<template>
  <v-container>
    <form @submit.prevent="handleRegister">
      <input v-model="firstName" placeholder="first name" />
      <input v-model="lastName" placeholder="last name" />
      <input v-model="email" placeholder="email" />
      <input v-model="password" placeholder="password" />
      <button>register</button>
    </form>
    <form @submit.prevent="handleLogin">
      <input v-model="email" placeholder="email" />
      <input v-model="password" placeholder="password" />
      <button>login</button>
    </form>
  </v-container>
</template>

<script>
export default {
  name: "RegisterPage",
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }),
  methods: {
    handleRegister() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("register", user);
    },
    handleLogin() {
      const user = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("login", user);
    },
  },
}
</script>
