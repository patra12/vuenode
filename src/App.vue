<template>
  <router-view>
    <Body />
  </router-view>
</template>

<script>
import Body from "./components/body.vue";

export default {
  name: "App",
  components: {
    Body
  },
  data: () => ({
    //
  })
};
</script>
