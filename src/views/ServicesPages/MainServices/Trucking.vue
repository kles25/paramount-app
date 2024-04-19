<template>
  <div class="section-one-container">
    <div class="section-one-holder">
      <img
        data-aos="zoom-out"
        data-aos-duration="1000"
        src="@/assets/images/service-process.png"
        alt=""
      />
      <h1 data-aos="fade-down" data-aos-duration="1000">Trucking</h1>
      <div class="title-underline" data-aos="zoom-out" data-aos-duration="1000"></div>
      <p data-aos="fade-up" data-aos-duration="1000">
        Operating a wide range of different sized fleet of trucks, low bed trailers, heavy
        loaders and inter modal carriage, we are always a phone call away in order to make
        sure your cargo is delivered as needed.
      </p>
    </div>
  </div>
  <BookService />
</template>
<script>
import BookService from "@/components/BookService.vue";
export default {
  components: {
    BookService,
  },
};
</script>
<style lang=""></style>
