(async () => {
  const el = document.getElementById("live-status");
  if (!el) return;

  try {
    const res = await fetch("https://status.abrooks.dev/status");
    if (!res.ok) return;
    const data = await res.json();
    if (data.message) {
      el.textContent = data.message;
    }
  } catch (err) {
    // Leave the build-time fallback in place.
  }
})();
