import { setData, addDataList, deleteList } from '../helpers/storage.js'
import { renderAll, renderLists } from '../helpers/renderList.js'

const createLists = () => {
  const formCreateList = document.querySelector('#formCreateList')
  const resOffCanvas = document.querySelector('#resOffCanvas')
  const resAddSong = document.querySelector('#resAddSong')
  const alert = document.querySelector('#alert')

  setData('lists')

  resOffCanvas.innerHTML = renderAll()
  resAddSong.innerHTML = renderLists()

  formCreateList.addEventListener('submit', (e) => {
    console.log('hello')
    e.preventDefault()
    const list = {
      name: formCreateList.name.value,
      owner: 'DMV and SSG',
    }
    addDataList('lists', list)
    formCreateList.reset()

    resOffCanvas.innerHTML = renderAll()
    resAddSong.innerHTML = renderLists()

    const bsOffcanvas = new bootstrap.Offcanvas('#favorites')
    alert.classList.toggle('d-none')
    setTimeout(() => {
      alert.classList.toggle('d-none')
      bsOffcanvas.show()
    }, 3000)
  })
}

export default createLists
