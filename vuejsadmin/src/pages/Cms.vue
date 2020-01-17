<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">CMS Page List</h4>
            <!-- <a class="plus" href="/addcms">+</a> -->
            <router-link :to="'/addcms'">
              <p class="plus">+</p>
            </router-link>
            <!-- <p class="category">Here is a subtitle for this table</p> -->
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"></div>
    </div>
  </div>
</template>

<script>
import { SimpleTable } from "@/components";

export default {
  components: {
    SimpleTable
  }
};
</script>
<style scoped>
.plus {
  float: right;
  margin-top: -30px;
  font-size: 30px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 12px;
  padding: 0px 3px;
}
</style>
