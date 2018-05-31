$(document).ready(function() {
	const weaponsBlock = $('.-weapons');
	const searhResult = $('.found-content');
	let modal = $('.modal');
	let enter = 0;

	let weapons = [
		{
			name: "Деревянный Лук",
			img: "assets/img/items/261-0.png",
			id: "261-0",
			damage: 1 ,
			cooldown: "1-4" ,
			durability: 385 ,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Деревянный Меч",
			img: "assets/img/items/268-0.png",
			id: "268-0",
			damage: 4,
			cooldown: 2,
			durability: 385,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Каменный Меч",
			img: "assets/img/items/272-0.png",
			id: "272-0",
			damage: 5,
			cooldown: 2,
			durability: 385,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Железный Меч",
			img: "assets/img/items/267-0.png",
			id: "267-0",
			damage: 6 ,
			cooldown: 2 ,
			durability: 385 ,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Золотой Меч",
			img: "assets/img/items/283-0.png",
			id: "283-0",
			damage: 4,
			cooldown: 2,
			durability: 385,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Алмазный Меч",
			img: "assets/img/items/276-0.png",
			id: "276-0",
			damage: 7 ,
			cooldown: 2 ,
			durability: 385 ,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Стекло",
			img: "assets/img/items/95-0.png",
			id: "95-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Оранжевое Стекло",
			img: "assets/img/items/95-1.png",
			id: "95-1",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Фиолетовое Стекло",
			img: "assets/img/items/95-2.png",
			id: "95-2",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Голубое Стекло",
			img: "assets/img/items/95-3.png",
			id: "95-3",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Желтое Стекло",
			img: "assets/img/items/95-4.png",
			id: "95-4",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Зелёное Стекло",
			img: "assets/img/items/95-5.png",
			id: "95-5",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Розовое Стекло",
			img: "assets/img/items/95-6.png",
			id: "95-6",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Серое Стекло",
			img: "assets/img/items/95-7.png",
			id: "95-7",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Белое Стекло",
			img: "assets/img/items/95-8.png",
			id: "95-8",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Серое Стекло",
			img: "assets/img/items/95-9.png",
			id: "95-9",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Перломутровое Стекло",
			img: "assets/img/items/95-10.png",
			id: "95-10",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Синее Стекло",
			img: "assets/img/items/95-11.png",
			id: "95-11",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Коричневое Стекло",
			img: "assets/img/items/95-12.png",
			id: "95-12",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Темно-Зелёное Стекло",
			img: "assets/img/items/95-13.png",
			id: "95-13",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Красное Стекло",
			img: "assets/img/items/95-14.png",
			id: "95-14",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Чёрное Стекло",
			img: "assets/img/items/95-15.png",
			id: "95-15",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Арбуз",
			img: "assets/img/items/360-0.png",
			id: "360-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Семена Арбуза",
			img: "assets/img/items/362-0.png",
			id: "362-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Говядина",
			img: "assets/img/items/363-0.png",
			id: "363-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Жаренная Говядина",
			img: "assets/img/items/364-0.png",
			id: "364-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Морковь",
			img: "assets/img/items/391-0.png",
			id: "391-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Кортофель",
			img: "assets/img/items/392-0.png",
			id: "392-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Жаренный Картофель",
			img: "assets/img/items/393-0.png",
			id: "393-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Гнилой Кортофель",
			img: "assets/img/items/394-0.png",
			id: "394-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Золотая Морковь",
			img: "assets/img/items/396-0.png",
			id: "396-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Торт",
			img: "assets/img/items/354-0.png",
			id: "354-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Торт это ложь"
		},
		{
			name: "Тыквенный Пирог",
			img: "assets/img/items/400-0.png",
			id: "400-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Боранина",
			img: "assets/img/items/423-0.png",
			id: "423-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Жаренная Боранина",
			img: "assets/img/items/424-0.png",
			id: "424-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Плластинка 2256-0",
			img: "assets/img/items/2256-0.png",
			id: "2256-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Плластинка 2257-0",
			img: "assets/img/items/2257-0.png",
			id: "2257-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Плластинка 2258-0",
			img: "assets/img/items/2258-0.png",
			id: "2258-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Плластинка 2260-0",
			img: "assets/img/items/2260-0.png",
			id: "2260-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Плластинка 2259-0",
			img: "assets/img/items/2259-0.png",
			id: "2259-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		},
		{
			name: "Плластинка 2261-0",
			img: "assets/img/items/2261-0.png",
			id: "2261-0",
			damage: 1,
			cooldown: 1,
			durability: 00,
			enchantment:"Сила,Откидывание,Горящая стрела,Бесконечность"
		}
	];

	for (let i = 0; i < weapons.length; i++) {
		weaponsBlock.append('<div class="item"><div class="item-image-container"><img class="items-icon" src="' + weapons[i].img + '"></div><div class="items-name">' + weapons[i].name +'</div><div class="items-ID">' + weapons[i].id + '</div></div>')
	};


	$('.item').click(function($index) {
		let currentItem = $(this).index() - 1;
		let item = weapons[currentItem];

		$('<div class="modal"><div class="items-name">' + item.name + '</div><div class="items-icon"><img src="' + item.img +'"></div><div class="stats"><div class="id">' + item.id +'</div><div class="damage">' + item.damage +'</div><div class="cooldown">' + item.cooldown +'</div><div class="durability">' + item.durability +'</div><div class="enchantment">' + item.enchantment +'</div></div><div class="craft"></div></div>').appendTo('body').modal();
	})

	$('.found-content').on('click', '.item',  function() {

		const itemName = $(this).find('.items-name').text();
		let item = {};
		
		for (let i = 0; i < weapons.length; i++) {
			if (weapons[i].name == itemName) {
				item = weapons[i];
			}
		}

		$('<div class="modal"><div class="items-name">' + item.name + '</div><div class="items-icon"><img src="' + item.img +'"></div><div class="stats"><div class="id">' + item.id +'</div><div class="damage">' + item.damage +'</div><div class="cooldown">' + item.cooldown +'</div><div class="durability">' + item.durability +'</div><div class="enchantment">' + item.enchantment +'</div></div><div class="craft"></div></div>').appendTo('body').modal();
		// let item = weapons[currentItem];

		// $('<div class="modal"><div class="items-name">' + item.name + '</div><div class="items-icon"><img src="' + item.img +'"></div><div class="stats"><div class="id">' + item.id +'</div><div class="damage">' + item.damage +'</div><div class="cooldown">' + item.cooldown +'</div><div class="durability">' + item.durability +'</div><div class="enchantment">' + item.enchantment +'</div></div><div class="craft"></div></div>').appendTo('body').modal();
	})

	$(document).keydown(function(e){
		if (e.which == 13) { 
			startSearch();
		} 
	});

	$('.header-btn').click(function(){
		startSearch();
	})

	function startSearch() {
		let items = [];
		let searchText = new RegExp($('.js-search').val());
		if ($('.js-search').val() !== "") {
			for (let i = 0; i < weapons.length; i++) {
				if (weapons[i].name.search(searchText) !== -1) {
					items.push(weapons[i]);
					}
			}


			if (items.length < 1) {
				alert('Совпадений нет')
			}	else if (items.length == 1){
				let item = items[0];
				$('<div class="modal"><div class="items-name">' + item.name + '</div><div class="items-icon"><div class="item-image-container"><img src="' + item.img +'"></div></div><div class="stats"><div class="id">' + item.id +'</div><div class="damage">' + item.damage +'</div><div class="cooldown">' + item.cooldown +'</div><div class="durability">' + item.durability +'</div><div class="enchantment">' + item.enchantment +'</div></div><div class="craft"></div></div>').appendTo('body').modal();
			} else {
				searhResult.html('');
				$('.found').addClass('-active');
				for (let i = 0; i < items.length; i++) {
					searhResult.append('<div class="item"><div class="item-image-container"><img class="items-icon" src="' + items[i].img + '"></div><div class="items-name">' + items[i].name +'</div><div class="items-ID">' + items[i].id + '</div></div>')
				};
			}
		}
	}
	
// $('<div class="modal"><div class="items-name">' + item.name + '</div><div class="items-icon"><img src="' + item.img +'"></div><div class="stats"><div class="id">' + item.id +'</div><div class="damage">' + item.damage +'</div><div class="cooldown">' + item.cooldown +'</div><div class="durability">' + item.durability +'</div><div class="enchantment">' + item.enchantment +'</div></div><div class="craft"></div></div>').appendTo('body').modal();
	//$.inArray( , weapons);
});