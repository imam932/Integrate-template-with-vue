<template>
  <div id="app">
    <router-view/>
    <footer class="main-footer">
        <div class="footer-left">
          Copyright &copy; 2018 <div class="bullet"></div> Design By <a href="https://nauval.in/">Muhamad Nauval Azhar</a>
        </div>
        <div class="footer-right">
          2.3.0
        </div>
      </footer>
  </div>
</template>

<script>
import './assets/js/stisla.js';
import './assets/js/scripts.js';
// import '@/assets/js/page/index.js';

export default {
  name: 'App',
};
</script>

