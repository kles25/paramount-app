<template>
  <div class="footer-second-container">
    <div class="footer-second-holder">
      <div class="pages-row">
        <div class="pages-col-6">
          <div class="contact-info">
            <h2>MOVE YOUR CARGOS NOW</h2>
            <p>
              Blk5 Lot3 Daisy st. Lancaster Residences Phase 2, Alapan 2A, Imus Cavite
              4103
            </p>
            <p>+63 2 82919200</p>
            <p>+63 9065843215</p>
            <p>+63 9685973038</p>
            <a href="mailto:info@plogisitcsinc.net">info@plogisitcsinc.net</a>
          </div>
        </div>
        <div class="pages-col-6">
          <form @submit.prevent="submitForm" class="contact-form">
            <h2>REQUEST A CALLBACK</h2>
            <input type="text" placeholder="NAME" v-model="formData.name" />
            <input type="text" placeholder="E-MAIL" v-model="formData.email" />
            <input
              type="text"
              placeholder="PHONE"
              v-model="formData.phone"
              @input="formatPhoneNumber"
            />
            <div class="contact-form-button">
              <button type="submit">REQUEST A CALL</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

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
.footer-second-container {
  min-height: 40vh;
  background-color: #212121;
}

.footer-second-holder {
  padding: 3vh 5vw;
}

.contact-info {
  padding: 2vh 3vw;
}

.contact-info h2 {
  color: #fffffe;
  font-size: 4vh;
  margin-bottom: 5vh;
}

.contact-info p {
  color: #fffffe;
  font-size: 1.8vh;
  font-weight: 300;
  margin-bottom: 1vh;
}

.contact-info a {
  color: #fffffe;
  font-size: 1.8vh;
  font-weight: 300;
}

.contact-form {
  padding: 2vh 3vw;
}

.contact-form h2 {
  color: #fffffe;
  font-size: 4vh;
  margin-bottom: 5vh;
}

.contact-form input {
  width: 100%;
  height: 5vh;
  border: none;
  border-bottom: 0.1vh solid #fffffe;
  margin-bottom: 2vh;
  background-color: transparent;
  padding: 1vh 1vw;
  color: #fffffe;
  font-size: 1.8vh;
  font-weight: 300;
}

.contact-form input::placeholder {
  color: #fffffe;
}

.contact-form-button {
  text-align: right;
  margin-top: 2vh;
}
.contact-form button {
  background-color: transparent;
  color: #fffffe;
  border: 0.1vh solid #fffffe;
  font-size: 1.8vh;
  font-weight: 300;
  padding: 2vh 2.5vw;
  cursor: pointer;
  transition: 0.5s;
}

.contact-form button:hover {
  background-color: #fffffe;
  color: #212121;
  border: 0.1vh solid #212121;
}

@media (max-width: 992px) {
  .footer-second-holder .pages-col-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
