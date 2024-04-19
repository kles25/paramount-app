<template>
  <div class="services-navigation-container" :class="{ sticky: isSticky }">
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
</template>
<script setup>
import { RouterLink } from "vue-router";
import { onBeforeUnmount, ref, onMounted } from "vue";

const routes = [
  {
    name: "main-services",
    label: "Main Services",
    to: { name: "main-services" },
  },
  {
    name: "useful-services",
    label: "Useful Services",
    to: { name: "useful-services" },
  },
  {
    name: "pricing-services",
    label: "Pricing Services",
    to: { name: "pricing-services" },
  },
];

const isSticky = ref(false);
let originalOffset;

const handleScroll = () => {
  if (window.scrollY > originalOffset) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

window.addEventListener("scroll", handleScroll);

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

onMounted(() => {
  originalOffset = document.querySelector(".services-navigation-container").offsetTop;
});
</script>
<style scoped>
.services-navigation-container {
  height: 10vh;
  background-color: #212121;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
}
.services-navigation-holder {
  display: flex;
  align-items: center;
  justify-content: start;
  height: 100%;
  padding: 0 5vw;
}

.services-navigation-holder a {
  text-decoration: none;
  font-size: 1.6vh;
  color: #04a533;
  font-weight: 300;
  text-transform: uppercase;
  padding: 2vh 0;
  margin: 0 2vw;
}

.services-navigation-holder a.router-link-active {
  color: #fffffe;
  border-bottom: 0.3vh solid #fffffe;
  text-shadow: -1px 0px 6px rgba(255, 255, 254, 0.8);
}
</style>
