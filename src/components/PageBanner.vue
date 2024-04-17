<template>
  <div
    class="pages-banner-container"
    :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
  >
    <div class="pages-banner-holder">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  imageUrl: String,
});
</script>

<style scoped>
.pages-banner-container {
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.pages-banner-holder {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pages-banner-holder h1 {
  font-size: 12vh;
  color: #fffffe;
  text-transform: uppercase;
  font-weight: 600;
  text-shadow: 3px 4px 8px rgba(0, 0, 0, 0.64);
}
</style>
