<template>
  <div class="container">
    Home page
    <router-link to="/profiles">Go to Profiles</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
