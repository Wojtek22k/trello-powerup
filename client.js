function showNewTaskForm(t) {
  return t.popup({
    title: 'Dodaj zlecenie',
    url: 'index.html',
    height: 300
  });
}

window.TrelloPowerUp.initialize({
  'board-buttons': function (t) {
    return [{
      text: 'Nowe zlecenie',
      callback: showNewTaskForm
    }];
  }
});
