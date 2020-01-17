<template>
  <div>
    <Site_header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Site_header from "./header";
// import Home from "./home";
import Footer from "./footer";
export default {
  name: "merger",
  components: {
    Site_header,
    // Home,
    Footer
  }
};
</script>
