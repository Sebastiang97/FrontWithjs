const getParams = (getSearch) => {
  const search = window.location.search
  let urlParams = new URLSearchParams(search)
  return urlParams.get(getSearch)
}

export default getParams
