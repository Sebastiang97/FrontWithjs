const elList = document.querySelector('#deleteList')
console.log(elList)
for (let i = 0; i < elList.length; i++) {
  elList[i].addEventListener('click', () => {
    const id = elList[i].dataset.id
    deleteList('lists', id)
    location.reload()
  })
}
