<template>
  <div class="header-container">
    <button class="go-top-button" ref="goTopButton" @click="goToTop">
      <span class="material-symbols-outlined"> arrow_upward </span>
    </button>
  </div>
  <div v-if="loading" class="loading-container">
    <p>PARAMOUNT</p>
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <router-view v-else />
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

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    // Simulate loading delay
    setTimeout(() => {
      this.loading = false;
    }, 3000); // Adjust timeout duration as needed
  },
};
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

.loading-container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.loading-container p {
  color: #04a533;
  font-size: 2vh;
  font-weight: 400;
}

.lds-ellipsis,
.lds-ellipsis div {
  box-sizing: border-box;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33.33333px;
  width: 13.33333px;
  height: 13.33333px;
  border-radius: 50%;
  background: #04a533;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
