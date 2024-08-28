<template>
  <div id="app">
    <Navbar />
    <div class="teste container">
      <div class="row">
        <div class="col-lg-6">
          <HeaderCarousel />
        </div>
        <div class="col-lg-6">
          <SectionSobre />
        </div>
      </div>
    </div>
    <SectionAgenda />
    <SectionInscricao />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HeaderCarousel from './components/HeaderCarousel.vue';
import SectionSobre from './components/SectionSobre.vue';
import SectionAgenda from './components/SectionAgenda.vue';
import SectionInscricao from './components/SectionInscricao.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    HeaderCarousel,
    SectionSobre,
    SectionAgenda,
    SectionInscricao,
    Footer,
  },
};
</script>

<style>
@import './assets/style.css';
</style>
