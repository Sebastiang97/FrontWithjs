import { getData } from './storage.js'

const renderAll = () => {
  let res = ''
  const lists = getData('lists').lists

  if (lists) {
    lists.map(({ id, name, owner, date }, i) => {
      const songs = renderSongs(i, id)
      res += `
          <a href="#" class="list-group-item bg-dark border border-light text-light list-group-item-action my-3" id="btn-addSong" data-list="${id}">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Name: ${name}</h5>
              <small>creacion: ${date}</small>
            </div>
            <p class="mb-1">Propietario: ${owner}</p>
            
          </a>
          ${songs}
        `
    })
    return res
  }
}

const renderSongs = (i, listId) => {
  let res = ''
  const songs = getData('lists').lists[i].songs
  if (songs) {
    songs.map(({ album, artist, id, name, src, year }) => {
      res += `
          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#song${
              id + listId
            }" role="button" a>
              Songs
            </a>
          </p>
          <div class="collapse" id="song${id + listId}">
            <a href="#" class="list-group-item bg-dark border border-light text-light list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${name}</h5>
                <h6 class="mb-1">${artist}</h6>
                <small>creacion: ${year}</small>
              </div>
              <p class="mb-1">${album}</p>
              <small class="text-muted">${src}</small>
            </a>
          </div>
        `
    })
    return res
  }
}

export { renderAll, renderSongs }
