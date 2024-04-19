<template>
  <ServicesNavigation />
  <div class="section-one-container">
    <div class="section-one-holder">
      <h1 data-aos="fade-down" data-aos-duration="1500">SERVICES</h1>
      <div data-aos="zoom-out" data-aos-duration="1000" class="title-underline"></div>
      <div class="pages-row">
        <div class="pages-col-3" v-for="(service, index) in services" :key="index">
          <router-link :to="service.route">
            <div
              class="preview-services-container"
              data-aos="fade-down"
              :data-aos-duration="service.transitionDuration"
              :style="{ backgroundImage: 'url(' + service.imageUrl + ')' }"
            >
              <div class="preview-services-holder">
                <h4>{{ service.title }}</h4>
                <button>View Details</button>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="section-two-container">
    <div class="section-two-holder">
      <h1 data-aos="fade-down" data-aos-duration="1500">WE COVER ALL YOUR NEEDS</h1>
      <div class="title-underline" data-aos="zoom-out" data-aos-duration="1000"></div>
      <p data-aos="zoom-out" data-aos-duration="1500" class="sub-title">
        As a company specialized in freight forwarding, we always make sure that the
        coordination and operation in the whole supply chain is taking our full focus and
        ran up to the highest standards assuring on time pick-up and delivery as well as a
        worry and risk free shipping solution.
      </p>
    </div>
  </div>
  <div class="section-one-container">
    <div class="section-one-holder">
      <div class="pages-row">
        <div class="pages-col-6">
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            class="col-6-img"
            src="../../../assets/images/service-process.png"
            alt=""
          />
        </div>
        <div class="pages-col-6">
          <ul data-aos="fade-down" data-aos-duration="1500">
            <li>E-commerce</li>
            <li>Repacking/Labelling</li>
            <li>Custom Clearance</li>
            <li>Fulfillment Center for Online Purchases</li>
            <li>Sourcing/Buying</li>
            <li>Short Term Storage</li>
            <li>Assistance for Permits</li>
            <li>Ocean Freight To The Philippines</li>
            <li>Air Freight To The Philippines</li>
            <li>Shipping timeframe</li>
          </ul>
        </div>
      </div>
      <router-link to="/services/useful-services-pages/book-now">
        <button data-aos="zoom-in" data-aos-duration="1500">Book Now</button></router-link
      >
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import servicesImage from "@/assets/images/shop-bg.jpg";
const services = [
  {
    title: "Custom Clearance",
    imageUrl: servicesImage,
    route: "/services/main-services-pages/custom-clearance",
    transitionDuration: "500",
  },
  {
    title: "Consolidation",
    imageUrl: servicesImage,
    route: "/services/main-services-pages/consolidation",
    transitionDuration: "800",
  },
  {
    title: "Shipping Services",
    imageUrl: servicesImage,
    route: "/services/main-services-pages/shipping-services",
    transitionDuration: "1100",
  },
  {
    title: "Trucking",
    imageUrl: servicesImage,
    route: "/services/main-services-pages/trucking",
    transitionDuration: "1400",
  },
  {
    title: "Warehousing",
    imageUrl: servicesImage,
    route: "/services/main-services-pages/warehousing",
    transitionDuration: "500",
  },
  {
    title: "Freight Forwarding",
    imageUrl: servicesImage,
    route: "/services/main-services-pages/freight-forwarding",
    transitionDuration: "800",
  },
  {
    title: "Ship and Port Agency",
    imageUrl: servicesImage,
    route: "/services/main-services-pages/ship-agency",
    transitionDuration: "1100",
  },
  {
    title: "Allied Services",
    imageUrl: servicesImage,
    route: "/services/main-services-pages/allied-services",
    transitionDuration: "1400",
  },
];
</script>

<script>
import ServicesNavigation from "@/components/ServicesNavigation.vue";
export default {
  components: {
    ServicesNavigation,
  },
};
</script>
<style>
.preview-services-container {
  height: 35vh;
  box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.48);
  -webkit-box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.48);
  margin: 2vh;

  transition-property: all !important;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.preview-services-container:hover {
  margin: 0;
  height: 37vh;
}

.preview-services-holder {
  background-color: rgba(33, 33, 33, 0.8);
  height: 100%;
  width: 100%;
  padding: 2vh 2.5vw;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
}

.preview-services-holder h4 {
  color: #fffffe;
  font-size: 2vh;
  font-weight: 600;
  margin-bottom: 2vh;
  text-transform: uppercase;
}

.preview-services-container:hover .preview-services-holder button {
  font-size: 2vh;
  border: 0.1vh solid #fffffe;
  padding: 1.5vh 2.5vw;
}

.preview-services-holder button {
  border: none;
  font-size: 0;
  padding: 0 2.5vw;
  transition: 0.5s;
  color: #fffffe;
  background-color: transparent;
}

.preview-services-holder button:hover {
  border: 0.1vh solid #04a533 !important;
  font-size: 0;
  padding: 0 2.5vw;
  transition: 0.5s;
  color: #04a533;
  background-color: transparent;
}
</style>
