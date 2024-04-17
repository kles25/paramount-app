<template>
  <div class="services-section-container">
    <form action="" class="services-form-holder">
      <div class="forms-title">
        <span class="ft-margin"></span>
        <h5>SENDING OPTION</h5>
      </div>
      <div class="form-radio-holder">
        <label><input type="radio" name="sending" />Branch Drop Off</label>
        <label><input type="radio" name="sending" />Rider Pick Up</label>
      </div>
      <div class="forms-title">
        <span class="ft-margin"></span>
        <h5>RECEIVING OPTION</h5>
      </div>
      <div class="form-radio-holder">
        <label><input type="radio" name="receiving" />Branch Drop Off</label>
        <label><input type="radio" name="receiving" />Home Delivery</label>
      </div>
      <div class="form-input-holder">
        <input type="text" placeholder="Item Name" />
        <input type="text" placeholder="Item Value" />
        <input type="date" placeholder="Item Name" />
        <textarea
          cols="30"
          rows="10"
          placeholder="Enter Pick Up Address and Details"
        ></textarea>
        <textarea
          cols="30"
          rows="10"
          placeholder="Enter Receivers Address and Details"
        ></textarea>
      </div>
      <div class="forms-title">
        <span class="ft-margin"></span>
        <h5>RECEPTACLE</h5>
      </div>
      <div class="form-radio-holder-two">
        <label for=""
          ><input type="radio" name="receptacle" id="" />1KG N-Pack Small ( 14' x
          9.5")</label
        >
        <label for=""
          ><input type="radio" name="receptacle" id="" />3KG N-Pack Large (18"
          x12")</label
        >
        <label for=""
          ><input type="radio" name="receptacle" id="" />3KG Kilo Box Small (9" x 5" x
          3")</label
        >
        <label for=""
          ><input type="radio" name="receptacle" id="" />5KG Kilo Box Medium (10.5" x 14"
          x 7")</label
        >
      </div>
      <div class="forms-title">
        <span class="ft-margin"></span>
        <h5>MODE OF PAYMENT</h5>
      </div>
      <div class="form-radio-holder">
        <label><input type="radio" name="receiving" />Branch Drop Off</label>
        <label><input type="radio" name="receiving" />Home Delivery</label>
      </div>
      <div class="forms-title">
        <span class="ft-margin"></span>
        <h5>TERMS AND CONDITION</h5>
      </div>
      <div class="form-radio-holder">
        <label
          ><input type="radio" name="termsconditions" />I have read, understood and agree
          to Paramount &nbsp
          <router-link to="/services/terms-conditions" target="_blank"
            >Terms and Conditions</router-link
          ></label
        >
      </div>
      <div class="recaptcha-holder">
        <label for="check">
          <div class="input-container">
            <input type="checkbox" class="checkbox" id="check" />
            <span class="checkbox-text">I'm not a robot</span>
          </div>
        </label>
        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" />
      </div>
      <div class="form-button-holder">
        <button type="submit">SECHEDULE</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style lang=""></style>
