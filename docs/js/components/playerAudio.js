import { setData, getData, addDataVolumen } from '../helpers/storage.js'

const audio = document.querySelector('#audio')
const play = document.querySelector('#playAudio')
const backwardSeconds = document.querySelector('#backwardSecondsAudio')
const forwardSeconds = document.querySelector('#forwardSecondsAudio')
const backwardSong = document.querySelector('#backwardSong')
const forwardSong = document.querySelector('#forwardSong')
const control = document.querySelector('#controlAudio')
const controlVolume = document.querySelector('#controlAudioVolume')
const infoId = document.querySelector('#infoId')
const infoImg = document.querySelector('#infoImg')
const infoTitle = document.querySelector('#infoTitle')
const infoArtist = document.querySelector('#infoArtist')
const songToReproduce = getData('reproduce').songs

const playerAudio = () => {
  setData('reproduce')
  let audioDuration

  //Liena 19 al 33 no sirve con la recarga del live server
  // if (songToReproduce) {
  //   audio.src = songToReproduce[0].src
  //   infoImg.src = songToReproduce[0].urlImage
  //   infoTitle.innerHTML = songToReproduce[0].name
  //   infoArtist.innerHTML = songToReproduce[0].artist
  //   infoId.dataset.id = 0
  // } else {
  //   audio.src = './assets/test/Foo_Fighters_All_My_Life.mp3'
  //   infoImg.innerHTML = './assets/test/logo.jpg'
  //   infoTitle.innerHTML = 'All My Life'
  //   infoArtist.innerHTML = 'Foo Fighters'
  // }
  audioDuration = audio.duration
  controlVolume.value = getData('reproduce').volumen
  audio.volume = controlVolume.value / 100

  //lo ideal seria realizar las cargas iniciales si el audio esta cargado
  audio.addEventListener('loadeddata', () => {
    // if (songToReproduce) {
    //   audio.src = songToReproduce[0].src
    //   infoImg.innerHTML = songToReproduce[0].urlImage
    //   infoTitle.innerHTML = songToReproduce[0].name
    //   infoArtist.innerHTML = songToReproduce[0].artist
    // } else {
    //   audio.src = './assets/test/Foo_Fighters_All_My_Life.mp3'
    //   infoImg.innerHTML = './assets/test/logo.jpg'
    //   infoTitle.innerHTML = 'All My Life'
    //   infoArtist.innerHTML = 'Foo Fighters'
    // }
    audioDuration = audio.duration
    controlVolume.value = getData('reproduce').volumen
    audio.volume = controlVolume.value / 100
  })

  audio.addEventListener('timeupdate', (event) => {
    const percentage = (event.target.currentTime / audioDuration) * 100
    control.value = percentage
  })

  play.onclick = () => {
    audio.paused ? audio.play() : audio.pause()
  }

  backwardSeconds.onclick = () => {
    audio.currentTime = audio.currentTime - 10
  }
  forwardSeconds.onclick = () => {
    audio.currentTime = audio.currentTime + 10
  }

  backwardSong.addEventListener('click', (event) => {
    let id = parseInt(infoId.dataset.id)
    const arrLength = songToReproduce.length - 1
    BackwardBtnSong(id, arrLength)
  })

  forwardSong.addEventListener('click', (event) => {
    let id = parseInt(infoId.dataset.id)
    const arrLength = songToReproduce.length - 1
    fordwardBtnSong(id, arrLength)
  })

  control.oninput = (event) => {
    audio.currentTime = (audioDuration / 100) * event.target.value
  }

  controlVolume.oninput = (event) => {
    const volumen = event.target.value
    audio.volume = volumen / 100
    addDataVolumen('reproduce', volumen)
  }
}

const fordwardBtnSong = (id, arrLength) => {
  if (id === arrLength) {
    audio.src = songToReproduce[0].src
    infoImg.src = songToReproduce[0].urlImage
    infoTitle.innerHTML = songToReproduce[0].name
    infoArtist.innerHTML = songToReproduce[0].artist
    infoId.dataset.id = 0
  } else {
    audio.src = songToReproduce[id + 1].src
    infoImg.src = songToReproduce[id + 1].urlImage
    infoTitle.innerHTML = songToReproduce[id + 1].name
    infoArtist.innerHTML = songToReproduce[id + 1].artist
    infoId.dataset.id = parseInt(infoId.dataset.id) + 1
  }
}

const BackwardBtnSong = (id, arrLength) => {
  if (id > 0) {
    audio.src = songToReproduce[id - 1].src
    infoImg.src = songToReproduce[id - 1].urlImage
    infoTitle.innerHTML = songToReproduce[id - 1].name
    infoArtist.innerHTML = songToReproduce[id - 1].artist
    infoId.dataset.id = parseInt(infoId.dataset.id) - 1
  }
}

export default playerAudio
