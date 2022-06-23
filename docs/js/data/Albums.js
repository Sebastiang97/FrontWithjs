const albums = [
  {
    id: 1,
    album: 'All My life',
    artist: 'Foo Fighters',
    urlAlbum: './assets/test/logo.jpg',
    songs: [
      {
        id: 1,
        name: 'All My Life',
        src: './assets/test/Foo_Fighters_All_My_Life.mp3',
        urlImage: './assets/test/logo.jpg',
        artist: 'Foo Fighters',
        album: 'All My Life',
        year: '1997',
      },
      {
        id: 2,
        name: 'My Hero',
        src: './assets/test/Foo_Fighters_My_Hero.mp3',
        urlImage: './assets/test/logo1.png',
        artist: 'Foo Fighters',
        album: 'The Colour and the Shape',
        year: '1997',
      },
      {
        id: 3,
        name: 'Best of You',
        src: './assets/test/Foo_Fighters_Best_Of_You.mp3',
        urlImage: './assets/test/logo2.jpg',
        artist: 'Foo Fighters',
        album: 'The Colour and the Shape',
        year: '1997',
      },
      {
        id: 4,
        name: 'Everlong',
        src: './assets/test/Foo_Fighters_Everlong.mp3',
        urlImage: './assets/test/logo3.jpg',
        artist: 'Foo Fighters',
        album: 'The Colour and the Shape',
        year: '1997',
      },
    ],
  },
]
const getAlbumsById = (id) => {
  return albums.find((album) => album.id === id)
}

const albumsInitials = [
  {
    id: 1,
    album: "Can't go back",
    single: 'Single 2018',
    artist: 'Fabian Lozano',
    urlAlbum: "./assets/albums/Can't go back_Single 2018.jpg",
  },
  {
    id: 2,
    album: 'Darkside Madness',
    single: 'Single 2018',
    artist: 'Fabian Lozano',
    urlAlbum: './assets/albums/Darkside Madness_Single 2018.jpg',
  },
  {
    id: 3,
    album: 'Ningyo',
    single: 'Single 2018',
    artist: 'Fabian Lozano',
    urlAlbum: './assets/albums/Ningyo_Single 2018.jpg',
  },
]

export { albums, getAlbumsById, albumsInitials }
