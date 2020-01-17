<template>
  <div>
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">Edit Page{{this.$route.params.id}}</h4>
        <!-- <p class="category">Complete your profile</p> -->
        <router-link to="/cms">
          <img title="Back to CMS list" class="plus" :src="dataBackgroundColor" />
        </router-link>
      </md-card-header>
      <md-card-content>
        <div class="md-layout">
          <div class="row mb-5"></div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Title</label>
              <md-input v-model="title" name="title" id="title" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Alias</label>
              <md-input v-model="alias" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <label>Full description</label>
            <br />
            <!-- <md-input v-model="fulldescription" type="email"></md-input> -->
            <vue-editor v-model="description"></vue-editor>
          </div>
          <div class="md-layout-item">
            <br />
            <label></label>

            <input
              type="file"
              name="filename"
              ref="image"
              class="form-control"
              value="abc"
              @change="onFileChange"
            />
            <img style="width:10%" :src="imgUrl" alt="" />
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
            <md-button @click="sendData()" class="md-raised md-success">Edit</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import axios from "axios";

export default {
  name: "add-cms",
  components: {
    VueEditor
  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: require("@/assets/img/back.png")
    }
  },
  data() {
    return {
      title: "",
      alias: "",
      description: "",
      metatitle: "",
      metakeywords: "",
      metadescription: "",
      image: "",
      imgUrl: ""
    };
  },
  mounted() {
    this.get_data();
    this.get_img();
  },
  methods: {
    onFileChange() {
      var file = this.$refs.image.files[0];
      this.image = file;
      this.imgUrl = URL.createObjectURL(file);
    },
  
    modfy_formdata(){
      const params  = new FormData();
      params.append("title", this.title);
      params.append("alias", this.alias);
      params.append("description", this.description);
      params.append("metatitle", this.metatitle);
      params.append("metakeywords", this.metakeywords);
      params.append("metadescription", this.metadescription);
      if (this.$refs.image.value != (null || "")){
        params.append("image", this.image);
      }

      return params
    },
    sendData: function() {
      const params = this.modfy_formdata();
      console.log(params);
      for (var pair of params.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      axios({
        method: "post",
        url: (this.$refs.image.value == (null || ""))?"http://localhost:3003/editpostcms/"+ this.$route.params.id:"http://localhost:3003/editpostcmsi/" + this.$route.params.id,
        data: params,
        headers: {
          "content-type": `multipart/form-data; boundary=${params._boundary}`
        }
      });
      this.$router.push("/cms");
    },
    get_data: function() {
      
      axios({
        method: "get",
        url: "http://localhost:3003/editcms/" + this.$route.params.id
      }).then(res => {
        this.$data.title = res.data[0].title;
        this.$data.alias = res.data[0].alias;
        this.$data.description = res.data[0].description;
        this.$data.metatitle = res.data[0].metatitle;
        this.$data.metakeywords = res.data[0].metakeywords;
        this.$data.metadescription = res.data[0].metadescription;
        this.$data.image = res.data[0].image;
        this.$data.imgUrl = res.data[0].image;
          
      });
    },
    get_img: function() {
      console.log(localStorage.getItem);
    }
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
<style scoped>
.txtcenter {
  text-align: center;
  padding-bottom: 10px;
  width: 50%;
  margin: auto;
}
.txtcenter ol {
  width: 50%;
  margin: auto;
  border: 1px solid red;
}
.txtcenter ol li {
  padding-right: 18%;
}
</style>
