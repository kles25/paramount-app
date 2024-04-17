<template>
  <div class="header-container">
    <button class="go-top-button" ref="goTopButton" @click="goToTop">Back to top</button>
  </div>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterView } from "vue-router";

const goTopButton = ref(null);

// Export the goToTop function
const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Show the button after scrolling 100vh
const handleScroll = () => {
  if (window.scrollY > window.innerHeight) {
    goTopButton.value.style.display = "block";
  } else {
    goTopButton.value.style.display = "none";
  }
};

// Add event listener for scrolling
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Additional styles for the "go-top-button" */
.go-top-button {
  display: none; /* Hide the button by default */
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #04a533;
  color: white;
  border: none;
  padding: 1vh 1.5vw;
  cursor: pointer;
  z-index: 999;
  text-transform: uppercase;
  font-size: 1.6vh;
}

.go-top-button:hover {
  background-color: #04a533;
}
</style>
