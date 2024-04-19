<template>
  <div class="header-container">
    <button class="go-top-button" ref="goTopButton" @click="goToTop">
      <span class="material-symbols-outlined"> arrow_upward </span>
    </button>
  </div>
  <router-view />
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
  if (window.scrollY > window.innerHeight * 0.4) {
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

<style>
/* Additional styles for the "go-top-button" */
.go-top-button {
  display: none; /* Hide the button by default */
  position: fixed;
  bottom: 30px;
  left: 30px;
  background-color: #04a533;
  color: #fffffe;
  border: 0.1vh solid #fffffe;
  padding: 1vh 0.7vw;
  cursor: pointer;
  border-radius: 50%;
  z-index: 999;
  text-transform: uppercase;
  font-size: 1.5vh;
  transition: 0.5s;
  text-shadow: -1px 0px 6px rgba(255, 255, 254, 0.8);
}

.go-top-button:hover {
  background-color: #212121;
  color: #04a533;
  border: 0.1vh solid rgb(4, 165, 51);
  text-shadow: -1px 0px 6px rgba(5, 165, 51, 0.8);
}
</style>
