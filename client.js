window.TrelloPowerUp.initialize({
  'board-buttons': function (t) {
    return [{
      text: 'Nowe zlecenie',
      callback: function (t) {
        return t.popup({
          title: 'Dodaj zlecenie',
          url: 'index.html',
          height: 150
        });
      }
    }];
  },
  'card-buttons': function (t) {
    return [{
      text: 'Weź zlecenie',
      callback: function (t) {
        return t.member('id').then(function (member) {
          return t.get('card', 'shared', 'claimedBy').then(function (claimedBy) {
            if (claimedBy === member.id) {
              alert('Już masz to zlecenie.');
            } else if (claimedBy) {
              alert('To zlecenie jest już zajęte.');
            } else {
              return t.set('card', 'shared', 'claimedBy', member.id).then(function () {
                alert('Zlecenie przypisane!');
              });
            }
          });
        });
      }
    }];
  }
});
