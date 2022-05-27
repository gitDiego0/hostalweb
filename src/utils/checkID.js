export const checkDNI = (dni) => {
  return (
    /^(\d{8})([A-HJ-NP-TV-Z])$/.test(dni) &&
    'TRWAGMYFPDXBNJZSQVHLCKE'[RegExp.$1 % 23] == RegExp.$2
  )
}
