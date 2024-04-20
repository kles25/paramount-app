<template>
  <div class="services-section-container">
    <div class="book-service-holder">
      <h1 data-aos="fade-down" data-aos-duration="1500">BOOK SERVICE NOW</h1>
      <div class="title-underline" data-aos="zoom-out" data-aos-duration="1000"></div>
      <div class="pages-row">
        <div class="pages-col-6">
          <form
            @submit.prevent="submitForm"
            class="form-book-holder"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <input type="text" placeholder="NAME" v-model="formData.name" />
            <input type="email" placeholder="EMAIL" v-model="formData.email" />
            <input
              type="text"
              placeholder="PHONE"
              v-model="formData.phone"
              @input="formatPhoneNumber"
            />
            <div class="book-button-holder">
              <button type="submit">BOOK</button>
            </div>
          </form>
        </div>
        <div class="pages-col-6">
          <div class="contact-book-holder" data-aos="fade-up" data-aos-duration="1500">
            <BsGlobe2 />
            <p>
              For your corporate or personal requirements, whether by sea, air, or land,
              we will provide the most amazing shipping rates and services to you.
            </p>
          </div>
          <div class="contact-book-holder" data-aos="fade-up" data-aos-duration="1500">
            <BxPhoneCall />
            <h3>24/7 SHIPPING SERVICE.</h3>
            <p>+63 906-584-3215 (GLOBE)</p>
            <p>+63 968-597-3038 (SMART)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BsGlobe2, BxPhoneCall } from "@kalimahapps/vue-icons";
</script>
<script>
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (!this.validateForm()) {
        return;
      }

      // Form submission logic goes here

      this.showToast("Form submitted successfully", "success");
      this.resetForm();
    },
    validateForm() {
      const { name, email, phone } = this.formData;

      if (!name || name.length < 6) {
        this.showToast("Name must be at least 6 characters long", "error");
        return false;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        this.showToast("Please enter a valid email address", "error");
        return false;
      }

      if (!/^09\d{9}$/.test(phone)) {
        this.showToast("Phone number must start with 09 and be 11 digits long", "error");
        return false;
      }

      return true;
    },
    formatPhoneNumber(event) {
      // Prevent leading zeros from being removed
      if (event.target.value.startsWith("0")) {
        event.target.value = "0" + event.target.value.slice(1).replace(/\D/g, "");
      } else {
        event.target.value = event.target.value.replace(/\D/g, "");
      }
    },
    showToast(message, type) {
      const toast = useToast();
      toast[type](message);
    },
    resetForm() {
      this.formData = {
        name: "",
        email: "",
        phone: "",
      };
    },
  },
};
</script>
<style>
.contact-book-holder svg {
  font-size: 5vh;
  color: #04a533;
  margin-bottom: 3vh;
  margin-top: 3vh;
}

@media (max-width: 992px) {
  .book-service-holder .pages-col-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .book-service-holder h1 {
    font-size: 5vh;
  }

  .book-button-holder button {
    width: 100%;
    height: 5vh;
    padding: 1vh 1.5vw;
    margin-top: 3vh;
  }
}
</style>
