<template>
  <footer>
    <nav>
      <section class="top-nav caearfix">
        <div class="container border-btm">
          <div class="row py-3">
            <!--Start Top nav bar -->
            <div class="col-3 text-light p-0">
              <section class="top-nav">
                <a href="#">
                  <img
                    class="img-fluid"
                    src="../assets/images/avona-footer-logo.png"
                    alt=" Image of site logo "
                    width="100"
                  />
                </a>
              </section>
            </div>
            <div class="col side-nav p-0">
              <nav class="nav flex-row justify-content-end bottom-links">
                <a class="nav-link" href>AC / GC</a>
                <a class="nav-link" href>BLUE SHARK</a>
                <a class="nav-link" href>DUCTILE IRON</a>
                <a class="nav-link" href>I - CUT</a>
                <a class="nav-link" href>VANE</a>
                <a class="nav-link pr-0" href>XLERATOR</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class="copyrights">
        <div class="container">
          <div class="row py-2">
            <p class="my-1 text-center mx-auto">copyrights &copy; 2019</p>
          </div>
        </div>
      </section>
      <!--End Top nav bar -->
    </nav>
  </footer>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style scoped>
.top-nav {
  background: #343a40;
}
.copyrights {
  background: #343a40;
}
.copyrights p {
  color: #fff;
}
.bottom-links a {
  color: #fff;
}
.bottom-links a:hover {
  color: #f05a25;
}
.border-btm {
  border-bottom: 1px solid #666666;
}
</style>