<template>
  <MainServicesNavigation />
  <router-view />
</template>
<script setup>
import { RouterView } from "vue-router";
</script>
<script>
import MainServicesNavigation from "@/components/MainServicesNavigation.vue";
export default {
  components: {
    MainServicesNavigation,
  },
};
</script>
<style lang=""></style>
