<template>
  <div class="container">
    <div class="clearfix"></div>
    <div id="footer">
      <div class="container">
        <div class="footer-about">
          <div class="footer-fa-text">
            <div class="footer-fa-menu">
              <a href="#"> PopcornTime Show does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</a>
            </div>
          </div>
          <div class="footer-fa-menu">
            <span class="space">
              <router-link to="">v{{version}}</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive } from "@vue/composition-api";

  export default {
    name: "Footer",
    setup() {
      const doc = reactive({
        author: require("../../package.json").author,
        version: require("../../package.json").version,
        year: new Date().getFullYear()
      });

      return {
        ...doc
      };
    }
  };
</script>