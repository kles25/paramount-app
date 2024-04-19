<template>
  <PricingServicesNavigation />
  <router-view />
</template>
<script setup>
import { RouterView } from "vue-router";
</script>
<script>
import PricingServicesNavigation from "@/components/PricingServicesNavigation.vue";
export default {
  components: {
    PricingServicesNavigation,
  },
};
</script>
<style lang=""></style>
