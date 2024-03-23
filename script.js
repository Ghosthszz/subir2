document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const files = document.querySelector('input[type="file"]').files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/upload');

    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
          // Redirecionar para a página 'sucesso.html' após o envio bem-sucedido
          window.location.href = 'sucesso.html';
        } else {
          console.error('Erro ao enviar arquivo(s):', xhr.responseText);
        }
      } else {
        console.error('Erro ao enviar arquivo(s):', xhr.responseText);
      }
    };

    xhr.send(formData);
  });
});
