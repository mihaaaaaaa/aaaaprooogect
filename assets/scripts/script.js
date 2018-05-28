$(document).ready(function() {
	const weaponsBlock = $('.-weapons');
	const searhResult = $('.found-content');
	let modal = $('.modal');

	let weapons = [
		{
			name: "Деревянный Лук",
			img: "assets/img/items/261-0.png",
			id: "261-0",
			damage: 1 ,
			cooldown: "1-4" ,
			durability: 385 ,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность",
			kraft:""
		},
		{
			name: "Деревянный Меч",
			img: "assets/img/items/268-0.png",
			id: "268-0",
			damage: 4,
			cooldown: 2,
			durability: 385,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность",
			kraft:""
		},
		{
			name: "Каменный Меч",
			img: "assets/img/items/272-0.png",
			id: "272-0",
			damage: 5,
			cooldown: 2,
			durability: 385,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность",
			kraft:""
		},
		{
			name: "Железный Меч",
			img: "assets/img/items/267-0.png",
			id: "267-0",
			damage: 6 ,
			cooldown: 2 ,
			durability: 385 ,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность",
			kraft:""
		},
		{
			name: "Золотой Меч",
			img: "assets/img/items/283-0.png",
			id: "283-0",
			damage: 4,
			cooldown: 2,
			durability: 385,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность",
			kraft:""
		},
		{
			name: "Алмазный Меч",
			img: "assets/img/items/276-0.png",
			id: "276-0",
			damage: 7 ,
			cooldown: 2 ,
			durability: 385 ,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность",
			kraft:""
		}
	];

	for (let i = 0; i < weapons.length; i++) {
		weaponsBlock.append('<div class="item"><img class="items-icon" src="' + weapons[i].img + '"><div class="items-name">' + weapons[i].name +'</div><div class="items-ID">' + weapons[i].id + '</div></div>')
	};


	$('.item').click(function($index) {
		let currentItem = $(this).index() - 1;
		let item = weapons[currentItem];

		$('<div class="modal"><div class="items-name">' + item.name + '</div><div class="items-icon"><img src="' + item.img +'"></div><div class="stats"><div class="id">' + item.id +'</div><div class="damage">' + item.damage +'</div><div class="cooldown">' + item.cooldown +'</div><div class="durability">' + item.durability +'</div><div class="enchantment">' + item.enchantment +'</div></div><div class="craft"></div></div>').appendTo('body').modal();
	})

	$('.header-btn').click(function(){
		let items = [];
		let searchText = new RegExp($('.js-search').val());


		for (let i = 0; i < weapons.length; i++) {
			if (weapons[i].name.search(searchText) !== -1) {
				items.push(weapons[i]);
			}
		}


		if (items.length < 1) {
			alert('Совпадений нет')
		}	else if (items.length == 1){
			let item = items[0];
			$('<div class="modal"><div class="items-name">' + item.name + '</div><div class="items-icon"><img src="' + item.img +'"></div><div class="stats"><div class="id">' + item.id +'</div><div class="damage">' + item.damage +'</div><div class="cooldown">' + item.cooldown +'</div><div class="durability">' + item.durability +'</div><div class="enchantment">' + item.enchantment +'</div></div><div class="craft"></div></div>').appendTo('body').modal();
		} else {
			searhResult.html('');
			$('.found').addClass('-active');
			for (let i = 0; i < items.length; i++) {
				searhResult.append('<div class="item"><img class="items-icon" src="' + items[i].img + '"><div class="items-name">' + items[i].name +'</div><div class="items-ID">' + items[i].id + '</div></div>')
			};
		}
	})
	
// $('<div class="modal"><div class="items-name">' + item.name + '</div><div class="items-icon"><img src="' + item.img +'"></div><div class="stats"><div class="id">' + item.id +'</div><div class="damage">' + item.damage +'</div><div class="cooldown">' + item.cooldown +'</div><div class="durability">' + item.durability +'</div><div class="enchantment">' + item.enchantment +'</div></div><div class="craft"></div></div>').appendTo('body').modal();
	//$.inArray( , weapons);
});