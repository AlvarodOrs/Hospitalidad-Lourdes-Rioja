export function contactForm() {
  console.log("form.js running");

  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("Form not found");
    return;
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_mc5bq79",
      "template_dvrer4l",
      form
    )
    .then((res) => {
      console.log("SUCCESS:", res);
      alert("Mensaje enviado");
      form.reset();
    })
    .catch((err) => {
      console.error("ERROR:", err);
      alert("Error al enviar");
    });
  });
}