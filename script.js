function getFormvalue() {
  // Get form values
  let fname = document.getElementsByName('fname')[0].value;
  let lname = document.getElementsByName('lname')[0].value;
  
  // Display alert with form values
  window.alert(`${fname} ${lname}`);
}