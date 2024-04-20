<template>
  <div v-if="loading" class="loader">
    <!-- Your loader content here -->
    Loading...
  </div>
  <router-view v-else></router-view>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    // Simulate loading delay
    setTimeout(() => {
      this.loading = false;
    }, 3000); // Adjust timeout duration as needed
  },
};
</script>

<style>
.loader {
  /* Loader styles */
}
</style>
