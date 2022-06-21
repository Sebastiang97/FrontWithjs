import { getData, getListById } from './storage.js'

//refactorizar el nombre y la estructura del template para que sea mas legible con la funcion renderSongs
const renderAll = () => {
  let res = ''
  const lists = getData('lists').lists
  res += `
    <div class="h4 text-white">Mis Listas</div>
  `

  if (lists) {
    lists.map(({ id, name, owner, date }, i) => {
      //const songs = renderSongs(i, id)
      res += `
          <a href="./songs.html?list=${id}" class="list-group-item bg-dark border border-light text-light list-group-item-action my-3" >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Name: ${name}</h5>
              <small>creacion: ${date}</small>
            </div>
            <p class="mb-1">Propietario: ${owner}</p>
          </a>
        `
    })
    return res
  }
}

const renderAddSongsToLists = () => {
  let res = ''
  const lists = getData('lists').lists
  res += `
    <div class="h4 text-white">Mis Listas</div>
  `
  if (lists) {
    lists.map(({ id, name }) => {
      res += `
        <a href="#" class="list-group-item bg-dark border border-light text-light list-group-item-action my-3" data-list="${id}" id="btn-addSong" data-bs-dismiss="modal">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${name}</h5>
          </div>
        </a>
      `
    })
    return res
  }
}

const renderOneList = (idList) => {
  let res = ''
  const { name, owner, songs } = getListById(idList)
  const songsOfList = renderSongs(songs, idList)
  res += `
    <div class="row">
      <div class="col-sm-12 d-flex justify-content-center">
        <div class="h1 text-white">${name}</div>
      </div>
      <div class="col-sm-12 d-flex justify-content-center">
        <div class="h6 text-white">🤍 ${owner} 🤍</div>
      </div>
      <div class="col-sm-12 d-flex justify-content-center">
        <table class="table-dark table-striped" style="width:100%;">
          <thead>
            <tr>
              <th scope="col" class="p-3">#</th>
              <th scope="col" class="p-3">Titulo</th>
              <th scope="col" class="p-3">Álbum</th>
              <th scope="col" class="p-3">year</th>
            </tr>
          </thead>
          <tbody>
            ${songs && songsOfList}
          </tbody>
        </table>
      </div>
    </div>`

  return res
}

const renderSongs = (songs, idList) => {
  let res = ''
  songs &&
    songs.map(({ album, artist, id, name, year }, index) => {
      res += ` 
      <tr id="songsToReproduce" data-id="${id}" data-id-list="${idList}">
        <th class="p-3">${index + 1}</th>
        
        <td class="p-3 d-flex justify-content-start">
          <div class="float-start ">
            <img src="./assets/test/logo.jpg" style="width:50px" alt="">
          </div>
          <div class="float-end mx-3 ">
            <h5 class="m-0">${name}</h5>
            <small class="text-muted">${artist}</small>
          </div>
        </td>
        <td class="p-3">${album}</td>
        <td class="p-3">${year}</td>
      </tr>
    `
    })
  return res
}

export { renderAll, renderOneList, renderAddSongsToLists as renderLists }
