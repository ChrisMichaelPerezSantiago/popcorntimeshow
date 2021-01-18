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
                <router-link :to="{ name: 'Home' }">Home</router-link>
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
                      <div class="row-line">
                        <span class="type"><strong>Season: </strong></span>

                        <select id="episode_select" v-model="season_selected">
                          <option
                            v-for="(options, index) in data[0][0].torrents"
                            :value="options.season"
                            :key="index"
                          >
                            {{ options.season }}
                          </option>
                        </select>
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

          <div id="trending-movies" class="tab-pane active">
            <div
              class="block_area-content block_area-list film_list film_list-grid"
            >
              <div
                class="film_list-wrap"
                v-for="(_data, index) in data[0][0].torrents.filter(
                  props => props.season === season_selected
                )[0].data"
                :key="index"
              >
                <div class="flw-item">
                  <div class="film-detail film-detail-fix">
                    <router-link
                      :to="{
                        name: 'Episode',
                        params: {
                          items: _data.items,
                          id: id,
                          title: data[0][0].title
                        }
                      }"
                    >
                      <h3 class="film-name">
                        <div :title="_data.synopsis">{{ _data.title }}</div>
                      </h3>
                    </router-link>

                    <p>
                      {{
                        _data.synopsis && _data.synopsis.substring(0, 100)
                      }}
                      ...
                    </p>
                    <div class="fd-infor">
                      <span class="fdi-item">{{ _data.year }}</span>
                      <span class="fdi-type">{{ _data.runtime }}m</span>
                      <span class="fdi-type"> E{{ _data.episode }} </span>
                      <span class="fdi-type"> S{{ _data.season }} </span>
                      <span class="fdi-type">
                        {{ _data.air_time }}
                      </span>
                    </div>
                  </div>

                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
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

  export default {
    name: "ShowSection",
    setup() {
      const { route } = useRouter();
      const data = ref([]);
      const id = ref(route.value.params.id);

      nSQL().useDatabase("popcorntimedb");
      nSQL("shows");
      nSQL()
        .query("select")
        .where(["ID", "=", id.value])
        .exec()
        .then(rows => {
          data.value.push(rows);
        });

      const season_selected = ref(1);

      const show = ref(false);
      const close = () => (show.value = false);

      return {
        data,
        season_selected,
        show,
        close,
        id
      };
    }
  };
</script>