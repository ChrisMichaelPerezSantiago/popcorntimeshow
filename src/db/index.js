const nSQL = require('@nano-sql/core').nSQL;

nSQL().createDatabase({
  id: 'popcorntimedb',
  mode: 'PERM',
  tables: [
    {
      name: 'shows',
      model:{
        'ID:uuid': {pk: true},
        'actors:string': {},
        'description:string': {},
        'directors:string': {},
        'genres:string[]:': {default: []},
        'items:string': {default: []},
        'items_lang:string': {default: []},
        'popularity:string': {},
        'poster_big:string': {},
        'poster_med:string': {},
        'rating:number': {},
        'runtime:number': {},
        'title:string': {},
        'trailer_url:string': {},
        'writers:string': {},
        'year:int': {},
        'torrents:array': {}   
      }
    },
    {
      name: 'movies',
      model:{
        'ID:uuid': {pk: true},
        'actors:string': {},
        'description:string': {},
        'directors:string': {},
        'genres:string[]:': {default: []},
        'items:string[]': {default: []},
        'items_lang:string': {default: []},
        'popularity:string': {},
        'poster_big:string': {},
        'poster_med:string': {},
        'rating:number': {},
        'runtime:number': {},
        'title:string': {},
        'trailer_url:string': {},
        'writers:string': {},
        'year:int': {},
        'torrents:*': {}
      }
    }
  ],
  version: 1,
  onVersionUpdate: (prevVersion) =>{
    return new Promise((resolve) =>{
      switch(prevVersion){
        case 1:
          resolve(2);
          break;
        case 2:
          resolve(3);
        break;
      }
    });
  }
});