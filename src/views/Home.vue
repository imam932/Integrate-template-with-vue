<template>
  <div id="app-container">
    <div class="main-wrapper">
    <top-nav/>
    <sidebar/>
      <router-view/>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/containers/Sidebar'
import TopNav from '@/containers/TopNav'

// import $ from 'jquery' // summernote needs it
// import 'bootstrap' // ibid.
// import 'chart.js'
// import 'owl.carousel'
// import 'summernote'
import 'chocolat'

export default {
  data () {
  return { show: false }  
  },
  components: {
    TopNav,
    Sidebar
  }
};
</script>
