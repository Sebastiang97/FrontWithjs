import { renderAlbum } from '../helpers/renderAlbum.js'
import { setData, addSongToReproduce } from '../helpers/storage.js'
import { getAlbumsById } from '../data/Albums.js'
import getParams from '../helpers/params.js'

const listAndSongs = () => {
  setData('reproduce')
  const idList = getParams('album')
  const resSong = document.querySelector('#resSong')

  resSong.innerHTML = renderAlbum(parseInt(idList))

  const songsToReproduce = document.querySelectorAll('#songsToAlbum')

  for (let i = 0; i < songsToReproduce.length; i++) {
    songsToReproduce[i].addEventListener('click', () => {
      const idSong = parseInt(songsToReproduce[i].dataset.id)
      const idList = parseInt(songsToReproduce[i].dataset.idAlbum)
      const { songs } = getAlbumsById(idList)
      addSongToReproduce('reproduce', songs, idList, idSong)
    })
  }
}

listAndSongs()
