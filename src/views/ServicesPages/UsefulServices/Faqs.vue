<template>
  <div class="services-section-container">
    <div class="services-section-holder">
      <div class="accordion">
        <div v-for="(item, index) in items" :key="index">
          <div class="accordion-item" :class="{ active: activeIndex === index }">
            <div class="accordion-title" @click="toggleAccordion(index)">
              {{ item.title }}
            </div>
            <div class="accordion-content" v-show="activeIndex === index">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="services-section-holder" style="display: none">
      <div class="pages-row">
        <div class="pages-col-4" v-for="(column, columnIndex) in data" :key="columnIndex">
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
        src="@/assets/images/faq-image.png"
        style="height: auto; width: 50vw"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = [
  {
    title: "What are your services?",
    content:
      "We provide all your needs from shipping abroad up to delivery to your local destination. Our services include sourcing, buying, quality control, consolidating, shipping, and delivery to your doorstep.",
  },
  {
    title: "How much is the rate?",
    content:
      "We provide all your needs from shipping abroad up to delivery to your local destination. Our services include sourcing, buying, quality control, consolidating, shipping, and delivery to your doorstep.",
  },
  {
    title: "How many days until it will arrive?",
    content:
      "We provide all your needs from shipping abroad up to delivery to your local destination. Our services include sourcing, buying, quality control, consolidating, shipping, and delivery to your doorstep.",
  },
  {
    title: "What’s the process?",
    content:
      "We provide all your needs from shipping abroad up to delivery to your local destination. Our services include sourcing, buying, quality control, consolidating, shipping, and delivery to your doorstep.",
  },
  {
    title: "What are prohibited items?",
    content:
      "We provide all your needs from shipping abroad up to delivery to your local destination. Our services include sourcing, buying, quality control, consolidating, shipping, and delivery to your doorstep.",
  },
  {
    title: "What are Regulated items?",
    content:
      "We provide all your needs from shipping abroad up to delivery to your local destination. Our services include sourcing, buying, quality control, consolidating, shipping, and delivery to your doorstep.",
  },
];

const activeIndex = ref(null);

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const data = [
  [
    { text: "title 1", color: "#04a533" },
    { text: "item 1", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
  ],
  [
    { text: "title 1", color: "#04a533" },
    { text: "item 1", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
  ],
  [
    { text: "title 1", color: "#04a533" },
    { text: "item 1", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
    { text: "item 7", color: "#d1f0da" },
    { text: "item 4", color: "#fffffe" },
  ],
];
</script>

<style scoped>
.accordion-item {
  margin-bottom: 2vh;
  text-align: left;
}

.accordion-title {
  background-color: #f0f0f0;
  cursor: pointer;
  border-bottom: 0.1vh solid #04a533;
  margin-bottom: 4vh;
  padding-bottom: 2vh;
  font-size: 2vh;
  font-weight: 300;
  color: #212121;
  letter-spacing: 0.2vh;
}

.accordion-content {
  min-height: 5vh;
  background-color: #d1f0da;
  padding: 2vh 2vw;
  font-size: 1.8vh;
  color: #212121;
  display: none;
}

.accordion-item.active .accordion-content {
  display: block;
}

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
