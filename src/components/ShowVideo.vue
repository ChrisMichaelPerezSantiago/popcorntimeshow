<template>
  <div>
    <div id='player' style="display: block; background: #000; margin: 0 auto;" class='webtor'></div>    
  </div>
</template>

<script>
  import { onMounted, watch } from '@vue/composition-api';
  import { loadPlayer } from '../utils/index';
  
  export default {
    name: "ShowVideo",
    props: {
      torrent: String
    },
    setup(props) {
      watch(() =>
        props.torrent,
        value => {
          loadPlayer(props.torrent);  
        }
      )

      onMounted(()=> loadPlayer(props.torrent));

      return {
        data: props.torrent
      };
    }
  };
</script>
