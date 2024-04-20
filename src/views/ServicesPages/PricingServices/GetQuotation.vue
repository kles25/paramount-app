<template>
  <div class="services-section-container">
    <form action="" class="services-form-holder">
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
        <h5>Do you have any of the following?</h5>
      </div>
      <div class="form-radio-holder" data-aos="fade-up" data-aos-duration="1500">
        <label><input type="radio" name="weight" />Hazardous Material</label>
        <label><input type="radio" name="weight" />Event Cargo</label>
        <label><input type="radio" name="weight" />Personal Goods</label>
      </div>
      <div class="form-button-holder" data-aos="zoom-in" data-aos-duration="1500">
        <button type="submit">GET QUOTE</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
