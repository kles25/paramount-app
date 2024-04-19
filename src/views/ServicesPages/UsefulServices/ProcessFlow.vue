<template>
  <div class="section-one-container">
    <div class="section-one-holder">
      <h1 data-aos="fade-down" data-aos-duration="1000">PROCESS FLOW</h1>
      <div class="title-underline" data-aos="zoom-out" data-aos-duration="1000"></div>
      <p data-aos="fade-up" data-aos-duration="1000">
        Our streamlined processes and optimized logistics solutions enable us to deliver
        your cargo with exceptional speed. From the moment your cargo is entrusted to us,
        we work tirelessly to expedite its journey, minimizing transit times and ensuring
        on-time delivery. Experience the advantage of our fast shipping services, helping
        you stay ahead in today's competitive market.
      </p>
      <img
        data-aos="zoom-in"
        data-aos-duration="1000"
        src="@/assets/images/how-to-order.png"
        alt=""
        style="height: auto; width: 50vw"
      />
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
