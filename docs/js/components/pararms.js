import { renderOneList, renderAll } from '../helpers/render.js'
import { setData, getData, addSongToReproduce } from '../helpers/storage.js'

const listAndSongs = () => {
  setData('reproduce')
  const search = window.location.search
  let urlParams = new URLSearchParams(search)
  const idList = urlParams.get('list')

  const resList = document.querySelector('#resList')
  const resSong = document.querySelector('#resSong')

  resSong.innerHTML = renderOneList(parseInt(idList))
  resList.innerHTML = renderAll()

  const songsToReproduce = document.querySelectorAll('#songsToReproduce')

  for (let i = 0; i < songsToReproduce.length; i++) {
    songsToReproduce[i].addEventListener('click', () => {
      const idSong = parseInt(songsToReproduce[i].dataset.id)
      const idList = parseInt(songsToReproduce[i].dataset.idList)
      const lists = getData('lists').lists
      const songListFiltered = lists.find((list) => list.id === idList).songs
      addSongToReproduce('reproduce', songListFiltered, idList, idSong)
    })
  }
}
listAndSongs()
