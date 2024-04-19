<template>
  <ServicesNavigation />
  <div class="section-one-container">
    <div class="section-one-holder">
      <h1 data-aos="fade-down" data-aos-duration="1500">OTHER SERVICES</h1>
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
</template>
<script setup>
import { RouterLink } from "vue-router";
import servicesImage from "@/assets/images/shop-bg.jpg";
const services = [
  {
    title: "Book Now",
    imageUrl: servicesImage,
    route: "/services/useful-services-pages/book-now",
    transitionDuration: "500",
  },
  {
    title: "Process Flow",
    imageUrl: servicesImage,
    route: "/services/useful-services-pages/process-flow",
    transitionDuration: "800",
  },
  {
    title: "Track Shipment",
    imageUrl: servicesImage,
    route: "/services/useful-services-pages/track-shipment",
    transitionDuration: "1100",
  },
  {
    title: "Gallery",
    imageUrl: servicesImage,
    route: "/services/useful-services-pages/gallery",
    transitionDuration: "1400",
  },
  {
    title: "FAQ'S",
    imageUrl: servicesImage,
    route: "/services/useful-services-pages/faqs",
    transitionDuration: "500",
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
