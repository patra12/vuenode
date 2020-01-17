<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Slider</h4>
            <!-- <a class="plus" href="/addslider">+</a> -->
            <router-link to="/addslider">
                <p class="plus">+</p>
           </router-link>
            <!-- <p class="category">Here is a subtitle for this table</p> -->
          </md-card-header>
          
          <md-card-content>
           <template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row>
        <md-table-cell md-label="Sr.no"><b>#</b></md-table-cell>
        <md-table-cell md-label="Name"><b>Slider Title</b></md-table-cell>
        <md-table-cell md-label="Country"><b>Image</b></md-table-cell>
        
         <md-table-cell md-label="Status"><b>Status</b></md-table-cell>
        <md-table-cell md-label="Action"><b>Action</b></md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-label="Sr.No">1.</md-table-cell>
        <md-table-cell md-label="Name">Parallax Photography</md-table-cell>
        <md-table-cell md-label="Country"> <img class="img" :src="galleryImage" /></md-table-cell>
        <md-table-cell md-label="Show">Show</md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-label="Sr.No">2.</md-table-cell>
        <md-table-cell md-label="Name">Wildlife Parallax</md-table-cell>
        <md-table-cell md-label="Country"> <img class="img" :src="galleryImage1" /></md-table-cell>
        <md-table-cell md-label="Show">Show</md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-label="Sr.No">2.</md-table-cell>
        <md-table-cell md-label="Name">Soccer Match </md-table-cell>
        <md-table-cell md-label="Country"> <img class="img" :src="galleryImage2" /></md-table-cell>
        <md-table-cell md-label="Show">Show</md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>

    </md-table>
  </div>
</template>

          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-card",
  props: {
    galleryImage: {
      type: String,
      default: require("@/assets/img/slider/1.jpg")
    },
    galleryImage1: {
      type: String,
      default: require("@/assets/img/slider/2.jpg")
    },
    galleryImage2: {
      type: String,
      default: require("@/assets/img/slider/3.jpg")
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.img {
   height: 120px;
   width: 220px;
}
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
