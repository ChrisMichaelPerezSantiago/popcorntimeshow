<template>
  <!--Begin: Main-->
  <div id="main-wrapper">
    <!--Begin: Detail-->
    <div class="detail_page detail_page-style">
      <div
        class="cover_follow"
        :style="{ 'background-image': 'url(' + data[0][0].poster_big + ')' }"
      ></div>
      <div class="container">
        <div class="prebreadcrumb">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Movies' }">Movies</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ data[0][0].title }}
              </li>
            </ol>
          </nav>
        </div>
        <!--Begin: Watch-->
        <div class="detail_page-watch">
          <div class="dp-w-cover">
            <!-- <div class="dp-w-c-play goto-seasons">
              <i class="fa fa-play"></i>
            </div> -->
          </div>
          <div class="detail_page-infor">
            <div class="dp-i-content">
              <div class="dp-i-c-poster">
                <div class="film-poster mb-2">
                  <img
                    class="film-poster-img"
                    :src="data[0][0].poster_big"
                    :title="data[0][0].title"
                    :alt="data[0][0].title"
                  />
                </div>
                <div class="block-rating" id="block-rating"></div>
              </div>
              <div class="dp-i-c-right">
                <h2 class="heading-name">
                  <div>{{ data[0][0].title }}</div>
                </h2>
                <div class="dp-i-stats">
                  <span class="item mr-1">
                    <button
                      @click.prevent="() => (show = !show)"
                      title="Trailer"
                      class="btn btn-sm btn-trailer"
                    >
                      <i class="fas fa-video mr-2"></i>Trailer
                    </button>
                  </span>
                  <span class="item mr-1"
                    ><button class="btn btn-sm btn-quality">
                      <strong>HD</strong>
                    </button></span
                  >
                  <span class="item mr-2"
                    ><button class="btn btn-sm btn-radius btn-warning btn-imdb">
                      {{ data[0][0].rating }}
                    </button></span
                  >
                </div>
                <div class="description">
                  {{ data[0][0].description }}
                </div>
                <div class="elements">
                  <div class="row">
                    <div class="col-xl-5 col-lg-6 col-md-8 col-sm-12">
                      <div class="row-line">
                        <span class="type"><strong>Released: </strong></span>
                        {{ data[0][0].year }}
                      </div>
                      <div class="row-line">
                        <span class="type"><strong>Genre: </strong></span>
                        {{ data[0][0].genres && data[0][0].genres.toString() }}
                      </div>
                      <div class="row-line">
                        <span class="type"><strong>Actors: </strong></span>
                        {{
                          (data[0][0].actors && data[0][0].actors.toString()) ||
                          "n/a"
                        }}
                      </div>
                      <div class="row-line">
                        <span class="type"><strong>Directors: </strong></span>
                        {{
                          (data[0][0].directors &&
                            data[0][0].directors.toString()) ||
                          "n/a"
                        }}
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-4 col-sm-12">
                      <div class="row-line">
                        <span class="type"><strong>Runtime: </strong></span>
                        {{ data[0][0].runtime }}
                      </div>
                      <div class="row-line">
                        <span class="type"><strong>Writers: </strong></span>
                        {{
                          (data[0][0].writers &&
                            data[0][0].writers.toString()) ||
                          "n/a"
                        }}
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>

          <!--Trailer-->
          <div v-if="show">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="iframe16x9">
                    <iframe
                      width="560"
                      height="315"
                      id="iframe-trailer"
                      :src="data[0][0].trailer_url"
                      frameborder="0"
                      allow="autoplay;"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <button
                    @click.prevent="() => close()"
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--End: Trailer-->

          <div
            class="alert mb-3"
            style="
              background: #ffaa00;
              color: #111;
              font-size: 16px;
              font-weight: 600;
            "
          >
            If you get any error message when trying to stream, please Refresh
            the page or switch to another torrent.
          </div>

          <div class="watching_player-control">
            <div id="pc-fav" class="btn btn-sm btn-radius btn-secondary mr-2">
              <i class="fa fa-magnet mr-2"></i>Select Torrent
            </div>
            <select v-model="torrent_selected">
              <option
                v-for="(options, index) in data[0][0].torrents.items"
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
        </div>
        <!--End: Watch-->
      </div>
    </div>
    <!--End: Related-->
  </div>
  <!--End: Main-->
</template>


<script>
import { nSQL } from "@nano-sql/core";
import { useRouter } from "@u3u/vue-hooks";
import { ref } from "@vue/composition-api";
import ShowVideo from "../components/ShowVideo";

export default {
  name: "MovieSection",
  components: {
    ShowVideo
  },
  setup() {
    const { route } = useRouter();
    const data = ref([]);
    const id = ref(route.value.params.id);

    nSQL().useDatabase("popcorntimedb");
    nSQL("movies");
    nSQL()
      .query("select")
      .where(["ID", "=", id.value])
      .exec()
      .then(rows => {
        data.value.push(rows);
      });

    const show = ref(false);
    const torrent_selected = ref(null);

    const close = () => (show.value = false);

    return {
      data,
      torrent_selected,
      show,
      close,
      id
    };
  }
};
</script>