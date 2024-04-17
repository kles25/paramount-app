<template>
  <div class="pages-banner-container">
    <div class="pages-banner-holder">
      <h1>Services</h1>
    </div>
  </div>
  <div class="services-navigation-container">
    <div class="services-navigation-holder">
      <router-link
        v-for="route in routes"
        :key="route.name"
        :to="route.to"
        :class="{ active: $route.name === route.name }"
        >{{ route.label }}</router-link
      >
    </div>
  </div>
  <router-view />
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";

const routes = [
  { name: "book-now", label: "Book Now", to: { name: "book-now" } },
  { name: "cost-by-air", label: "Cost Calculator by Air", to: { name: "cost-by-air" } },
  { name: "cost-by-sea", label: "Cost Calculator by Sea", to: { name: "cost-by-sea" } },
  { name: "duties-taxes", label: "Duties And Taxes", to: { name: "duties-taxes" } },
  { name: "get-quotation", label: "Get a Quotation", to: { name: "get-quotation" } },
  {
    name: "asked-questions",
    label: "Frequently Asked Question",
    to: { name: "asked-questions" },
  },
  {
    name: "standard-rates",
    label: "Standard Rates",
    to: { name: "standard-rates" },
  },
];
</script>
<style scoped>
.pages-banner-container {
  background-image: url(../assets/images/banners/services2-banner.png);
}
.services-navigation-container {
  height: 10vh;
  background-color: #212121;
}
.services-navigation-holder {
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  height: 100%;
  padding: 0 5vw;
}

.services-navigation-holder a {
  text-decoration: none;
  font-size: 1.8vh;
  color: #04a533;
  font-weight: 300;
  text-transform: uppercase;
}

.services-navigation-holder a.router-link-active {
  color: #fffffe;
  border-bottom: 0.1vh solid #fffffe;
  line-height: 5vh;
  text-shadow: -1px 0px 6px rgba(255, 255, 255, 0.81);
}
</style>
