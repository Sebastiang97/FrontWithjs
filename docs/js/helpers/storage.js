import generateDate from './generate.js'

const setData = (ref) => {
  if (!getData(ref)) {
    localStorage.setItem(ref, JSON.stringify({}))
  }
  console.log(ref + ' exist')
}

const getData = (ref) => {
  let data = localStorage.getItem(ref)

  return JSON.parse(data)
}

const addDataList = (ref, data) => {
  data.id = Date.now()
  data.date = generateDate()
  const oldData = getData(ref)
  if (!oldData.lists) {
    oldData.lists = []
  }
  oldData.lists.push(data)
  localStorage.setItem(ref, JSON.stringify(oldData))
}

const addSongToList = (ref, id, songData) => {
  const oldData = getData(ref)
  oldData.lists.map((list) => {
    !list.songs && (list.songs = [])
    const isSong = list.songs.some((song) => song.id === songData.id)

    if (!isSong && list.id === id) {
      list.songs.push(songData)
    }
  })
  localStorage.setItem(ref, JSON.stringify(oldData))
}

const addDataVolumen = (ref, data) => {
  const oldData = getData(ref)
  if (!oldData.volumen) {
    oldData.volumen = {}
  }
  oldData.volumen = data
  localStorage.setItem(ref, JSON.stringify(oldData))
}

export { setData, getData, addDataList, addDataVolumen, addSongToList }
