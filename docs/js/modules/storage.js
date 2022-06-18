import Generate from './generate.js'
const generate = new Generate()
class Storage {
  setData(ref) {
    if (!this.getData(ref)) {
      localStorage.setItem(ref, JSON.stringify({}))
    }
    console.log(ref + ' exist')
  }

  getData(ref) {
    let data = localStorage.getItem(ref)

    return JSON.parse(data)
  }

  addData(ref, data) {
    data.id = Date.now()
    data.date = generate.generateDate()
    const oldData = this.getData(ref)
    if (!oldData.lists) {
      oldData.lists = []
    }
    oldData.lists.push(data)
    localStorage.setItem(ref, JSON.stringify(oldData))
  }
}

export default Storage
