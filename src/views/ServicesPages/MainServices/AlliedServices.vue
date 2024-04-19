<template>
  <div class="section-one-container">
    <div class="section-one-holder">
      <img
        data-aos="zoom-out"
        data-aos-duration="1000"
        src="@/assets/images/service-process.png"
        alt=""
      />
      <h1 data-aos="fade-down" data-aos-duration="1000">OUR ALLIED SERVICES</h1>
      <div class="title-underline" data-aos="zoom-out" data-aos-duration="1000"></div>
      <p data-aos="fade-up" data-aos-duration="1000">
        Paramount Logistics provides various services such as logistics support, entry and
        exit clearance, and activity coordination to all stakeholders of vessels at port
        (i.e. vessel operator, cargo receivers, consignees, shippers, owner’s internal
        operational needs, suppliers, dry docking and repairs, etc.) to all foreign and
        local ships calling various Philippine ports.
      </p>
      <p data-aos="fade-up" data-aos-duration="1000">
        We understand the value of time in making ship operations efficient, and we share
        this commitment with our clients by providing fast turnaround services for ship
        operators, charterers, and ship owners alike.
      </p>
    </div>
  </div>
  <div class="section-two-container">
    <div class="section-two-holder">
      <h1 data-aos="fade-down" data-aos-duration="1000">
        A DETAIL OF OUR SERVICES INCLUDES:
      </h1>
      <div class="title-underline" data-aos="zoom-out" data-aos-duration="1000"></div>
      <div class="pages-row">
        <div v-for="(service, index) in services" :key="index" class="pages-col-4">
          <div
            class="as-content-holder"
            data-aos="fade-up"
            :data-aos-duration="service.aDuration"
          >
            <img
              :src="service.imageUrl"
              :alt="service.title"
              style="width: 100%; height: 40vh; object-fit: cover; margin-bottom: 2vh"
            />
            <h4>{{ service.title }}</h4>
            <p v-for="(paragraph, idx) in service.description" :key="idx">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <BookService />
</template>
<script>
import BookService from "@/components/BookService.vue";
import AlliedServiceImg from "@/assets/images/service-process.png";

export default {
  components: {
    BookService,
  },
  data() {
    return {
      services: [
        {
          imageUrl: AlliedServiceImg,
          title: "E-COMMERCE",
          description: [
            "Paramount Logistics can be your reliable e-partner, whether you are the merchant or the buyer. Paramount Logistics offers the best and lowest rates for freight, customs clearance, and delivery.",
            "Paramount Logistics offers buyers and sellers a variety of e-commerce payment solutions, offering the most flexibility to suit your needs. We’ve made our merchant payment processing and services as easy and convenient as possible, so you can focus on things that truly matter – growing your business. We also offer Cash on Delivery (COD) service which protects sellers from bogus buyers by ensuring payment before delivering a package. It is more convenient, secure, and has a wider reach.",
          ],
          aDuration: 500,
        },
        {
          imageUrl: AlliedServiceImg,
          title: "FULFILLMENT CENTER",
          description: [
            "Paramount Logistics has fulfillment centers across different countries that provide receiving, consolidation and packing services with complete customer support to help online shoppers from the Philippines get their goods from merchants abroad by way of a third party courier service. All you have to do is ship the items to our given addresses abroad and we will deliver your items right to your doorstep",
          ],
          aDuration: 800,
        },
        {
          imageUrl: AlliedServiceImg,
          title: "SOURCING & BUYING",
          description: [
            "Paramount Logistics assists you in sourcing or purchasing items from abroad. If you lack a valid credit card or access to banks overseas, we can acquire items on your behalf. Additionally, we collaborate with trading companies that can represent you for orders in commercial quantities. Simply share your requirements with us, and we'll offer you the finest options to select from.",
          ],
          aDuration: 1100,
        },
        {
          imageUrl: AlliedServiceImg,
          title: "ASSISTANCE FOR PERMITS",
          description: [
            "If you require permits for your business or for regulated items that you intend to import, Paramount Logistics is ready to lend a hand. Moreover, we provide complimentary legal guidance for your legal inquiries pertaining to business and importation.",
          ],
          aDuration: 500,
        },
        {
          imageUrl: AlliedServiceImg,
          title: "TRANSPORT INSURANCE",
          description: [
            "If you require insurance coverage for your cargo beyond the limited liability provided by Paramount Logistics as outlined in the terms and conditions, we can assist you in securing insurance for your cargo.",
          ],
          aDuration: 800,
        },
        {
          imageUrl: AlliedServiceImg,
          title: "OTHERS",
          description: [
            "We offer everything you need. Simply send us a message, and we'll provide solutions to your problems.",
          ],
          aDuration: 1100,
        },
        // Add more service items as needed
      ],
    };
  },
};
</script>
<style scoped>
.as-content-holder {
  padding: 2vh 2vw;
}
</style>
