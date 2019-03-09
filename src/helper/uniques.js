module.exports = (data, separator) => {
  const regex = new RegExp(`"*?\\${separator}.*?":`, 'g')
  const uniques = JSON.stringify(data, null, 2)
    .match(regex)
    .map(item => item.split('":')[0].split(separator)[1])

  return Array.from(new Set(uniques))
}
