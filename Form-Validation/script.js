const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const termsInput = document.getElementById("terms");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Clear previous messages
  document.querySelectorAll("small").forEach(function (small) {
    small.textContent = "";
  });

  document.querySelectorAll("input").forEach(function (input) {
    input.classList.remove("error", "success");
  });

  successMessage.textContent = "";

  // =====================
  // NAME
  // =====================

  const name = nameInput.value.trim();

  if (name === "") {
    document.getElementById("nameError").textContent =
      "Name is required";

    nameInput.classList.add("error");
    isValid = false;
  } else if (name.length < 3) {
    document.getElementById("nameError").textContent =
      "Name must be at least 3 characters";

    nameInput.classList.add("error");
    isValid = false;
  } else {
    nameInput.classList.add("success");
  }


  // =====================
  // EMAIL
  // =====================

  const email = emailInput.value.trim();

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    document.getElementById("emailError").textContent =
      "Email is required";

    emailInput.classList.add("error");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Enter a valid email";

    emailInput.classList.add("error");
    isValid = false;
  } else {
    emailInput.classList.add("success");
  }


  // =====================
  // PHONE
  // =====================

  const phone = phoneInput.value.trim();

  const phonePattern = /^[0-9]{10}$/;

  if (phone === "") {
    document.getElementById("phoneError").textContent =
      "Phone number is required";

    phoneInput.classList.add("error");
    isValid = false;
  } else if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Enter a valid 10 digit phone number";

    phoneInput.classList.add("error");
    isValid = false;
  } else {
    phoneInput.classList.add("success");
  }


  // =====================
  // PASSWORD
  // =====================

  const password = passwordInput.value;

  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password is required";

    passwordInput.classList.add("error");
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";

    passwordInput.classList.add("error");
    isValid = false;
  } else {
    passwordInput.classList.add("success");
  }


  // =====================
  // CONFIRM PASSWORD
  // =====================

  const confirmPassword = confirmPasswordInput.value;

  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").textContent =
      "Please confirm your password";

    confirmPasswordInput.classList.add("error");
    isValid = false;
  } else if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";

    confirmPasswordInput.classList.add("error");
    isValid = false;
  } else {
    confirmPasswordInput.classList.add("success");
  }


  // =====================
  // TERMS
  // =====================

  if (!termsInput.checked) {
    document.getElementById("termsError").textContent =
      "You must accept the Terms & Conditions";

    isValid = false;
  }


  // =====================
  // SUCCESS
  // =====================

  if (isValid) {
    successMessage.textContent =
      "🎉 Account created successfully!";

    successMessage.style.color = "green";

    // Form reset nahi kar rahe abhi,
    // taaki success message clearly dikhe.
  }
});