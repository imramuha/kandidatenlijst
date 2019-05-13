<template>
  <div class="grid">
    <div class="card">
      <div class="login_title">Kanditatenlijst app</div>
      <div class="login_body">
        <div class="form_field">
          <input type="email" placeholder="Email" required>
        </div>

        <div class="form_field">
          <input type="password" placeholder="Paswoord" required>
        </div>

        <div class="button_container">
          <input @click="sendData" type="submit" value="Login">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      data: []
    };
  },
  methods: {
    sendData() {
      console.log("it works");
    }
  }
};
</script>

<style scoped>
body {
  background-color: #000;
}
.grid {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.card {
  padding: 2rem;
  border-radius: 1rem;
  background-color: #fff;
}

.login_title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem 0;
}

.form_field input {
  border: 0.0625em solid #e5e5e5;
  padding: 1em 1.25em;
  border-radius: 0.5rem;
  margin: 1rem;
  color: #000;
  font-weight: bold;
}

.button_container {
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
}

.button_container input {
  background: #92b93a;
  font-weight: 400;
  color: #fff;
  padding: 0.5rem 3rem;
  border: none;
  border-radius: 2rem;
}
</style>
