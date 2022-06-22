import { renderAlbum } from '../helpers/render.js'
import { setData, getData, addSongToReproduce } from '../helpers/storage.js'
import { getAlbumsById } from '../data/Albums.js'

const listAndSongs = () => {
  setData('reproduce')
  const search = window.location.search
  let urlParams = new URLSearchParams(search)
  const idList = urlParams.get('album')

  const resList = document.querySelector('#resList')
  const resSong = document.querySelector('#resSong')

  resSong.innerHTML = renderAlbum(parseInt(idList))
  //resList.innerHTML = renderAll()

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
