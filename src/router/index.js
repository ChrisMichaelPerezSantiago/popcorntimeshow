import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Movies from '../views/Movies.vue';
import MovieSection from '../views/MovieSection.vue';
import ShowSection from '../views/ShowSection.vue';
import Episode from '../views/Episode.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/ShowSection/:id',
    name: 'ShowSection',
    component: ShowSection
  },
  {
    path: '/MovieSection/:id',
    name: 'MovieSection',
    component: MovieSection
  },
  {
    path: '/Episode/:items',
    name: 'Episode',
    component: Episode
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
