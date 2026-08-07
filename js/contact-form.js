document.getElementById("contact-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      showNotification("Message sent successfully!", "success");
      form.reset();
    } else {
      showNotification("Failed to send message.", "error");
    }
  } catch (err) {
    showNotification("Failed to send message.", "error");
  }
});

function showNotification(message, status) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";
  notification.classList.remove("success", "error");
  notification.classList.add(status);
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}
