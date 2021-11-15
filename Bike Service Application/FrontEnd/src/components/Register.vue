<template>
  <!--Register Form-->
  <div class="container">
    <div class="row content">
      <div class="col-md-6 mb-3">
        <img src="./Images/service-man.jpg" />
      </div>
      <div class="col-md-6">
        <h3 class="signin-text mb-3">Register</h3>
        <!--Form HTML -->
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" class="form-control" />
          </div>
          <div class="form-group my-2">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control" />
          </div>
          <div class="form-group form-check my-2">
            <input
              type="checkbox"
              name="checkbox"
              class="form-check-input"
              id="checkbox"
            />
            <label class="form-check-label" for="checkbox">Remember Me</label>
          </div>
          <!--Submit Button-->
          <button class="btn btn-primary mt-2" v-on:click="register()">
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
//Register Register Form
export default {
  name: "Register",
  methods: {
    register() {
      alert("Welcome to Go-Service!, You're Succesfully Register");
    },
  },
};
</script>

<!--Css For Register Form-->
<style scoped>
/*Import External Fonts*/
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
body {
  font-family: "Poppins", sans-serif;
  background-color: #f4f4f4;
}
img {
  width: 90%;
  margin-top: 0;
}
.content {
  margin: 8%;
  background-color: #fff;
  padding: 4rem 1rem 4rem 1rem;
}
.signin-text {
  font-style: normal;
  font-weight: 600 !important;
}
.form-control {
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-color: #0275db !important;
  border-style: solid !important;
  border-width: 0 0 1px 0 !important;
  padding: 0px !important;
  color: #495057;
  height: auto;
  border-radius: 0;
  background-color: #fff;
  background-clip: padding-box;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #fff;
  outline: 0;
  box-shadow: none;
}
div .logo {
  width: 4%;
  height: auto;
}

span {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>