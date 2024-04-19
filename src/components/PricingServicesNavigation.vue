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
    name: "cost-by-sea",
    label: "Cost Calculator By Sea",
    to: { name: "cost-by-sea" },
  },
  {
    name: "cost-by-air",
    label: "Cost Calculator By Air",
    to: { name: "cost-by-air" },
  },
  {
    name: "get-quotation",
    label: "Get Quotation",
    to: { name: "get-quotation" },
  },
  {
    name: "standard-rates",
    label: "Standard Rates",
    to: { name: "standard-rates" },
  },
  {
    name: "duties-taxes",
    label: "Duties And Taxes",
    to: { name: "duties-taxes" },
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
  min-height: 10vh;
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
  justify-content: center;
  height: 100%;
  padding: 3vh 5vw;
  flex-wrap: wrap;
  margin: auto;
}

.services-navigation-holder a {
  text-decoration: none;
  font-size: 1.6vh;
  color: #04a533;
  font-weight: 300;
  text-transform: uppercase;
  padding: 2vh 0;
  margin: 0 1vw;
  flex: 0 0 calc(15%);
}

.services-navigation-holder a.router-link-active {
  color: #fffffe;
  text-shadow: -1px 0px 6px rgba(255, 255, 254, 0.8);
}
</style>
