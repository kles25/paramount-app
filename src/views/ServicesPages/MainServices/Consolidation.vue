<template>
  <div class="section-one-container">
    <div class="section-one-holder">
      <img
        data-aos="zoom-out"
        data-aos-duration="1000"
        src="@/assets/images/service-process.png"
        alt=""
      />
      <h1 data-aos="fade-down" data-aos-duration="1000">Consolidation</h1>
      <div class="title-underline" data-aos="zoom-out" data-aos-duration="1000"></div>
      <p data-aos="fade-up" data-aos-duration="1000">
        We have numerous partners abroad and offices in different countries such as USA,
        Canada, United Kingdom, Italy, Japan, Korea, China, Taiwan, Hong Kong, Thailand,
        Indonesia, and Australia who can do consolidation for your cargoes, which can
        provide fast and reliable shipping. We will provide our warehouse address abroad
        and you will just need to ship your package to our warehouse. The charge will be
        on a per cbm basis (if by sea) or per weight (if by air).
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
