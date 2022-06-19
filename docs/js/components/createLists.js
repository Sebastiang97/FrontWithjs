import { setData, addDataList } from '../helpers/storage.js'
import { renderAll } from '../helpers/render.js'
import { addSongs } from './addSong.js'

const createLists = () => {
  const formCreateList = document.querySelector('#formCreateList')
  const resOffCanvas = document.querySelector('#resOffCanvas')
  const resAddSong = document.querySelector('#resAddSong')
  const alert = document.querySelector('#alert')

  setData('lists')

  resOffCanvas.innerHTML = renderAll()
  resAddSong.innerHTML = renderAll()
  addSongs()
  formCreateList.addEventListener('submit', (e) => {
    e.preventDefault()
    const list = {
      name: formCreateList.name.value,
      owner: 'DMV and SSG',
    }
    addDataList('lists', list)
    formCreateList.reset()

    resOffCanvas.innerHTML = renderAll()
    resAddSong.innerHTML = renderAll()
    addSongs()
    alert.classList.toggle('d-none')
    setTimeout(() => {
      alert.classList.toggle('d-none')
    }, 3000)
  })
}

export default createLists
