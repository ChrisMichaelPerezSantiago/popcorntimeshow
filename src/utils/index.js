export let loadPlayer = async (torrent_magnet) => {
  window.webtor = window.webtor || [];
  window.webtor.push({
    id: 'player',
    magnet: torrent_magnet,
    width: '100%',
    on: function (e) {
      if (e.name == window.webtor.TORRENT_FETCHED) {
        console.log('Torrent fetched!', e.data);
      }
      if (e.name == window.webtor.TORRENT_ERROR) {
        console.log('Torrent error!');
      }
    },
    i18n: {
      en: {
        common: {
          "prepare to play": "Preparing Video Stream... Please Wait...",
        },
        stat: {
          "seeding": "Seeding",
          "waiting": "Client initialization",
          "waiting for peers": "Waiting for peers",
          "from": "from",
        },
      },
    },
  });
};


export const sortBy = [
  'seeds',
  'dateadded',
  'year',
  'title'
];

export const genres = [
  'all',
  'action',
  'adventure',
  'animation',
  'biography',
  'comedy',
  'crime',
  'documentary',
  'drama',
  'family',
  'fantasy',
  'film-noir',
  'history',
  'horror',
  'music',
  'musical',
  'mystery',
  'romance',
  'sci-fi',
  'short',
  'sport',
  'thriller',
  'war',
  'western'
];

