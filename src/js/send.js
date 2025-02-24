function sendForm(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  if (email === '' || subject === '' || message === '') {
    showNotification('Error: Please fill in all fields.', 'error');
    return;
  }

  var webhookUrl = 'https://discordapp.com/api/webhooks/1343657787351367741/H38WyXw7cZF5Ed318tGy-3HyA6pHefbbN5H2S_9URMcwIA58GSDFxZ3p1tePZfujXyK6';
  var timestamp = new Date().toISOString();
  var formattedMessage = `\n\n${message}`;

  var payload = {
    content: '',
    tts: false,
    embeds: [
      {
        type: 'rich',
        title: subject,
        description: formattedMessage,
        color: 0x00FFFF,
        footer: {
          text: `From: ${email}`
        },
        timestamp: timestamp
      }
    ]
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (response.ok) {
        showNotification('Notification sent successfully!', 'success');
        clearForm();
      } else {
        showNotification('Failed to send notification.', 'error');
      }
    })
    .catch(error => {
      showNotification('Failed to send notification.', 'error');
    });
}

function showNotification(message, status) {
  var notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';

  notification.classList.remove('success', 'error');

  if (status === 'success') {
    notification.classList.add('success');
  } else if (status === 'error') {
    notification.classList.add('error');
  }

  setTimeout(function() {
    notification.style.display = 'none';
  }, 3000);
}

function clearForm() {
  document.getElementById('email').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('message').value = '';
}
