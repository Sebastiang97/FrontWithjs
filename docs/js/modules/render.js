import Storage from './storage.js'
const storage = new Storage()

class Render {
  renderAll() {
    let res = ''
    const lists = storage.getData('lists').lists

    if (lists) {
      lists.map(({ id, name, owner, date }) => {
        res += `
            <a href="#" class="list-group-item bg-dark border border-light text-light list-group-item-action" >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Name: ${name}</h5>
                  <small>creacion: ${date}</small>
                </div>
                <p class="mb-1">Propietario: ${owner}</p>
                <small>id: para reproduccion: ${id}</small>
            </a>
          `
      })
    }
    return res
  }

  renderOne({ id, title, url }) {
    const emoji = this.validateEmoji(id)
    let res = ''
    res = `
      <div class="card animate__animated animate__fadeIn targets"  >
        <img src="${url}" alt="">
        <h4>${title}</h4> 
        <div class="btn-fav">
          <span class="fav" data-img=${url} data-title=${title}>${emoji}</span>
        </div>
      </div>
    `
    return res
  }

  renderFav() {
    const fav = storage.getData('favs')
    let res = ''
    fav.map(({ img, title, id, date }) => {
      const emoji = this.validateEmoji(id)
      res += `
        <div class="card animate__animated animate__fadeIn targets" id="${id}" >
          <img src="${img}" id="${id}" alt="">
          <div class="cont" id="${id}">
            <span class="date">${date}</span>
            <h4 id="${id}">${title}</h4>
          </div>
          <div class="btn-fav" id="${id}">
            <span class="fav" data-img=${img} data-title=${title} data-id=${id}>${emoji}</span>
          </div>
        </div>
      `
    })
    return res
  }

  notifications(msg) {
    return `
      <div class="msg">
        ${msg}
      </div>
    `
  }

  render404() {
    return `
      <div class="notfound">
        nothing
      </div>
    `
  }

  validateEmoji(id) {
    const isFav = storage.validate(id)
    const emoji = isFav ? '❌' : '💗'
    return emoji
  }
}

export default Render
