const studentForm = document.getElementById("studentForm");
const quizSection = document.getElementById("quizSection");
studentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Course:", course);
  //studentForm.parentElement.style.display = "none";
  quizSection.style.display = "block";
});
