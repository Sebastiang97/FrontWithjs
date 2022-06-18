import Storage from './modules/storage.js'
import Render from './modules/render.js'

const storage = new Storage()
const render = new Render()

storage.setData('lists')

const formCreateList = document.querySelector('#formCreateList')
const resOffCanvas = document.querySelector('#resOffCanvas')
const alert = document.querySelector('#alert')

resOffCanvas.innerHTML = render.renderAll()

formCreateList.addEventListener('submit', (e) => {
  e.preventDefault()
  const list = {
    name: formCreateList.name.value,
    owner: 'DMV and SSG',
  }
  storage.addData('lists', list)
  formCreateList.reset()

  resOffCanvas.innerHTML = render.renderAll()
  alert.classList.toggle('d-none')
  setTimeout(() => {
    alert.classList.toggle('d-none')
  }, 3000)
})
