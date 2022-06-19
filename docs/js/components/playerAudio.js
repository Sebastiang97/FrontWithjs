import { setData, getData, addDataVolumen } from '../helpers/storage.js'

const playerAudio = () => {
  setData('audioPreference')
  let audioDuration
  const audio = document.querySelector('#audio')
  const play = document.querySelector('#playAudio')
  const backwardSeconds = document.querySelector('#backwardSecondsAudio')
  const forwardSeconds = document.querySelector('#forwardSecondsAudio')
  const control = document.querySelector('#controlAudio')
  const controlVolume = document.querySelector('#controlAudioVolume')

  audioDuration = audio.duration
  console.log(controlVolume.value)
  controlVolume.value = getData('audioPreference').volumen
  audio.volume = controlVolume.value / 100

  audio.addEventListener('loadeddata', () => {
    audioDuration = audio.duration
    console.log(controlVolume.value)
    controlVolume.value = getData('audioPreference').volumen
    audio.volume = controlVolume.value / 100
  })

  audio.addEventListener('timeupdate', (event) => {
    const percentage = (event.target.currentTime / audioDuration) * 100
    control.value = percentage
  })

  play.onclick = () => {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  }

  backwardSeconds.onclick = () => {
    audio.currentTime = audio.currentTime - 10
  }
  forwardSeconds.onclick = () => {
    audio.currentTime = audio.currentTime + 10
  }

  control.oninput = (event) => {
    audio.currentTime = (audioDuration / 100) * event.target.value
  }

  controlVolume.oninput = (event) => {
    const volumen = event.target.value
    audio.volume = volumen / 100
    addDataVolumen('audioPreference', volumen)
  }
}

export default playerAudio
