<template>
  <Header />
  <PageBanner title="Career" :imageUrl="CareerBaneer" />
  <div class="services-section-container">
    <div class="services-section-holder">
      <h1 data-aos="fade-down" data-aos-duration="1500">
        WE BELIEVE YOU COULD BE THE PERSON WE'VE BEEN SEARCHING FOR!
      </h1>
      <div class="title-underline" data-aos="zoom-out" data-aos-duration="1000"></div>
      <p data-aos="fade-up" data-aos-duration="1500">
        Are you passionate about logistics and ready to take your career to new heights?
        Look no further! We're seeking talented individuals to join our dynamic team and
        contribute to our success in the logistics industry.
      </p>
      <img
        data-aos="zoom-out"
        data-aos-duration="1500"
        style="height: 100vh; padding: 5vh 0"
        src="@/assets/images/we-are-hiring.png"
        alt="We Are Hiring"
      />
      <h4
        data-aos="fade-up"
        data-aos-duration="1500"
        style="font-size: 3vh; color: #04a533; font-weight: 600"
      >
        How to Apply:
      </h4>
      <p
        data-aos="fade-up"
        data-aos-duration="1500"
        style="text-align: center; font-size: 1.6vh; font-weight: 600"
      >
        Interested candidates are invited to submit their resume and cover letter to
      </p>
      <a
        data-aos="fade-up"
        data-aos-duration="1500"
        style="text-decoration: none; color: #212121; font-size: 2vh; font-weight: 600"
        href="mailto:info@plogisitcsinc.net."
        >info@plogisitcsinc.net.</a
      >
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PageBanner from "@/components/PageBanner.vue";
import CareerBaneer from "@/assets/images/banners/career-banner.png";

export default {
  components: {
    Header,
    Footer,
    PageBanner,
  },
  data() {
    return {
      CareerBaneer,
    };
  },
};
</script>
<style scoped></style>
