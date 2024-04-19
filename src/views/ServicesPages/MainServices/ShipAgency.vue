<template>
  <div class="section-one-container">
    <div class="section-one-holder">
      <img
        data-aos="zoom-out"
        data-aos-duration="1000"
        src="@/assets/images/service-process.png"
        alt=""
      />
      <h1 data-aos="fade-down" data-aos-duration="1000">SHIP AND PORT AGENCY</h1>
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
      <h1 data-aos="fade-down" data-aos-duration="1500">
        A DETAIL OF OUR SERVICES INCLUDES:
      </h1>
      <div class="title-underline" data-aos="zoom-out" data-aos-duration="1000"></div>
      <div class="pages-row">
        <div class="pages-col-6">
          <img
            class="col-6-img"
            data-aos="fade-right"
            data-aos-duration="1500"
            src="@/assets/images/service-process.png"
            alt=""
          />
        </div>
        <div class="pages-col-6">
          <ul data-aos="fade-up" data-aos-duration="1500">
            <li>Husbanding</li>
            <li>Chandelling</li>
            <li>Tanker agency</li>
            <li>Protective agent / owners matters</li>
            <li>Dry cargo calls / bulk</li>
            <li>Project cargo / Heavy lifts</li>
            <li>Brokerage – cargo clearance</li>
            <li>Crew changes / Cash to Masters</li>
            <li>Stevedoring</li>
            <li>Dry docking / repairs</li>
            <li>Lighterage / barging</li>
            <li>Spare parts / store handling</li>
            <li>Hold and tank cleaning</li>
            <li>Underwater survey / hull cleaning</li>
          </ul>
        </div>
      </div>
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
