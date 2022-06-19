import { getSongById } from '../data/songs.js'
import { addSongToList } from '../helpers/storage.js'

const targerId = document.querySelector('#addId')

const addId = () => {
  const songs = document.querySelectorAll('.songs')
  for (let i = 0; i < songs.length; i++) {
    songs[i].addEventListener('click', () => {
      targerId.dataset.id = songs[i].dataset.id
      console.log(targerId.dataset.id)
    })
  }
}

const addSongs = () => {
  const addSong = document.querySelectorAll('#btn-addSong')
  for (let i = 0; i < addSong.length; i++) {
    addSong[i].addEventListener('click', (e) => {
      const targetList = addSong[i].dataset.list
      const song = getSongById(parseInt(targerId.dataset.id))
      addSongToList('lists', parseInt(targetList), song)
    })
  }
}

export { addSongs, addId }
