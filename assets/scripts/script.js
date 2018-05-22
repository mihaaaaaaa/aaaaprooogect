$(document).ready(function() {
	const weaponsBlock = $('.-weapons');
	let modal = $('.modal');

	let weapons = [
		{
			name: "лук",
			img: "assets/img/items/261-0.png",
			id: "261-0",
			damage: 1 ,
			cooldown: "1-4" ,
			durability: 385 ,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность",
			kraft:""
		},
		{
			name: "Деревяный Меч",
			img: "assets/img/items/268-0.png",
			id: "268-0",
			damage: 4,
			cooldown: 2,
			durability: 385,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность",
			kraft:""
		},
		{
			name: "Каменый Меч",
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




	//$.inArray( , weapons);
});