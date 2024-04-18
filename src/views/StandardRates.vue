<template>
  <div class="services-section-container">
    <div class="services-section-holder">
      <h1>STANDARD RATES FOR CONSOLIDATED SHIPMENTS</h1>
      <div class="title-underline"></div>
    </div>
    <div class="services-section-holder">
      <div class="pages-row">
        <div
          class="pages-col-4"
          v-for="(column, columnIndex) in cdata"
          :key="columnIndex"
        >
          <div
            v-for="(item, index) in column"
            :key="index"
            :class="['grid-item', `grid-item-${(index % 3) + 1}`]"
            :style="{ backgroundColor: item.color }"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
      <p style="margin-top: 5vh">
        Note: These are standard rates for consolidated shipments involving e-commerce or
        personal effects only. This is an all in package rate from origin up to final
        destination with no extra charge, provided shipper/consignee comply with all the
        rules and instructions. Delivery is free within Metro Manila, Additional Charges
        apply for deliveries outside Metro Manila.
      </p>
    </div>
    <div class="services-section-holder">
      <h1>STANDARD RATES FOR LOCAL PARCEL DELIVERY</h1>
      <div class="title-underline"></div>
    </div>
    <div class="services-section-holder" style="display: none">
      <div class="pages-row">
        <div
          class="pages-col-2"
          v-for="(column, columnIndex) in ddata"
          :key="columnIndex"
        >
          <div
            v-for="(item, index) in column"
            :key="index"
            :class="['grid-item', `grid-item-${(index % 3) + 1}`]"
            :style="{ backgroundColor: item.color }"
          >
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="services-section-holder">
      <img
        class="img-rates-data"
        src="../assets/images/srf-local.png"
        style="width: 50vw; height: auto"
        alt=""
      />
    </div>
  </div>
  <BookService />
</template>
<script setup>
const cdata = [
  [
    { text: "COUNTRY", color: "#04a533" },
    { text: "China", color: "#d1f0da" },
    { text: "Hongkong", color: "#fffffe" },
  ],
  [
    { text: "BY SEA", color: "#04a533" },
    { text: "Php 12,000 per/cbm", color: "#d1f0da" },
    { text: "Php 15,000 per/cbm", color: "#fffffe" },
  ],
  [
    { text: "BY AIR", color: "#04a533" },
    { text: "Php 450 per kg", color: "#d1f0da" },
    { text: "Php 450 per kg", color: "#fffffe" },
  ],
];

const ddata = [
  [
    { text: "WEIGHT", color: "#04a533" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
  ],
  [
    { text: "METRO MANILA", color: "#04a533" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
  ],
  [
    { text: "LUZON", color: "#04a533" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
  ],
  [
    { text: "VISAYAS", color: "#04a533" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
  ],
  [
    { text: "MINDANAO", color: "#04a533" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
  ],
  [
    { text: "ISLAND", color: "#04a533" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
    { text: "?", color: "#d1f0da" },
    { text: "?", color: "#fffffe" },
  ],
];
</script>

<script>
import BookService from "../components/BookService.vue";

export default {
  components: {
    BookService,
  },
};
</script>

<style scoped>
.grid-item {
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1vh solid #fffffe;
}

.grid-item-1 {
  background-color: #d1f0da;
}
.grid-item-2 {
  background-color: #fffffe;
}
.grid-item-3 {
  background-color: #d1f0da;
}
</style>
