<template>
  <div class="auth-section-container">
    <div class="auth-section-holder">
      <div class="pages-row">
        <div class="pages-col-6">
          <form action="" class="auth-form-holder">
            <h2>Sign In</h2>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button type="submit">SUBMIT</button>
            <div class="form-links">
              <p>Dont have Acount? <router-link to="/sign-up">Sign Up</router-link></p>
              <p>Go back to <router-link to="/">Home</router-link></p>
            </div>
          </form>
        </div>
        <div class="pages-col-6">
          <img src="@/assets/images/banners/auth-banner.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style>
.auth-section-container {
  height: 100vh;
  background-color: #fffffe;
  padding: 10vh 5vw;
}

.auth-section-holder {
  box-shadow: 0px 0px 95px 4px rgba(0, 0, 0, 0.49);
  -webkit-box-shadow: 0px 0px 95px 4px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 0px 0px 95px 4px rgba(0, 0, 0, 0.49);
  border-radius: 5vh;
}

.auth-form-holder {
  height: 80vh;
  background-color: #212121;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0 5vw;
  border-top-left-radius: 5vh;
  border-bottom-left-radius: 5vh;
  position: relative;
}

.auth-section-holder img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
  border-top-right-radius: 5vh;
  border-bottom-right-radius: 5vh;
}

.auth-form-holder h2 {
  font-size: 6vh;
  margin-bottom: 3vh;
  color: #fffffe;
  text-transform: uppercase;
  letter-spacing: 0.5vh;
  font-weight: 300;
}

.auth-form-holder input {
  width: 100%;
  height: 5vh;
  background-color: transparent;
  border: none;
  border-bottom: 0.1vh solid #fffffe;
  margin-bottom: 2vh;
  font-size: 1.8vh;
  color: #fffffe;
  font-weight: 300;
}

.auth-form-holder button {
  width: 100%;
  height: 5vh;
  color: #212121;
  background-color: #fffffe;
  border: 0.1vh solid #212121;
  font-size: 1.8vh;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.5s;
  margin-bottom: 5vh;
}

.auth-form-holder button:hover {
  color: #04a533;
  background-color: #212121;
  border: 0.1vh solid #04a533;
}

.form-links {
  text-align: center;
}

.form-links p {
  font-size: 1.8vh;
  color: #fffffe;
  margin-bottom: 2vh;
}

.form-links p a {
  font-size: 1.8vh;
  color: #fffffe;
}

@media (max-width: 790px) {
  .auth-section-holder .pages-row {
    flex-direction: column-reverse;
  }

  .auth-section-holder .pages-col-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .auth-section-holder img {
    height: 20vh;
    border-top-left-radius: 5vh;
    border-bottom-right-radius: 0;
  }

  .auth-form-holder {
    height: 60vh;
    border-top-left-radius: 0;
    border-bottom-left-radius: 5vh;
    border-bottom-right-radius: 5vh;
    position: relative;
  }
}
</style>
