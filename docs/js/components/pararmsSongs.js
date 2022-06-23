import getParams from '../helpers/params.js'
import { renderOneList, renderAll } from '../helpers/renderList.js'
import {
  setData,
  getData,
  addSongToReproduce,
  deleteList,
} from '../helpers/storage.js'

const listAndSongs = () => {
  setData('reproduce')
  const idList = getParams('list')
  const resList = document.querySelector('#resList')
  const resSong = document.querySelector('#resSong')
  const formCreateList = document.querySelector('#formCreateList')
  const alert = document.querySelector('#alert')

  resSong.innerHTML = renderOneList(parseInt(idList))
  resList.innerHTML = renderAll()

  const elList = document.querySelectorAll('#deleteList')
  for (let i = 0; i < elList.length; i++) {
    elList[i].addEventListener('click', () => {
      const id = elList[i].dataset.id
      console.log('hello' + id)
      deleteList('lists', parseInt(id))
      alert.classList.toggle('d-none')
      alert.innerHTML = 'Lista Borrada'
      setTimeout(() => {
        alert.classList.toggle('d-none')
        location.reload()
      }, 3000)
    })
  }

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

  formCreateList.addEventListener('submit', (e) => {
    window.location.reload()
  })
}
listAndSongs()
