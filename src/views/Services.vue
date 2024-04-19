<template>
  <Header />
  <PageBanner
    title="YOUR BEST FREIGHT FORWARDER TO PHILIPPINES"
    :imageUrl="ServicesBanner"
  />
  <router-view />
  <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PageBanner from "@/components/PageBanner.vue";
import ServicesBanner from "@/assets/images/banners/services2-banner.png";

export default {
  components: {
    Header,
    Footer,
    PageBanner,
  },
  data() {
    return {
      ServicesBanner,
    };
  },
};
</script>
