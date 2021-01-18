

<template>
  <!--Begin: Main-->
  <div id="main-wrapper">
    <div class="watching">
      <div class="container">
        <div
          style="
            text-align: center;
            margin-bottom: 20px;
            margin-top: 20px;
            display: none;
          "
          id="gift-top"
        ></div>
        <div class="prebreadcrumb">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Home' }">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link
                  :to="{ name: 'ShowSection', params: { id: id } }"
                  title="TV Shows"
                  >{{ title }}</router-link
                >
              </li>
            </ol>
          </nav>
        </div>

        <div
          class="alert mb-3"
          style="
            background: #ffaa00;
            color: #111;
            font-size: 16px;
            font-weight: 600;
          "
        >
          If you get any error message when trying to stream, please Refresh the
          page or switch to another torrent.
        </div>
        <div class="watching_player-control">
          <div id="pc-fav" class="btn btn-sm btn-radius btn-secondary mr-2">
            <i class="fa fa-magnet mr-2"></i>Select Torrent
          </div>
          <select v-model="torrent_selected">
            <option
              v-for="(options, index) in data"
              :value="options"
              :key="index"
            >
              {{ options.file }}
            </option>
          </select>

          <div class="clearfix"></div>

          <!--torrent video-->
          <div v-if="torrent_selected">
            <ShowVideo :torrent.sync="torrent_selected.torrent_magnet" />
            <i></i>Quality: {{ torrent_selected.quality }} <i></i>Peers:
            {{ torrent_selected.torrent_peers }} <i></i>Seeds:
            {{ torrent_selected.torrent_seeds }}
            <a
              :href="torrent_selected.torrent_magnet"
              download
              title="Download Torrent"
            >
              <i class="fa fa-magnet mr-2"></i>Download Torrent
            </a>
          </div>
          <!--End: torrent video-->
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/composition-api";
import { useRouter } from "@u3u/vue-hooks";
import ShowVideo from "../components/ShowVideo";

export default {
  name: "Episode",
  components: {
    ShowVideo
  },
  setup() {
    const { route } = useRouter();
    const data = ref(route.value.params.items);
    const id = ref(route.value.params.id);
    const title = ref(route.value.params.title);

    const torrent_selected = ref(null);

    return {
      id,
      data,
      title,
      torrent_selected
    };
  }
};
</script>
