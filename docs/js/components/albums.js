import { albumsInitials } from '../data/Albums.js'

const ListAlbums = () => {
  const resAlbumsInitials = document.querySelector('#resAlbumsInitials')
  const albums = albumsInitials
  let res = ''
  albums.map(({ album, single, artist, urlAlbum }) => {
    res += `
      <div class="card" style="width: 18rem;">
        <div class="card-header text-center border border-dark bg-dark text-white">
            ${artist}
        </div>
        <img
          src="${urlAlbum}"
          class="card-img-top"
          style="height: 287px;"
          alt="${album}"
        />
        <div class="card-body">
          <h5 class="card-title">${album}</h5>
          <p class="card-text">${single}</p>
          <a href="./album.html?album=1" class="btn btn-outline-success">Listen</a>
        </div>
      </div>
    `
  })
  resAlbumsInitials.innerHTML += res
}

ListAlbums()
