<template>
  <div class="container">
    All profiles
    <router-link to="/">Go Home</router-link>
    <router-link to="/login">Login</router-link>
    <Table/>
  </div>
</template>

<script>
import Table from "../components/Table";
export default {
  components: {
    Table
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
