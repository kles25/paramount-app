<template>
  <UsefulServicesNavigation />
  <router-view />
</template>
<script setup>
import { RouterView } from "vue-router";
</script>
<script>
import UsefulServicesNavigation from "../../../components/UsefulServicesNavigation.vue";
export default {
  components: {
    UsefulServicesNavigation,
  },
};
</script>
<style lang=""></style>
