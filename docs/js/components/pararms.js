import { renderOneList, renderLists } from '../helpers/render.js'
import { setData, addSongToReproduce } from '../helpers/storage.js'
import { getSongById } from '../data/songs.js'

const listAndSongs = () => {
  setData('reproduce')
  const search = window.location.search
  let urlParams = new URLSearchParams(search)
  const idList = urlParams.get('list')

  const resSong = document.querySelector('#resSong')
  const resList = document.querySelector('#resList')

  resSong.innerHTML = renderOneList(parseInt(idList))
  resList.innerHTML = renderLists()

  const songsToReproduce = document.querySelectorAll('#songsToReproduce')

  for (let i = 0; i < songsToReproduce.length; i++) {
    songsToReproduce[i].addEventListener('click', () => {
      const songData = getSongById(parseInt(songsToReproduce[i].dataset.id))
      addSongToReproduce('reproduce', songData)
    })
  }
}
listAndSongs()
