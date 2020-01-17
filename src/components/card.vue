<template>
  <div class="row py-5">
    <div class="card-deck">
      <div class="mb-4 card text-center">
        
        <div class="card-body">
          <img src="../assets/images/ag-ac.png" class="card-img-top" alt />
          <h3 class="card-title">AC / GC</h3>
          <p
            class="card-text text-left"
          >The AC/GC is our signature Asphalt Blade designed to perform in the most demanding aggregates while delivering the fastest cut on all types of abrasive materials.</p>
        </div>
        <router-link to="/Product-Details" class="avona-btn">Read More</router-link>
        <!--End of card-body-->
      </div>
      <!-- End of card-->

      <div class="mb-4 card text-center">
        <div class="card-body">
          <img src="../assets/images/blue-shark.png" class="card-img-top" alt />
          <h3 class="card-title">Blue Shark</h3>
          <pclass="card-text text-left">Our most popular General Purpose Blade for the contractor who is looking for exceptional value and maximum performance on Hand Held Saws or Low Horsepower Walk Behind Saws.</p>
        </div>
        <a href="#" class="avona-btn">Read More</a>
        <!--End of card-body-->
      </div>
      <!-- End of card-->

      <div class="mb-4 card text-center">
        <div class="card-body">
          <img src="../assets/images/dracuta-iron.png" class="card-img-top" alt />
          <h3 class="card-title">DUCTILE IRON</h3>
          <p class="card-text text-left">The AVONA Ductile Iron Blade is the most cost effective solution to cutting ductile iron pipe versus a traditional abrasive blade.</p>
        </div>
         <a href="#" class="avona-btn">Read More</a>
        <!--End of card-body-->
      </div>
      <!-- End of card-->
    </div>
    <!--End of card dake-->

    <div class="card-deck">
      <!--start of card dake-->
      <div class="mb-4 card text-center">
        <div class="card-body">
          <img src="../assets/images/i-cut.png" class="card-img-top" alt />
          <h3 class="card-title">I - CUT</h3>
          <p class="card-text text-left">The I-Cut Supreme Combination Blade guarantees to outperform any other blade for cutting Concrete, Asphalt or Ductile Pipe. This blade is the only blade you need on your truck, no matter what you are cutting.</p>
        </div>
        <a href="#" class="avona-btn">Read More</a>
        <!--End of card-body-->
      </div>
      <!-- End of card-->

      <div class="mb-4 card text-center">
        <div class="card-body">
          <img src="../assets/images/vane.png" class="card-img-top" alt />
          <h3 class="card-title">VanE</h3>
          <p class="card-text text-left">The Vane is our signature blade designed for the most demanding contractor who is looking for a blade that will deliver the lowest cost per cut on Cured Concrete and other General Purpose Materials. Revolutionary superabrasive technology makes this blade truly unique.</p>
        </div>
        <a href="#" class="avona-btn">Read More</a>
        <!--End of card-body-->
      </div>
      <!-- End of card-->

      <div class="mb-4 card text-center">
        <div class="card-body">
          <img src="../assets/images/xlerator.png" class="card-img-top" alt />
          <h3 class="card-title">XleratoR</h3>
          <p class="card-text text-left">The Xlerator is our most popular blade designed for maximum performance on a variety of materials.</p>
        </div>
        <a href="#" class="avona-btn">Read More</a>
        <!--End of card-body-->
      </div>
      <!-- End of card-->
    </div>
  </div>
</template>


<style scoped>
.card-body {
  position: relative;
}

.card{
  -webkit-box-shadow: 0px 0px 33px -12px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 33px -12px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 33px -12px rgba(0,0,0,0.75);
  position: relative;
  overflow: hidden;
}
.btn {
  background-color: coral;
  border: none;
}
.card:hover .card-img-top{
size: 50%;
}
.avona-btn {
    background: #f05a25;
    color: #fff;
    padding: 7px;
    font-size: 17px;
    font-weight: 500;
}
.card-body img{
  transition: transform .5s ease;
}
.card-body:hover img{
   transform: scale(1.1) rotate(50deg);
}
.card-body h3{
  text-transform: uppercase;
}
</style>