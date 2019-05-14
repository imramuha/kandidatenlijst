<template>
  <div class="container">
    <div></div>
    {{profiles}}
    <!-- <router-link to="/">Go Home</router-link>
    <router-link to="/login">Login</router-link>-->
    <Table/>
  </div>
</template>



<script>
// It works in react, we might change vue with react...
import Table from "../components/Table";
import axios from "axios";
export default {
  components: {
    Table
  },
  data() {
    return {
      profiles: []
    };
  },
  mounted() {
    // Can we cleaner https://github.com/gothinkster/vue-realworld-example-app/blob/master/src/common/api.service.js
    axios
      .get("http://127.0.0.1:8000/api/profiles")
      .then(response => console.log((this.profiles = response.data)))
      .catch(err => console.log(err));
  }
};
</script>
