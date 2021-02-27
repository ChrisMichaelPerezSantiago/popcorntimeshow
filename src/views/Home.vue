<template>
  <div>
    <div class="tab-content">
      <div class="container">
        <section class="block_area block_area_home section-id-01">
          <div class="block_area-header block_area-header-tabs">
            <div class="float-left bah-heading mr-4">
              <h2 class="cat-heading">TV shows</h2>
            </div>
            <div class="float-left bah-tabs">
              <ul class="nav nav-tabs pre-tabs">
                <li class="nav-item">
                  <span class="type"><strong>Sort By: </strong></span>
                  <select v-model="sortBy_selected" class="queries_home_select">
                    <option
                      v-for="(options, index) in sortBy"
                      :value="options"
                      :key="index"
                    >
                      {{ options }}
                    </option>
                  </select>
                </li>
                <li class="nav-item">
                  <span class="type"><strong>Genres: </strong></span>
                  <select v-model="genres_selected" class="queries_home_select">
                    <option
                      v-for="(options, index) in genres"
                      :value="options"
                      :key="index"
                    >
                      {{ options }}
                    </option>
                  </select>
                </li>
                <li class="nav-item">
                  <form class="searchForm" v-on:submit.prevent="qf(query)">
                    <input
                      v-model="query"
                      placeholder="search tvshows ..."
                      @keyup="qf(query)"
                    />
                    <span
                      v-show="query"
                      class="removeInput"
                      @click="removeQuery"
                    ></span>
                  </form>
                </li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>

          <div v-if="shows.isLoading">
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div v-else id="trending-movies" class="tab-pane active">
            <div
              class="block_area-content block_area-list film_list film_list-grid"
            >
              <div
                class="film_list-wrap"
                v-for="(data, index) in shows.data"
                :key="index"
              >
                <Show :show="data" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="flw-item">
      <div class="clearfix"></div>
      <div>
        <div class="container">
          <bPagination
            :total-rows="1000"
            :per-page="1"
            v-model="page"
            @input.prevent="() => nextShows(page)"
          ></bPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs, watch } from "@vue/composition-api";
import { useStore, useState } from "@u3u/vue-hooks";
import { sortBy, genres } from "../utils/index";
import Show from "../components/Show";

export default {
  name: "Home",
  components: {
    Show
  },
  setup() {
    const store = useStore();
    const state = reactive({
      ...useState(["shows"])
    });

    const page = ref(1);
    const sortBy_selected = ref(sortBy && sortBy[0]);
    const genres_selected = ref(genres && genres[0]);
    const query = ref("");

    const removeQuery = () => {
      query.value = '';
    }

    watch(
      () => page.value,
      value => {
        page.value = value;
        nextShows(page.value);
      }
    );

    watch(
      () => sortBy_selected.value,
      value => {
        sortBy_selected.value = value;
        const options = {
          page: page.value,
          sortby: sortBy_selected.value,
          genre: genres_selected.value,
          q: ""
        };
        store.value.dispatch("GET_SHOWS_DATA", options);
      }
    );

    watch(
      () => genres_selected.value,
      value => {
        genres_selected.value = value;
        const options = {
          page: page.value,
          sortby: sortBy_selected.value,
          genre: genres_selected.value,
          q: ""
        };
        store.value.dispatch("GET_SHOWS_DATA", options);
      }
    );

    watch(
      () => query.value,
      value => {
        query.value = value;
        let q = query.value && query.value.trim();
        qf(q);
      }
    );

    const nextShows = _page => {
      const options = {
        page: _page,
        sortby: sortBy_selected.value,
        genre: genres_selected.value,
        q: ""
      };
      store.value.dispatch("GET_SHOWS_DATA", options);
    };

    const qf = query => {
      const options = {
        page: page.value,
        sortby: sortBy_selected.value,
        genre: genres_selected.value,
        q: query || ''
      };
      store.value.dispatch("GET_SHOWS_DATA", options);
    };

    onMounted(() => {
      const options = {
        page: page.value,
        sortby: sortBy_selected.value,
        genre: genres_selected.value,
        q: ""
      };
      store.value.dispatch("GET_SHOWS_DATA", options);
    });

    return {
      ...toRefs(state),
      nextShows,
      page,
      sortBy_selected,
      sortBy,
      genres,
      genres_selected,
      query,
      qf,
      removeQuery
    };
  }
};
</script>