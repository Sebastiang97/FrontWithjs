const video = document.getElementById('video')
const audio = document.getElementById('audio')
const play = document.getElementById('play')
const control = document.getElementById('control')
const backwardSeconds = document.getElementById('backwardSeconds')
const forwardSeconds = document.getElementById('forwardSeconds')
const fullScreen = document.getElementById('fullScreen')

let duration

//video.removeAttribute('controls')

video.addEventListener('playing', () => {})

video.addEventListener('pause', () => {})

video.addEventListener('loadeddata', (event) => {
  duration = event.target.duration
})

video.addEventListener('timeupdate', (event) => {
  const percentage = (event.target.currentTime / duration) * 100
  control.value = percentage
})

// on input se activa en cada step del range
control.oninput = (event) => {
  video.currentTime = (duration / 100) * event.target.value
}

backwardSeconds.onclick = () => {
  let less = (video.duration * 0.3) / 100
  video.currentTime = video.currentTime - less
}
forwardSeconds.onclick = () => {
  //   let more = (video.duration * 0.3) / 100
  //   console.log(more)
  video.currentTime = 5
}

fullScreen.onclick = () => {
  video.requestFullscreen()
}

play.onclick = () => {
  video.paused ? video.paused : video.pause()
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
