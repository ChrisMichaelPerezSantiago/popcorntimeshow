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
      let data = props.torrent;

      watch(() =>
        data,
        value =>{
          data = value;
          let d = data;
          loadPlayer(d);  
        }
      )

      onMounted(()=> loadPlayer(data));

      return {
        data
      };
    }
  };
</script>
