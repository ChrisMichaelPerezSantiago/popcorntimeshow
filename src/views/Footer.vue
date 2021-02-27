<template>
  <footer id="footer">
    <br />
    <div>
      <p>
        PopcornTime Show does not store any files on our server, we only linked
        to the media which is hosted on 3rd party services.<br />
      </p>
      <p>version {{ version }}</p>
    </div>
  </footer>
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