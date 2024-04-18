<template>
  <div class="services-section-container">
    <div class="book-service-holder">
      <h1>BOOK SERVICE NOW</h1>
      <div class="title-underline"></div>
      <div class="pages-row">
        <div class="pages-col-6">
          <form action="" class="form-book-holder">
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="EMAIL" />
            <input type="number" placeholder="PHONE" />
            <div class="book-button-holder"><button type="submit">BOOK</button></div>
          </form>
        </div>
        <div class="pages-col-6">
          <div class="contact-book-holder">
            <img src="../assets/images/paramount-logo.png" alt="" />
            <p>
              For your corporate or personal requirements, whether by sea, air, or land,
              we will provide the most amazing shipping rates and services to you.
            </p>
          </div>
          <div class="contact-book-holder">
            <img src="../assets/images/paramount-logo.png" alt="" />
            <h3>24/7 SHIPPING SERVICE.</h3>
            <p>+63 906-584-3215 (GLOBE)</p>
            <p>+63 968-597-3038 (SMART)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
@media (max-width: 992px) {
  .book-service-holder .pages-col-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .book-service-holder h1 {
    font-size: 5vh;
  }

  .book-button-holder button {
    width: 100%;
    height: 5vh;
    padding: 1vh 1.5vw;
    margin-top: 3vh;
  }
}
</style>
