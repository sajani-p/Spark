export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getTodaysDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2,"0");
  let mm = String(today.getMonth()).padStart(2,"0");
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today;
}
