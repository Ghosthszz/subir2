document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const files = document.querySelector('input[type="file"]').files;
    const folder = document.querySelector('select[name="folder"]').value;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    const xhr = new XMLHttpRequest();
    const url = '/upload/' + folder;

    xhr.open('POST', url);

    xhr.onload = function() {
      if (xhr.status === 200) {
        // Redirecionar para a página 'su.html' após o envio bem-sucedido
        window.location.href = 'su.html';
      } else {
        console.error('Erro ao enviar arquivo(s):', xhr.responseText);
      }
    };

    xhr.send(formData);
  });
});
