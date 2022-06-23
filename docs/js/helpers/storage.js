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

const getListById = (id) => {
  const lists = getData('lists').lists

  const list = lists.find((list) => list.id === id)

  return list
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

const deleteList = (ref, idList) => {
  const oldData = getData(ref)
  if (oldData.lists) {
    console.log(oldData.lists)
    oldData.lists = oldData.lists.filter((list) => list.id !== idList)
    console.log(oldData.lists)

    localStorage.setItem(ref, JSON.stringify(oldData))
  }
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

const addSongToReproduce = (ref, songsData, idList, idSong) => {
  const oldData = getData(ref)
  if (!oldData.songs) {
    oldData.songs = []
    oldData.songs = songsData
  }
  !oldData.idList && (oldData.idList = idList)

  if (oldData.idList !== idList) {
    oldData.idList = idList
    oldData.songs = songsData
    console.log('cambio de lista')
  }
  oldData.idsong = idSong

  //const isSong = oldData.songs.some((song) => song.id === songData.id)
  // if (!isSong) {
  // }
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

export {
  setData,
  getData,
  deleteList,
  addDataList,
  addDataVolumen,
  addSongToList,
  getListById,
  addSongToReproduce,
}
