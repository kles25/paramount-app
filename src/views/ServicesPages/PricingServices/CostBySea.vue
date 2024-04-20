<template>
  <div class="services-section-container">
    <form
      ref="form"
      @submit.prevent="submitForm"
      class="services-form-holder"
      data-aos="zoom-out"
      data-aos-duration="1500"
    >
      <div class="forms-title">
        <span class="ft-margin"></span>
        <h5>Cost Calculator by Sea</h5>
      </div>
      <h1 data-aos="fade-down" data-aos-duration="1500">
        RATES ARE ONLY ESTIMATE AND WILL BE SUBJECT TO VALUATION AND OTHER CHARGES
      </h1>
      <p data-aos="fade-up" data-aos-duration="1500">
        (Note: This computation is applicable only for general cargoes (LCL & personal
        effects/e-commerce by air within Metro Manila delivery.)
      </p>
      <div class="form-select-holder" data-aos="fade-up" data-aos-duration="1500">
        <label for="">Select</label>
        <select>
          <option value="" selected disabled>By Air (LCL & personal effects)</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </select>
        <label for="">Documents</label>
        <select>
          <option value="" selected disabled>COURIER N-POUCH REGULAR</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </select>
      </div>
      <div class="form-input-holder" data-aos="fade-up" data-aos-duration="1500">
        <input type="text" placeholder="Origin City" />
        <input type="text" placeholder="Destination City" />
        <input type="text" placeholder="CBM" />
        <input type="number" placeholder="All In Rate" />
        <input type="number" placeholder="Estimated Price" />
      </div>
      <div class="form-button-holder">
        <button type="submit" data-aos="zoom-in" data-aos-duration="1500">
          GET QUOTE
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const form = ref(null);

    const submitForm = () => {
      if (!validateForm()) {
        showToast("Please fill out all fields", "error");
        return;
      }

      // Proceed with form submission
      showToast("Form submitted successfully", "success");
      resetForm();
    };

    const validateForm = () => {
      const inputs = form.value.querySelectorAll("input, select");
      for (const input of inputs) {
        if (!input.value) {
          return false; // Return false if any field is empty
        }
      }
      return true; // Return true if all fields are filled out
    };

    const showToast = (message, type) => {
      const toast = useToast();
      toast[type](message);
    };

    const resetForm = () => {
      form.value.reset();
    };

    return { form, submitForm };
  },
};
</script>
