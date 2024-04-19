<template>
  <Header />
  <PageBanner title="PAYMENT" :imageUrl="PaymnentBanner" />

  <div class="services-section-container">
    <div class="services-section-holder">
      <div class="pages-row pymnt">
        <div class="pages-col-7">
          <form
            data-aos="zoom-out"
            data-aos-duration="1500"
            action=""
            class="payment-section-holder"
          >
            <div class="form-input-holder">
              <input type="text" placeholder="Item Name" />
            </div>
            <div class="form-input-holder">
              <input type="email" placeholder="Email" />
            </div>
            <div class="form-input-holder">
              <input type="number" placeholder="Phone" />
            </div>
            <div class="form-select-holder">
              <select>
                <option value="" selected disabled>Select Service</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
              </select>
            </div>
            <div class="form-input-holder">
              <input type="number" placeholder="Amount" />
            </div>
            <button type="submit" class="paypal-button">PayPal Checkout</button>
            <button type="submit" class="docc-button">Debit or Credit Card</button>
          </form>
        </div>
        <div class="pages-col-5">
          <div class="payment-notice-holder" data-aos="fade-up" data-aos-duration="1500">
            <h3>BEFORE MAKING PAYMENT</h3>
            <p>
              By making payments on our website, we assume you’ve read and understood and
              agreed to our Terms of operations and also privacy policy. You can read our
              terms and conditions by clicking the button below.
            </p>
            <router-link to="/terms-conditions" target="_blank"
              >Terms & Conditions</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PageBanner from "@/components/PageBanner.vue";
import PaymnentBanner from "@/assets/images/banners/payment-banner.jpg";

export default {
  components: {
    Header,
    Footer,
    PageBanner,
  },
  data() {
    return {
      PaymnentBanner,
    };
  },
};

import { RouterLink } from "vue-router";
</script>

<style scoped>
.payment-notice-holder {
  margin-left: 2vw;
  background-color: #d1f0da;
  padding: 15vh 3vw;
  width: 100%;
}

.payment-notice-holder h3 {
  font-size: 4vh;
  color: #04a533;
  font-weight: 600;
  margin-bottom: 5vh;
}

.payment-notice-holder p {
  font-size: 2vh;
  font-weight: 600;
  color: #212121;
}

.payment-section-holder button {
  width: 100%;
  height: 5vh;
  margin-bottom: 2vh;
  font-size: 1.8vh;
  cursor: pointer;
}

.paypal-button {
  background-color: #d1f0da;
  color: #04a533;
  border: 0.1vh solid #04a533;
  transition: 0.5s;
}

.paypal-button:hover {
  background-color: #04a533;
  color: #212121;
  border: 0.1vh solid #212121;
}

.docc-button {
  background-color: #212121;
  color: #04a533;
  border: 0.1vh solid #04a533;
  transition: 0.5s;
}

.docc-button:hover {
  background-color: #04a533;
  color: #d1f0da;
  border: 0.1vh solid #d1f0da;
}

@media (max-width: 992px) {
  .services-section-holder .pages-col-5 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .services-section-holder .pages-col-7 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .services-section-holder .pages-row.pymnt {
    flex-direction: column-reverse;
  }

  .payment-notice-holder {
    margin-left: 0;
    margin-bottom: 5vh;
  }
}
</style>
