const songs = [
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
]

const getSongById = (id) => {
  return songs.find((song) => song.id === id)
}
export { songs, getSongById }
