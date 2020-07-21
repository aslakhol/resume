export const dateCompare = (a, b) => {
  if (!a.end_date) {
    if (!b.end_date) {
      return 0
    }
    return -1
  } else if (!b.end_date) {
    return 1
  } else {
    return b.sort_date.localeCompare(a.sort_date)
  }
}
