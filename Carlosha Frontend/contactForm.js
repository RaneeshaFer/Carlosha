const form = document.getElementById("contactForm");

const fields = ["firstName", "lastName", "email", "phone", "message"];

// Simple validation function
function validateForm(data) {
  const errors = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.lastName.trim()) errors.lastName = "Last name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "Email is invalid";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  if (!data.message.trim()) errors.message = "Message cannot be empty";

  return errors;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Clear previous messages
  fields.forEach(f => document.getElementById(f + "Error").innerText = "");
  document.getElementById("formSuccess").innerText = "";

  const contactData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  // Client-side validation
  const errors = validateForm(contactData);
  if (Object.keys(errors).length > 0) {
    Object.keys(errors).forEach(f => {
      document.getElementById(f + "Error").innerText = errors[f];
    });
    return;
  }

  // Submit form
  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactData),
    });

    const data = await res.json();
    if (data.success) {
      document.getElementById("formSuccess").innerText = "✅ Message sent successfully!";
      form.reset();
    } else {
      document.getElementById("formSuccess").innerText = "❌ Error: " + (data.error || "Unknown");
    }
  } catch (err) {
    console.error(err);
    document.getElementById("formSuccess").innerText = "❌ Server error";
  }
});
