export const makeRoutes = (routes) => {
  routes.forEach(([route, callback]) => {
    if (location.pathname.match(route)) callback()
  })
}

// prettier-ignore
export const cbs = (...cbs) => () => {
  for (const cb of cbs) cb()
}

export const favicon = (icon) => () => {
  document.querySelector('link[rel="shortcut icon"]').href = `/images/icons/${icon}`
}

export const bgImage = (image) => () => {
  document.querySelector('header').style.backgroundImage = `url("/images/${image}")`
}
