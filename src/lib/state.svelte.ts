export const profileState = $state({
	nickname: 'Yatqo'
});

export const hotkeysState = $state({
	dropItem: 'Q',
	inventory: 'E',
	perspective: 'R',
	sneak: 'Shift',
	sprint: 'TGL',
	f3: 'F3',
	chat: 'T',
	movement: {
		forward: 'W',
		backward: 'S',
		left: 'A',
		right: 'D'
	},
	hotbar: ['1', '2', '3', '4', '5', 'C', 'V', 'F', 'G'],
	offHand: 'BCK',
	interactions: {
		attack: 'LMB',
		use: 'RMB',
		pick: 'MMB'
	},
	macro: {
		wide: 'FWD',
		thin: 'B',
		eye: {
			key: 'X',
			dec: ',',
			inc: '.',
			reset: 'PGD'
		}
	}
});
