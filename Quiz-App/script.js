
const studentForm = document.getElementById("studentForm");

studentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("Form Submitted");

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(course);
});

