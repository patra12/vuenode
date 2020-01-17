<template>
  <header>
      <section class="top-nav caearfix">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <!--Start Top nav bar -->
                <div class="col text-light p-0">
                  <section class="top-nav">
                    <a href="#">
                      <img
                        class="img-fluid main-logo"
                        src="../assets/images/avona-logo-tpo.png"
                        alt=" Image of site logo "
                      />
                    </a>
                  </section>
                </div>
              <!--Logo end -->
            </div>
            <div class="col-md-6">
              <div class="row top-block">
                  <p class="ico-text">&nbsp;<font-awesome-icon icon="phone" rotation="90" size="2x" />&nbsp; Tel: <a href="tel:3177594940">&nbsp;77-AVONA</a></p>
                  <p class="ico-text">&nbsp;<font-awesome-icon icon="phone" rotation="90" size="2x" />&nbsp; Tel: <a href="#">&nbsp;(877) 772-8662</a></p>
                  <p class="ico-text">&nbsp;<font-awesome-icon icon="envelope" size="2x" />&nbsp; <a href="mailto:info@mail.com">&nbsp;info@mail.com</a></p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
      <!--End Top nav bar -->

      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link mr-3" to="/">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link mr-3" to="/">PRODUCTS</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link mr-3" to="/contact">CONTACT US</router-link>
            </li>    
          </ul>
        </div> 
        </div> 
      </nav>
  </header>
</template>

<script>
export default {
  name: "header"
};
</script>

<style scoped>
.top-nav {
  background: #000;
}
.side-nav img {
  width: 12%;
  margin-right: 10px;
}
.side-nav h5 {
  color: white;
  display: inline-block;
}
.d {
  display: inline;
  width: 50%;
}
.btm-nav {
  background: #f05a25;
  padding: 0.4% 0%;
}
.btm-nav a {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  color: black;
  font-weight: bold;
  padding: 0px;
}
.main-logo {
    padding: 20px 0;
    max-width: 250px;
}
.navbar-dark .navbar-nav .nav-link {
    color: rgb(240, 90, 37);
    font-size: 17px;
    font-weight: 600;
}
.ico-text{
    color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 0;
    padding: 0 10px;
}
.ico-text:last-child {
  padding-right: 0;
}
.ico-text:first-child {
  padding-left: 0;
}
.ico-text a{
  color: #fff;
  transition: .5s;
}
.ico-text a:hover{
  color:#f05a25;
  text-decoration: none;
}
.ico-text .fa-phone, .ico-text .fa-envelope {
    padding: 5px;
    border-width: 5px;
    border-style: double;
    border-radius: 50%;
    color: #f05a25;
}

.top-block {
    padding-top: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
}
</style>