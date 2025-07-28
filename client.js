window.TrelloPowerUp.initialize({
  'board-buttons': function (t) {
    return [{
      text: 'Nowe zlecenie',
      callback: function (t) {
        return t.popup({
          title: 'Dodaj zlecenie',
          url: 'index.html',
          height: 300
        });
      }
    }];
  }
});
