class Generate {
  generateDate() {
    const today = new Date()
    const date =
      today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
    return date
  }

  generateId() {
    return Date.now()
  }
}

export default Generate
