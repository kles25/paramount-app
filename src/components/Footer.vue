<template>
  <div class="footer-container">
    <div class="footer-holder">
      <div class="pages-row">
        <div class="pages-col-2">
          <router-link to="/"
            ><img src="../assets/images/paramount-logo.png" alt=""
          /></router-link>

          <div class="soc-med-holder">
            <a href="https://www.facebook.com/" target="_blank">&#102;</a>
            <a href="https://www.twitter.com/" target="_blank">&#116;</a>
            <a href="https://www.instagram.com/" target="_blank">&#99;</a>
          </div>
        </div>
        <div class="pages-col-4">
          <p class="details">
            <span>Paramount Logistics Inc.</span>
            provides supply chain and transportation management services with focus on
            customer requirements in order to meet the challenges of today’s business
            demands.
          </p>
        </div>
        <div class="pages-col-6">
          <div class="footer-contact-info">
            <p class="address">
              UNIT 32-D PEARL OF THE ORIENT TOWER, ROXAS BOULEVARD, MANILA 1000,
              PHILIPPINES
            </p>
            <p class="contact-number">+63 2 82919200</p>
            <p class="contact-number">+63 9065843215</p>
            <p class="contact-number">+63 9685973038</p>
            <p class="email">info@plogisitcsinc.net</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
