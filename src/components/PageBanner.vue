<template>
  <div
    class="pages-banner-container"
    :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
  >
    <div class="pages-banner-holder">
      <h1 data-aos="zoom-in" data-aos-duration="1500">{{ title }}</h1>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  imageUrl: String,
});
</script>

<style>
.pages-banner-container {
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.pages-banner-holder {
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10vh;
  text-align: center;
}
</style>
