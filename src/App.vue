<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import NavBar from './views/NavBar';
  import Footer from './views/Footer';

  export default {
    components:{
      NavBar,
      Footer,
    },
  };
</script>
