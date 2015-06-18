angular.module('starter.services', [])

	.factory('Users', function () {
		var users = [
			{
				"id" : 1,
				"name" : "Lebron James",
				"nickname" : "The King",
				"email" : "lebron@james.com",
				"avatar" : "http://45.55.81.227/images/users/dD7t5vjIIcDe2qWL.jpg",
				"championships" : "2",
				"created_at" : "2015-06-17 21:48:25",
				"updated_at" : "2015-06-17 21:48:25"
			},
			{
				"id" : 2,
				"name" : "Kobe Bryant",
				"nickname" : "Black Mamba",
				"email" : "kobe@bryant.com",
				"avatar" : "http://45.55.81.227/images/users/Cnn8pRhVC0vGV7E7.jpg",
				"championships" : "5",
				"created_at" : "2015-06-17 21:53:05",
				"updated_at" : "2015-06-17 21:53:05"
			},
			{
				"id" : 3,
				"name" : "Michael Jordan",
				"nickname" : "Air Jordan",
				"email" : "michael@jordan.com",
				"avatar" : "http://45.55.81.227/images/users/aaa58ZnX0laDLFAB.jpg",
				"championships" : "6",
				"created_at" : "2015-06-17 21:53:11",
				"updated_at" : "2015-06-17 21:53:05"
			},
			{
				"id" : 4,
				"name" : "Hakeem Olajuwon",
				"nickname" : "Hakeem the Dream",
				"email" : "hakeem@olajuwon.com",
				"avatar" : "http://45.55.81.227/images/users/54tXdPQbBv1tpyuT.jpg",
				"championships" : "2",
				"created_at" : "2015-06-17 21:53:12",
				"updated_at" : "2015-06-17 21:53:06"
			},
			{
				"id" : 5,
				"name" : "Tim Duncan",
				"nickname" : "Big Fundamental",
				"email" : "tim@duncan.com",
				"avatar" : "http://45.55.81.227/images/users/Ylr6cPRhLQsyIZDB.jpg",
				"championships" : "5",
				"created_at" : "2015-06-17 21:53:12",
				"updated_at" : "2015-06-17 21:53:06"
			},
			{
				"id" : 6,
				"name" : "Earvin Johnson",
				"nickname" : "Magic",
				"email" : "magic@johnson.com",
				"avatar" : "http://45.55.81.227/images/users/vRi0ps6GszuJXqer.jpg",
				"championships" : "5",
				"created_at" : "2015-06-17 21:53:13",
				"updated_at" : "2015-06-17 21:53:06"
			},
			{
				"id" : 7,
				"name" : "Larry Bird",
				"nickname" : "Larry Legend",
				"email" : "larry@bird.com",
				"avatar" : "http://45.55.81.227/images/users/1UO3RLJEIgmBPn5u.jpg",
				"championships" : "3",
				"created_at" : "2015-06-17 21:53:13",
				"updated_at" : "2015-06-17 21:53:07"
			},
			{
				"id" : 8,
				"name" : "Shaquille O'Neal",
				"nickname" : "Shaq",
				"email" : "shaq@attack.com",
				"avatar" : "http://45.55.81.227/images/users/CxzpgM7AT7TtAIG9.jpg",
				"championships" : "4",
				"created_at" : "2015-06-17 21:53:15",
				"updated_at" : "2015-06-17 21:53:10"
			},
			{
				"id" : 9,
				"name" : "Charles Barkley",
				"nickname" : "Chuck",
				"email" : "charles@barkley.com",
				"avatar" : "http://45.55.81.227/images/users/wETwwt28fqyc3hWO.jpg",
				"championships" : "0",
				"created_at" : "2015-06-17 21:54:25",
				"updated_at" : "2015-06-17 21:54:25"
			},
			{
				"id" : 10,
				"name" : "Scottie Pippen",
				"nickname" : "Pip",
				"email" : "scottie@pippen.com",
				"avatar" : "http://45.55.81.227/images/users/u9Lobf0SDX6tCFTe.jpg",
				"championships" : "6",
				"created_at" : "2015-06-17 21:54:31",
				"updated_at" : "2015-06-17 21:54:31"
			}
		];

		return {
			all : function () {
				return users;
			},
			get : function (userId) {
				for (var i = 0, len = users.length; i < len; i++) {
					var user = users[i];
					if (user.id === parseInt(userId)) {
						return user;
					}
				}
				return null;
			}
		}
	})

	.factory('Chats', function () {
		// Might use a resource here that returns a JSON array

		// Some fake testing data
		var chats = [{
			id : 0,
			name : 'Ben Sparrow',
			lastText : 'You on your way?',
			face : 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
		}, {
			id : 1,
			name : 'Max Lynx',
			lastText : 'Hey, it\'s me',
			face : 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
		}, {
			id : 2,
			name : 'Adam Bradleyson',
			lastText : 'I should buy a boat',
			face : 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
		}, {
			id : 3,
			name : 'Perry Governor',
			lastText : 'Look at my mukluks!',
			face : 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
		}, {
			id : 4,
			name : 'Mike Harrington',
			lastText : 'This is wicked good ice cream.',
			face : 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
		}];

		return {
			all : function () {
				return chats;
			},
			remove : function (chat) {
				chats.splice(chats.indexOf(chat), 1);
			},
			get : function (chatId) {
				for (var i = 0; i < chats.length; i++) {
					if (chats[i].id === parseInt(chatId)) {
						return chats[i];
					}
				}
				return null;
			}
		};
	});
