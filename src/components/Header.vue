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
          v-for="route in mroutes"
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
        <div class="main-routes" style="margin-top: 10vh">
          <h5>MAIN</h5>
          <router-link
            v-for="route in mroutes"
            :key="route.name"
            :to="route.to"
            :class="{ active: $route.name === route.name }"
            >{{ route.label }}</router-link
          >
          <router-link to="/sign-up">Register</router-link>
        </div>
        <div class="services-routes">
          <h5>MAIN SERVICES</h5>
          <router-link
            v-for="route in msroutes"
            :key="route.name"
            :to="route.to"
            :class="{ active: $route.name === route.name }"
            >{{ route.label }}</router-link
          >
          <h5>USEFUL SERVICES</h5>
          <router-link
            v-for="route in usroutes"
            :key="route.name"
            :to="route.to"
            :class="{ active: $route.name === route.name }"
            >{{ route.label }}</router-link
          >
          <h5>USEFUL SERVICES</h5>
          <router-link
            v-for="route in psroutes"
            :key="route.name"
            :to="route.to"
            :class="{ active: $route.name === route.name }"
            >{{ route.label }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const mroutes = [
  { name: "home", label: "Home", to: { name: "home" } },
  { name: "about-us", label: "About Us", to: { name: "about-us" } },
  { name: "services", label: "Services", to: { name: "main-services" } },
  { name: "career", label: "Career", to: { name: "career" } },
  { name: "payment", label: "Payment", to: { name: "payment" } },
  { name: "contact-us", label: "Contact Us", to: { name: "contact-us" } },
];

const msroutes = [
  {
    name: "custom-clearance",
    label: "Custom Clearance",
    to: { name: "custom-clearance" },
  },
  {
    name: "consolidation",
    label: "Consolidation",
    to: { name: "consolidation" },
  },
  {
    name: "shipping-services",
    label: "Shipping Services",
    to: { name: "shipping-services" },
  },
  {
    name: "trucking",
    label: "Trucking",
    to: { name: "trucking" },
  },
  {
    name: "warehousing",
    label: "Warehousing",
    to: { name: "warehousing" },
  },
  {
    name: "freight-forwarding",
    label: "Freight Forwarding",
    to: { name: "freight-forwarding" },
  },
  {
    name: "ship-agency",
    label: "Ship And Port Agency",
    to: { name: "ship-agency" },
  },
  {
    name: "allied-services",
    label: "Allied Services",
    to: { name: "allied-services" },
  },
];

const usroutes = [
  {
    name: "book-now",
    label: "Book Now",
    to: { name: "book-now" },
  },
  {
    name: "process-flow",
    label: "Process Flow",
    to: { name: "process-flow" },
  },
  {
    name: "track-shipment",
    label: "Track Shipment",
    to: { name: "track-shipment" },
  },
  {
    name: "gallery",
    label: "Gallery",
    to: { name: "gallery" },
  },
  {
    name: "faqs",
    label: "FAQS",
    to: { name: "faqs" },
  },
];

const psroutes = [
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

const click = ref(false);

const handleClick = () => {
  click.value = !click.value;
};
</script>

<style>
.main-routes h5 {
  font-size: 2vh;
  color: #fffffe;
  margin-bottom: 3vh;
  letter-spacing: 0.3vh;
  display: none;
}

.menu-holder.active .main-routes h5 {
  display: block;
}

.services-routes h5 {
  font-size: 2vh;
  color: #fffffe;
  margin-bottom: 3vh;
  letter-spacing: 0.3vh;
  margin-top: 2vh;
  display: none;
}

.menu-holder.active .services-routes h5 {
  display: block;
}

.menu-holder {
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  width: 0;
  display: none;
  background-color: rgb(33, 33, 33);
  transition: 0.5s;
  z-index: 10;
  overflow-y: scroll;
}

.menu-holder.active {
  width: 350px;
  padding: 0 2vw;
}

.menu-holder.active a {
  display: block;
}

.menu-holder a {
  text-decoration: none;
  color: #04a533;
  margin-bottom: 2vh;
  cursor: pointer;
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 1.7vh;
  padding: 0.5vh 1vh;
  display: none;
}

.menu-holder a:hover {
  color: #fffffe;
  text-shadow: -1px 0px 6px rgba(255, 255, 254, 0.8);
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
  z-index: 20;
  cursor: pointer;
  margin-right: 2vh;
  padding: 1vh;
  text-align: right;
  display: none;
  position: fixed;
  right: 0;
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
  text-shadow: -1px 0px 6px rgba(255, 255, 254, 0.8);
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
    display: block;
  }
}

@media (max-width: 690px) {
  .menu-holder.active {
    width: 200px;
  }
}
</style>
