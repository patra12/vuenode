<template>
  <form>
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">Add Inage</h4>
        <!-- <p class="category">Complete your profile</p> -->
        <router-link to="/gallery">
            <img title="Back to Gallery list" class="plus" :src="dataBackgroundColor" />
           </router-link>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
        <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Image Title</label>
              <md-input v-model="title" type="text"></md-input>
            </md-field>
          </div>
           
          <div class="md-layout-item md-small-size-100 md-size-100">
           
              <label>Full Description</label><br>
              <!-- <md-input v-model="fulldescription" type="email"></md-input> -->
              <vue-editor v-model="fulldescription"></vue-editor>
            
          </div>
          <div class="md-layout-item"><br>
              <label></label>
              <md-input v-model="image" type="file"></md-input>
          </div>
          
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Meta title</label>
              <md-input v-model="metatitle" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Meta keywords</label>
              <md-input v-model="metakeywords" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Meta description</label>
              <md-input v-model="metadescription" type="text"></md-input>
            </md-field>
          </div>
          
          
          
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Submit</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor
  },
  name: "add-gallery",
  props: {
    dataBackgroundColor: {
      type: String,
       default: require("@/assets/img/back.png")
    }
  },

  data() {
    return {
      title: null,
      alias: null,
      fulldescription: null,
      image: null,
      metatitle: null,
      metakeywords: null,
      metadescription: null
           
    };
  }
};
</script>
<style scoped>
.plus {
  float: right;
  margin-top: -30px;
  cursor: pointer;
  padding: 0px 3px;
  height: 40px;
  width: 40px;
}
</style>