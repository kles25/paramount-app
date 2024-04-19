<template>
  <div class="services-section-container">
    <form class="services-form-holder">
      <div class="forms-title">
        <span class="ft-margin"></span>
        <h5>Cost Calculator by Sea</h5>
      </div>
      <h1>RATES ARE ONLY ESTIMATE AND WILL BE SUBJECT TO VALUATION AND OTHER CHARGES</h1>
      <p>
        (Note: This computation is applicable only for general cargoes (LCL & personal
        effects/e-commerce by air within Metro Manila delivery.)
      </p>
      <div class="form-select-holder">
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
      <div class="form-input-holder">
        <input type="text" placeholder="Origin City" />
        <input type="text" placeholder="Destination City" />
        <input type="text" placeholder="CBM" />
        <input type="number" placeholder="All In Rate" />
        <input type="number" placeholder="Estimated Price" />
      </div>
      <div class="form-button-holder">
        <button type="submit">GET QUOTE</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
