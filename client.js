window.TrelloPowerUp.initialize({
  'board-buttons': function(t) {
    return [{
      text: 'Nowe zlecenie',
      callback: function(t) {
        return t.popup({
          title: 'Dodaj nowe zlecenie',
          url: './index.html',
          height: 150
        });
      }
    }];
  },
  'card-buttons': function(t) {
    return [{
      text: 'Weź zlecenie',
      callback: function(t) {
        return t.member('id').then(function(member) {
          return t.card('id', 'idMembers').then(function(card) {
            if(card.idMembers.includes(member.id)) {
              alert('Już masz to zlecenie.');
            } else {
              return t.card('id').then(function() {
                return t.member('id').then(function(member) {
                  return t.set('card', 'shared', 'claimedBy', member.id)
                    .then(() => t.attach({ url: `https://trello.com/member/${member.id}` }))
                    .then(() => alert('Wziąłeś zlecenie!'));
                });
              });
            }
          });
        });
      }
    }];
  }
});
