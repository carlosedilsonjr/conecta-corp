export function isAdult(dateBirth: string) {
  const today = new Date()
  const dateBirthObj = new Date(dateBirth)

  let age = today.getFullYear() - dateBirthObj.getFullYear()
  const monthDiff = today.getMonth() - dateBirthObj.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateBirthObj.getDate())) {
    age--
  }

  return age >= 18
}
