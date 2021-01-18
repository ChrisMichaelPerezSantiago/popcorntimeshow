<template>
  <div class="flw-item">
    <router-link :to="{name: 'MovieSection', params:{id: data.ID}}">
      <div class="film-poster">
        <div class="pick film-poster-quality">HD</div>
        <img
          :src="data.poster_med"
          class="film-poster-img lazyload"
          :title="data.title"
          :alt="data.title"
        />
        <div class="film-poster-ahref flw-item-tip" :title="data.title">
          <i class="fa fa-play"></i>
        </div>
      </div>
      <div class="film-detail film-detail-fix">
        <h3 class="film-name">
          <div :title="data.title">{{ data.title }}</div>
        </h3>
        <div class="fd-infor">
          <span class="fdi-item">{{ data.year }}</span>
          <span class="float-right fdi-type"> movie </span>
        </div>
      </div>
      <div class="clearfix"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    movie: Object
  },
  setup(props) {
    const data = props.movie;
    return {
      data
    };
  }
};
</script>
