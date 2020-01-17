<template>
  <div class="container">
    <div class="row">
      <div class="col-5 d-flex mx-auto margin rounded shadow">
        <div class="container p-0">
          <div class="row bg-primary round-top">
            <div class="col">
              <p class="f m-0">Login Form</p>
            </div>
          </div>
          <div class="row">
            <div class="col py-3">
              <form class action>
                <div class="form-group">
                  <input class="form-control style" type="text" placeholder="Username" />
                </div>
                <div class="form-group">
                  <input class="form-control style" type="password" placeholder="Password" />
                </div>
                <div class="text-right">
                  <button class="btn btn-primary btn-sm">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.margin {
  margin: 18% 0%;
}
.round-top {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.shadow {
  box-shadow: 2px 0px 0px black;
}
.f {
  font-size: 13px;
  padding: 5px 0px;
}
.style {
  font-size: 10px;
  padding: 4px 10px;
  height: 8vh;
}
button {
  font-size: 10px;
  padding: 2px 7px;
}
</style>
