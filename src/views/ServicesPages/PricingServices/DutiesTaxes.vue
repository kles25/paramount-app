<template>
  <div class="section-one-container">
    <div class="section-one-holder">
      <h1 data-aos="fade-down" data-aos-duration="1500">CUSTOM DUTY AND TAX</h1>
      <div class="title-underline" data-aos="zoom-out" data-aos-duration="1500"></div>
      <p data-aos="fade-up" data-aos-duration="1500">
        As a rule, all imported items are taxable, even though previously exported from
        the Philippines, whether imported by a private individual or a commercial entity.
      </p>
      <p data-aos="fade-up" data-aos-duration="1500">
        However in the case of shipments with De Minimis Value, the same is tax-free. De
        minimis is the value of goods for which no duty or tax is collected, the de
        minimis threshold is PHP 10,000. Shipments with de minimis value (PHP 10,000 or
        below) are considered importations with negligible amounts and are not subject to
        tax.
      </p>
      <p data-aos="fade-up" data-aos-duration="1500">
        Shipments covered by one Master Bill of Lading (MBL) or Master Airway Bill of
        Lading (MAWB) but with several House Bill of Ladings (HBLs) or House Airway Bills
        (HAWBs) with single or multiple invoices with the same consignee and shipper is
        considered as a single consignment and subject to duties and taxes should the
        total value exceed the De Minimis value, if it has the same arrival schedule in
        the Philippines.
      </p>
    </div>
  </div>
  <div class="section-two-container">
    <div class="section-two-holder">
      <h1 data-aos="fade-down" data-aos-duration="1500">
        HOW TO COMPUTE CUSTOMS DUTIES AND TAXES?
      </h1>
      <div class="title-underline" data-aos="zoom-out" data-aos-duration="1500"></div>
      <p data-aos="fade-up" data-aos-duration="1500">
        The average customs duty rate has a range of 3-30% (normally at around 15%),
        depending on the commodity. In some cases, if there is certificate of origin, the
        customs duty rate is discounted, depending on what country the goods originated.
        But it does not apply to consolidated shipments.
      </p>
      <p data-aos="fade-up" data-aos-duration="1500">
        The tax is also called the Value Added Tax (VAT) and is pegged at 12%. Customs
        duty and taxes are computed based on the landed cost (includes freight, cost of
        goods, insurance, etc.)
      </p>
    </div>
  </div>
  <BookService />
</template>
<script>
import BookService from "@/components/BookService.vue";

export default {
  components: {
    BookService,
  },
};
</script>
<style lang=""></style>
