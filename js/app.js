const app = new Vue({
	el: '#app',
	data: {
			dice: [
				{ die: 4, rollTimes: 1, modifier: 0 },
				{ die: 6, rollTimes: 1, modifier: 0 },
				{ die: 8, rollTimes: 1, modifier: 0 },
				{ die: 10, rollTimes: 1, modifier: 0 },
				{ die: 12, rollTimes: 1, modifier: 0 },
				{ die: 20, rollTimes: 1, modifier: 0 },
				{ die: 100, rollTimes: 1, modifier: 0 },
			],
			feed: []
	},
	methods: {
		roll(die) {
			var result = [];
			for(i=0;i<die.rollTimes;i++) {
				result.push(Math.floor(Math.random() * die.die) + 1);
			}
			var total = 0;
			for(i=0;i<result.length;i++) {
				total = total + result[i];
			}
			var modifiedTotal = total + die.modifier;
			var resultString = 'You rolled ' + die.rollTimes + 'd' + die.die +' resulting in [' + result + '] for ' + total + ' + ' + die.modifier + ' for a total of ' + modifiedTotal + '.';
			if(this.feed.length == 10) {
				this.feed.shift();
			}
			this.feed.push(resultString);
		}
	}
});