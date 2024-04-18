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
          <img src="../assets/images/banners/auth-banner.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style></style>
