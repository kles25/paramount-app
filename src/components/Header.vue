<template>
  <div class="header-container">
    <div class="header-holder">
      <div class="header-logo-holder">
        <router-link to="/"
          ><img src="../assets/images/paramount-logo.png" alt="Paramount Logo"
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
        <router-link to="/sign-up"><button>Register</button></router-link>
      </div>
      <div class="hb-icon-holder" @click="handleClick" :class="{ active: click }">
        <div class="hb-icon-one"></div>
        <div class="hb-icon-two"></div>
        <div class="hb-icon-three"></div>
      </div>
      <div class="menu-holder" :class="{ active: click }">
        <router-link
          v-for="route in routes"
          :key="route.name"
          :to="route.to"
          :class="{ active: $route.name === route.name }"
          >{{ route.label }}</router-link
        >
        <router-link to="/sign-up">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const routes = [
  { name: "home", label: "Home", to: { name: "home" } },
  { name: "about-us", label: "About Us", to: { name: "about-us" } },
  { name: "services", label: "Services", to: { name: "book-now" } },
  { name: "career", label: "Career", to: { name: "career" } },
  { name: "payment", label: "Payment", to: { name: "payment" } },
  { name: "contact-us", label: "Contact Us", to: { name: "contact-us" } },
];

const click = ref(false);

const handleClick = () => {
  click.value = !click.value;
};
</script>

<style>
.menu-holder {
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  width: 0;
  display: none;
  align-items: end;
  justify-content: center;
  background-color: rgba(33, 33, 33, 0.8);
  transition: 0.5s;
  flex-direction: column;
}

.menu-holder.active {
  width: 200px;
  padding: 0 2vw;
}

.menu-holder.active a {
  display: block;
}

.menu-holder a {
  text-decoration: none;
  color: #04a533;
  margin-bottom: 5vh;
  cursor: pointer;
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 1.7vh;
  padding: 0.5vh 1vh;
  display: none;
}

.menu-holder a:hover {
  color: #fffffe;
}

.hb-icon-one,
.hb-icon-two,
.hb-icon-three {
  width: 30px;
  height: 2px;
  background-color: #04a533;
  margin: 5px 0;
  transition: 0.4s;
}

.hb-icon-holder {
  z-index: 10;
  cursor: pointer;
  margin-left: 2vh;
  padding: 1vh;
  text-align: right;
  display: none;
}

.hb-icon-holder.active .hb-icon-one {
  background-color: #04a533;
}

.hb-icon-holder.active .hb-icon-two {
  width: 20px;
  background-color: #04a533;
}

.hb-icon-holder.active .hb-icon-three {
  width: 10px;
  background-color: #04a533;
}

.menu-holder a.router-link-active {
  color: #fffffe;
}

@media (max-width: 992px) {
  .header-nav-holder {
    display: none;
  }

  .header-button-holder {
    display: none;
  }

  .header-holder {
    padding: 0 2vw;
  }

  .hb-icon-holder {
    display: block;
  }

  .menu-holder {
    display: flex;
  }
}
</style>
