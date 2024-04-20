<template>
  <div class="services-section-container">
    <form ref="form" @submit.prevent="submitForm" action="" class="services-form-holder">
      <div class="forms-title" data-aos="zoom-out" data-aos-duration="1500">
        <span class="ft-margin"></span>
        <h5>Get a Quotation</h5>
      </div>
      <div class="form-input-holder-two" data-aos="fade-up" data-aos-duration="1500">
        <input type="text" placeholder="NAME" />
        <input type="email" placeholder="Email Address" />
      </div>
      <div class="form-input-holder-two" data-aos="fade-up" data-aos-duration="1500">
        <select>
          <option value="" selected disabled>How would you like to ship?</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </select>
        <select>
          <option value="" selected disabled>Movement Type</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </select>
      </div>
      <div class="form-select-holder" data-aos="fade-up" data-aos-duration="1500">
        <select>
          <option value="" selected disabled>DDP - Delivered Duty Paid</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </select>
      </div>
      <div class="form-input-holder-two" data-aos="fade-up" data-aos-duration="1500">
        <input type="text" placeholder="Where are you Shipping from?" />
        <input type="text" placeholder="Where are you Shipping to?" />
      </div>
      <div class="form-input-holder-two" data-aos="fade-up" data-aos-duration="1500">
        <select>
          <option value="" selected disabled>
            What are you shipping? (Package Type)
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </select>
        <input type="text" placeholder="Quantity (LCL/FCL)" />
      </div>
      <div class="form-input-holder-two" data-aos="fade-up" data-aos-duration="1500">
        <input type="text" placeholder="Enter Total Volume" />
        <input type="text" placeholder="Length" />
      </div>
      <div class="form-input-holder-two" data-aos="fade-up" data-aos-duration="1500">
        <input type="text" placeholder="Height" />
        <input type="text" placeholder="Width" />
      </div>
      <div class="forms-title" data-aos="zoom-out" data-aos-duration="1500">
        <span class="ft-margin"></span>
        <h5>Weight in KG or CBM?</h5>
      </div>
      <div class="form-radio-holder" data-aos="fade-up" data-aos-duration="1500">
        <label><input type="radio" name="weight" />KG</label>
        <label><input type="radio" name="weight" />CBM</label>
        <label><input type="radio" name="weight" />Both</label>
      </div>
      <div class="form-input-holder" data-aos="fade-up" data-aos-duration="1500">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Cargo Description"
        ></textarea>
      </div>
      <div class="form-input-holder" data-aos="fade-up" data-aos-duration="1500">
        <input type="text" placeholder="Transaction Value" />
      </div>
      <div class="forms-title" data-aos="zoom-out" data-aos-duration="1500">
        <span class="ft-margin"></span>
        <h5>Upload file</h5>
      </div>
      <div
        class="form-input-upload-holder"
        :style="{ backgroundImage: fileURL ? 'url(' + fileURL + ')' : 'none' }"
      >
        <MdCloudUpload v-if="!fileURL" />
        <input
          type="file"
          id="fileInput"
          @change="handleFileChange"
          style="display: none"
        />
        <a
          @click="openFileInput"
          :class="{ 'behind-image': fileURL }"
          :disabled="fileURL"
        >
          Choose file
        </a>
        <div v-if="file">
          <span>{{ file.name }}</span>
          <a @click="removeFile">Remove</a>
        </div>
      </div>
      <div class="forms-title" data-aos="zoom-out" data-aos-duration="1500">
        <span class="ft-margin"></span>
        <h5>Do you have any of the following?</h5>
      </div>
      <div class="form-radio-holder" data-aos="fade-up" data-aos-duration="1500">
        <label><input type="radio" name="others" />Hazardous Material</label>
        <label><input type="radio" name="others" />Event Cargo</label>
        <label><input type="radio" name="others" />Personal Goods</label>
      </div>
      <div class="form-button-holder" data-aos="zoom-in" data-aos-duration="1500">
        <button type="submit" @click="submitForm">GET QUOTE</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { MdCloudUpload } from "@kalimahapps/vue-icons";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const form = ref(null);
const file = ref(null);
const fileURL = ref(null);
const toast = useToast();

const openFileInput = () => {
  const fileInput = document.getElementById("fileInput");
  fileInput.click();
};

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    file.value = selectedFile;
    fileURL.value = URL.createObjectURL(selectedFile);
  }
};

const removeFile = () => {
  file.value = null;
  fileURL.value = null;
};

const submitForm = () => {
  if (validateForm()) {
    // Process form submission
    console.log("Form submitted with file:", file.value);
    toast.success("Form submitted successfully!");
    clearForm();
  } else {
    toast.error("Please fill in all fields before submitting.");
  }
};

const validateForm = () => {
  const inputs = form.value.querySelectorAll("input, select, textarea");
  for (const input of inputs) {
    if (!input.value) {
      return false; // Return false if any field is empty
    }
  }
  return true; // Return true if all fields are filled out
};

const clearForm = () => {
  // Clear form fields after successful submission
  form.value.reset();
  file.value = null;
  fileURL.value = null;
};
</script>

<style>
.form-input-upload-holder {
  min-height: 15vh;
  background-color: #d1f0da;
  padding: 3vh 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 5vh;
}

.form-input-upload-holder svg {
  font-size: 10vh;
}

.form-input-upload-holder a {
  background-color: #a10101;
  border-radius: 0.1vh;
  padding: 0.5vh 1vw;
  cursor: pointer;
  color: #fffffe;
  font-size: 1.6vh;
}

.form-input-upload-holder span {
  color: #212121;
  font-size: 1.6vh;
  font-weight: 600;
}

.form-input-upload-holder > input[type="file"],
.form-input-upload-holder > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.form-input-upload-holder > a {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
}

.form-input-upload-holder > a.behind-image {
  z-index: -1;
}

.form-input-upload-holder > div {
  bottom: 0;
  right: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
