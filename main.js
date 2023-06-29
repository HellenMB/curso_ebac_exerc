document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form-numerico");
    var campoA = document.getElementById("campo-a");
    var campoB = document.getElementById("campo-b");
    var errorMessage = document.querySelector(".error-message");
    var successMessage = document.querySelector(".success-message");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      var valorA = parseFloat(campoA.value);
      var valorB = parseFloat(campoB.value);
  
      if (valorA >= valorB) {
        campoA.classList.add("erro");
        errorMessage.style.display = "block";
        campoA.focus();
        successMessage.style.display = "none";
      } else {
        campoA.classList.remove("erro");
        errorMessage.style.display = "none";
        successMessage.innerHTML = "Formulário válido!"; // Mensagem positiva exibida
        successMessage.style.display = "block";
        // Aqui você pode adicionar a lógica para realizar outras ações após a validação bem-sucedida do formulário
      }
    });
  
    campoA.addEventListener("input", function() {
      campoA.classList.remove("erro");
      errorMessage.style.display = "none";
      successMessage.style.display = "none"; // Oculta a mensagem positiva ao editar o campo A
    });
  });