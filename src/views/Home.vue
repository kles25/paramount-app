<template>
  <Header />
  <div class="hero-container">
    <div class="hero-holder">
      <div class="hero-content" data-aos="fade-right" data-aos-duration="1500">
        <h2>BRINGING YOUR CARGO</h2>
        <h1>FAST & SECURE...</h1>
        <p>
          Paramount Logistics is your premier logistics provider for all your transport
        </p>
        <div class="hero-button-holder">
          <router-link to="/about-us"><button>About Us</button></router-link>
          <router-link to="/services/pricing-services-pages/get-quotation"
            ><button>Request Quotation</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div class="section-one-container">
    <div class="section-one-holder">
      <h1 data-aos="fade-down" data-aos-duration="1500">
        Welcome to <span>Paramount Logistics</span>
      </h1>
      <h3 style="margin-bottom: 3vh" data-aos="zoom-in" data-aos-duration="1500">
        YOUR BEST TOTAL LOGISTICS PARTNER
      </h3>
      <p class="sub-title" data-aos="zoom-in" data-aos-duration="1500">
        This is your premier site for all your shipping needs. Paramount Logistics Inc.
        continues to find the best carriers and methods of transportation for your
        cargoes.
      </p>
      <div class="pages-row">
        <div class="pages-col-4" v-for="(service, index) in services" :key="index">
          <router-link :to="service.route">
            <div
              class="services-content-holder"
              :data-aos="'zoom-in'"
              :data-aos-duration="service.animationDuration"
            >
              <img :src="service.icon" alt="" />
              <h4>{{ service.title }}</h4>
              <p>{{ service.description }}</p>
              <button>View Details</button>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="shop-portal-container">
    <div class="shop-portal-holder">
      <h1 data-aos="fade-down" data-aos-duration="1500">YOU SHOP <span>WE SHIP</span></h1>
      <p class="sub-title" data-aos="zoom-in" data-aos-duration="1500">
        Just buy anything you need from abroad, whether LCL or FCL and you will receive
        your package at your doorstep.
      </p>
      <p class="sub-title" data-aos="zoom-in" data-aos-duration="1500">
        In case of LCL, in some countries, such as USA, Canada, United Kingdom, Italy,
        Japan, Korea, China, Taiwan, Hong Kong, Thailand, Indonesia and Australia, we will
        provide our warehouse address abroad and you will just need to ship your package
        to our warehouse. Charge will be on a per cbm basis. In case of pick up service
        from your source, additional charges will apply.
      </p>
      <router-link to="/services/pricing-services-pages/get-quotation"
        ><button data-aos="fade-up" data-aos-duration="1500">
          Free Estimate
        </button></router-link
      >
    </div>
  </div>
  <div class="section-one-container">
    <div class="section-one-holder">
      <h1 data-aos="fade-down" data-aos-duration="1500">SERVICE <span>PROCESS</span></h1>
      <div class="pages-row">
        <div class="pages-col-6">
          <img
            class="col-6-img"
            data-aos="fade-right"
            data-aos-duration="1500"
            src="@/assets/images/service-process.png"
            alt=""
          />
        </div>
        <div class="pages-col-6">
          <ul data-aos="fade-up" data-aos-duration="1500">
            <li>Register or log in at plogistics.net</li>
            <li>Purchase items from anywhere around the world</li>
            <li>Encode the item and shipping details in our quote request form</li>
            <li>Have your items delivered to our warehouse abroad</li>
            <li>
              Fill out Paramount Logistics Inc shipping form link and settle payment
            </li>
            <li>That's all. We'll ship your goods to the Philippines.</li>
            <li>Packages are received and sorted in our warehouse</li>
            <li>Clients give go-signal for shipping.</li>
            <li>
              Items are consolidated and packed in the shipping box for multiple items
              with same consignee.
            </li>
            <li>Paramount sends billing and clients settle payment.</li>
            <li>
              Boxes are dropped-off at our partner couriers and shipped to the Philippines
            </li>
            <li>Boxes are delivered at your destination</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="section-two-container">
    <div class="section-holder">
      <div class="pages-row">
        <div class="pages-col-6">
          <div data-aos="fade-up" data-aos-duration="1500" class="contact-section-holder">
            <img src="@/assets/images/icons/globe.png" alt="" />
            <p class="sub-title">
              For your corporate or personal requirements, whether by sea, air, or land,
              we will provide the most amazing shipping rates and services to you.
            </p>
          </div>
          <div class="contact-section-holder" data-aos="fade-up" data-aos-duration="1500">
            <img src="@/assets/images/icons/call.png" alt="" />
            <h3>24/7 SHIPPING SERVICE.</h3>
            <p>+63 906-584-3215 (GLOBE)</p>
            <p>+63 968-597-3038 (SMART)</p>
          </div>
        </div>
        <div class="pages-col-6">
          <form
            action=""
            class="contact-form-holder"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <input type="text" placeholder="NAME" required />
            <input type="email" placeholder="E-MAIL" required />
            <input type="number" placeholder="PHONE" required />
            <input type="text" placeholder="SUBJECT" required />
            <textarea placeholder="MESSAGE" id="" cols="30" rows="10" required></textarea>
            <div class="contact-form-button-holder">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="section-one-container">
    <div class="section-partners-holder">
      <h1 data-aos="fade-down" data-aos-duration="1500">
        SOME OF OUR <span>CLIENTS</span>
      </h1>
      <div class="pages-row">
        <div class="pages-col-4">
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            src="@/assets/images/partners/1.png"
            alt="Lazada"
          />
        </div>
        <div class="pages-col-4">
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            src="@/assets/images/partners/2.png"
            alt="iBayad"
          />
        </div>
        <div class="pages-col-4">
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            src="@/assets/images/partners/3.png"
            alt="Forex"
          />
        </div>
        <div class="pages-col-6">
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            src="@/assets/images/partners/4.png"
            alt="GDL"
          />
        </div>
        <div class="pages-col-6">
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            src="@/assets/images/partners/5.png"
            alt="McRitz"
          />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import warehouseIcon from "@/assets/images/icons/warehouse.png";
import airseaIcon from "@/assets/images/icons/air-sea.png";
import customclearanceIcon from "@/assets/images/icons/custom-clearance.png";
import forwardingIcon from "@/assets/images/icons/forwarding.png";
import truckingIcon from "@/assets/images/icons/trucking.png";
import consolidationIcon from "@/assets/images/icons/consolidation.png";

export default {
  components: {
    Header,
    Footer,
  },
};

const services = [
  {
    title: "Air & Sea Freight",
    icon: airseaIcon,
    description:
      "Paramount Logistics offers fast, reliable and low cost air & sea freight solutions assuring your delicate cargo are delivered risk-free and on time benefiting your business the best way possible.",
    route: "/services/main-services-pages/freight-forwarding",
    animationDuration: 500,
  },
  {
    title: "Customs Clearance",
    icon: customclearanceIcon,
    description:
      "Whether you choose to use our in-house or outsourced clearing services, we try our best to provide you with the fastest and most reliable service at the most convenient rates.",
    route: "/services/main-services-pages/custom-clearance",
    animationDuration: 800,
  },
  {
    title: "Freight Forwarding",
    icon: forwardingIcon,
    description:
      "As a company specialized in freight forwarding, we always make sure that the coordination and operation in the whole supply chain is taking our full focus and ran up to the highest standards.",
    route: "/services/main-services-pages/freight-forwarding",
    animationDuration: 1100,
  },
  {
    title: "Trucking",
    icon: truckingIcon,
    description:
      "Operating a wide range of different sized fleet of trucks, low bed trailers, heavy loaders and inter modal carriage, we are always a phone call away in order to make sure your cargo is delivered as needed.",
    route: "/services/main-services-pages/trucking",
    animationDuration: 500,
  },
  {
    title: "Warehousing",
    icon: warehouseIcon,
    description:
      "Whatever your market sector, in today’s highly competitive environment, efficient warehousing and distribution management is central to commercial success.",
    route: "/services/main-services-pages/warehousing",
    animationDuration: 800,
  },
  {
    title: "Consolidation",
    icon: consolidationIcon,
    description:
      "We have numerous partners abroad and offices in China to do consolidation for your LCL cargoes, which can provide fast and reliable shipping.",
    route: "/services/main-services-pages/consolidation/#main-service-nav",
    animationDuration: 1100,
  },
];
</script>

<style>
.col-6-img {
  width: 100%;
  height: auto;
}
</style>
