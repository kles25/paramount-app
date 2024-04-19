<template>
  <Header />
  <div class="pages-banner-container">
    <div class="pages-banner-holder">
      <h1>Contact Us</h1>
    </div>
  </div>

  <div class="section-two-container">
    <div class="section-holder">
      <div class="pages-row">
        <div class="pages-col-6">
          <div class="contact-section-holder">
            <img src="@/assets/images/icons/globe.png" alt="" />
            <p>
              For your corporate or personal requirements, whether by sea, air, or land,
              we will provide the most amazing shipping rates and services to you.
            </p>
          </div>
          <div class="contact-section-holder">
            <img src="@/assets/images/icons/call.png" alt="" />
            <h3>24/7 SHIPPING SERVICE.</h3>
            <p>+63 906-584-3215 (GLOBE)</p>
            <p>+63 968-597-3038 (SMART)</p>
          </div>
        </div>
        <div class="pages-col-6">
          <form action="" class="contact-form-holder">
            <input type="text" placeholder="NAME" required />
            <input type="email" placeholder="E-MAIL" required />
            <input type="number" placeholder="PHONE" required />
            <input type="text" placeholder="SUBJECT" required />
            <textarea placeholder="MESSAGE" id="" cols="30" rows="10" required></textarea>
            <div class="contact-form-button-holder">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="services-section-container">
    <div class="services-section-holder">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15446.19850160197!2d120.9735384606947!3d14.567728492577878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2efc6ebbd7%3A0xc35b7ba9f8ff352e!2sPearl%20of%20the%20Orient%20Tower%2C%20Padre%20Faura%20St%2C%20Ermita%2C%20Manila%2C%201000%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1713380369619!5m2!1sen!2sph"
        style="border: 0; width: 100%; height: 80vh"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped>
.pages-banner-container {
  background-image: url(@/assets/images/banners/contact-us-banner.jpg);
}
</style>
