<template>
  <div id="wrapper">
    <div id="header">
      <div class="container">
        <!-- <div><i class="fa fa-bars"></i></div> -->
        <router-link :to="{ name: 'Home' }" id="logo" title="PopcornTime Show">
          <span>PopcornTime Show</span>
        </router-link>

        <div id="header_menu">
          <ul class="nav header_menu-list">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }" title="TV shows"
                ><i class="fa fa-play-circle mr-2"></i> TV shows</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Movies' }" title="Movies"
                ><i class="fa fa-list mr-2"></i> Movies</router-link
              >
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>
