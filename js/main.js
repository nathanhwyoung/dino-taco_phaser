var TacoDino = TacoDino || {};

TacoDino.game = new Phaser.Game(160, 160, Phaser.AUTO, '');

TacoDino.game.state.add('Boot', TacoDino.Boot);
TacoDino.game.state.add('Preload', TacoDino.Preload);
TacoDino.game.state.add('Game', TacoDino.Game);

TacoDino.game.state.start('Boot');
