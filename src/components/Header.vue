<template>
  <div class="header-container">
    <div class="header-holder">
      <div class="header-logo-holder">
        <router-link to="/"
          ><img src="@/assets/images/paramount-logo.png" alt="Paramount Logo"
        /></router-link>
      </div>
      <div class="header-nav-holder">
        <router-link
          v-for="route in routes"
          :key="route.name"
          :to="route.to"
          :class="{ active: $route.name === route.name }"
          >{{ route.label }}</router-link
        >
      </div>
      <div class="header-button-holder">
        <router-link to=""><button>Register</button></router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const routes = [
  { name: "home", label: "Home", to: { name: "home" } },
  { name: "about-us", label: "About Us", to: { name: "about-us" } },
  { name: "services", label: "Services", to: { name: "book-now" } },
  { name: "career", label: "Career", to: { name: "career" } },
  { name: "payment", label: "Payment", to: { name: "payment" } },
  { name: "contact-us", label: "Contact Us", to: { name: "contact-us" } },
];
</script>
