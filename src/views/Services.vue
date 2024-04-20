<template>
  <Header />
  <PageBanner
    title="YOUR BEST FREIGHT FORWARDER TO PHILIPPINES"
    :imageUrl="ServicesBanner"
  />
  <router-view />
  <FooterSecond />
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
<script>
import Header from "@/components/Header.vue";
import FooterSecond from "@/components/FooterSecond.vue";
import PageBanner from "@/components/PageBanner.vue";
import ServicesBanner from "@/assets/images/banners/services2-banner.png";

export default {
  components: {
    Header,
    FooterSecond,
    PageBanner,
  },
  data() {
    return {
      ServicesBanner,
    };
  },
};
</script>
