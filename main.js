$(document).ready(function() {
  $('#form-tarefa').submit(function(event) {
    event.preventDefault();
    const tarefa = $('#input-tarefa').val();
    if (tarefa.trim() !== '') {
      const listItem = $('<li>').text(tarefa);
      $('#lista-tarefas').append(listItem);
      $('#input-tarefa').val('');
    }
  });

  $('#lista-tarefas').on('click', 'li', function() {
    $(this).toggleClass('completed');
  });
});