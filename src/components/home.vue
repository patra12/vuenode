<template>
  <main>
    <section class="banner-sec">
      
          <div class="container">
            <h2 class="display-3">WELCOME</h2>
            <p class="lead">Our Store Present Some New Technological And Powerful Blades Which Will Gives You Long Last And Durability.</p>
            <p>Check Our Newest and Amazing Blades Which Are Newly Comes In Our Store ..................</p>
            <a class="btn btnx btn-lg" href="#" role="button">Know more</a>
          </div>
        
      <!--blade section-->
      
    </section>

    <div class="container">
      <Card />
    </div>
    
  </main>
</template>

<script>
import Card from "./card";
export default {
  components: {
    Card
  }
};
</script>

<style scoped>
.fw h3,
h4 {
  font-weight: bold;
}
.btnx {
  background-color: coral;
}
.banner-sec{
  background:url(../assets/images/top-banner.jpg);
  background-size: 100%;
  padding:50px 0;
}
.banner-sec h2{
  color: #fff;
}
.banner-sec p{
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
</style>
