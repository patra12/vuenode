<template>
<section class="productDetails">
  <div class="container py-5">
    <div class="card">
          <div class="row">
            <aside class="col-sm-6 border-right">
              <article class="gallery-wrap"> 
              <div class="img-big-wrap">
                  <a href="#"><img src="../assets/images/ag-ac.png"  alt="" /></a>
              </div> <!-- slider-product.// -->
              </article> <!-- gallery-wrap .end// -->
            </aside>
            <aside class="col-sm-6">
              <article class="card-body p-5">
                <h3 class="title mb-3">Original Version of Some product name</h3>

              <p class="price-detail-wrap"> 
                <span class="price h3 text-themeColor"> 
                  <span class="currency">US $</span><span class="num">1299</span>
                </span> 
                <span>/per kg</span> 
              </p> <!-- price-detail-wrap .// -->
              <dl class="item-property">
                <dt>Description</dt>
                <dd><p>Here goes description consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco </p></dd>
              </dl>
              <dl class="param param-feature">
                <dt class="text-themeColor">Model#</dt>
                <dd>AC / GC (12345611)</dd>
              </dl>  <!-- item-property-hor .// -->
              <dl class="param param-feature">
                <dt class="text-themeColor">Color</dt>
                <dd>Black and white</dd>
              </dl>  <!-- item-property-hor .// -->
              <dl class="param param-feature">
                <dt class="text-themeColor">Product From</dt>
                <dd>Russia, USA, and Europe</dd>
              </dl>  <!-- item-property-hor .// -->
              </article> <!-- card-body.// -->
            </aside> <!-- col.// -->
          </div> <!-- row.// -->
        </div>

    <div class="d-flex borderx w-25 mx-auto"></div>
  </div>


<div class="product-more-desc">
  <div class="container">
  <div class="row">
      <div class="col-9 mx-auto my-4">
        <h4 class="text-center">Lorem ipsum dolor sit amet, consectetur</h4>
        <p class="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        <p class="lead text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididuntsed do eiusmod tempor incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididuntsed do eiusmod tempor incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      </div>
    </div>
  </div>
</div>


</section>




</template>
<script>
export default {
  name: "product inner page"
};
</script>

<style scoped>
.borderx {
  margin: 2%;
}
.img-big-wrap img{
  width: 100%;
}
.text-themeColor{
  color: #f05a25;
}
.card{
  -webkit-box-shadow: 0px 0px 33px -12px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 33px -12px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 33px -12px rgba(0,0,0,0.75);
}
.product-more-desc{
  background:url(../assets/images/bottom-banner.jpg) no-repeat;
  background-color:#d9d9d9; 
  background-size: 100%;
  padding:50px 0;
}
</style>