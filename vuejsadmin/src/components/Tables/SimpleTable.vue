<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row>
        <md-table-cell md-label="Sr.no">
          <b>#</b>
        </md-table-cell>
        <md-table-cell md-label="Title">
          <b>Name</b>
        </md-table-cell>
        <md-table-cell md-label="Alias">
          <b>Alias</b>
        </md-table-cell>

        <md-table-cell md-label="Status">
          <b>Status</b>
        </md-table-cell>
        <md-table-cell md-label="Action">
          <b>Action</b>
        </md-table-cell>
      </md-table-row>

      <md-table-row v-for="(item, index) in users" :key="index">
        <md-table-cell md-label="Sr.No">{{ index + 1 }}</md-table-cell>
        <md-table-cell md-label="Sr.No">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Alias">{{ item.alias }}</md-table-cell>

        <md-table-cell md-label="Show">Show</md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary">
            <router-link :to="'/editcms/'+item.id">
              <md-icon>edit</md-icon>
            </router-link>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button @click="cmsdelete(item.id)" class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      errors: [],
      users: [],
      popup: ""
    };
  },
  created() {
    axios
      .get("http://localhost:3003/cms")
      .then(response => {
        // JSON responses are automatically parsed.
        this.users = response.data;
        //console.log("Test response", response.data);
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    cmsdelete(id) {
      // alert("http://localhost:3003/cmsdel/" + id);
      if (confirm("Do you really want to delete?")) {
        axios
          .get("http://localhost:3003/cmsdel/" + id)
          .then(response => {
            this.popup = "data deleted suesfully";
          })
          .catch(err => {
            this.push.errors.push(err);
          });
      }
    }
  }
};
</script>

