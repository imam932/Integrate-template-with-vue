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
