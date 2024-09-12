'use strict';

window.addEventListener('DOMContentLoaded', () => {
	let tabs = [
		{
			id: 'all',
			brand: 'Все машины',
			class: 'active',
		},
		{
			id: 'audi',
			brand: 'Audi',
			class: '',
		},
		{
			id: 'bmw',
			brand: 'BMW',
			class: '',
		},
		{
			id: 'hyundai',
			brand: 'Hyundai',
			class: '',
		},
		{
			id: 'kia',
			brand: 'Kia',
			class: '',
		},
		{
			id: 'land-rover',
			brand: 'Land Rover',
			class: '',
		},
		{
			id: 'mercedes',
			brand: 'Mercedes',
			class: '',
		},
		{
			id: 'nissan',
			brand: 'Nissan',
			class: '',
		},
		{
			id: 'toyota',
			brand: 'Toyota',
			class: '',
		},
	];

	let cars = [
		{
			id: 'car1',
			brand_id: 'audi',
			image: '/assets/images/cars/Twitter post - 1.png',
			title: 'AUDI A4 RS',
			price: '20 000',
		},
		{
			id: 'car2',
			brand_id: 'bmw',
			image: '/assets/images/cars/Twitter post - 2.png',
			title: 'BMW X6',
			price: '40 000',
		},
		{
			id: 'car3',
			brand_id: 'hyundai',
			image: '/assets/images/cars/Twitter post - 3.png',
			title: 'Hyundai Sonata',
			price: '15 000',
		},
		{
			id: 'car4',
			brand_id: 'kia',
			image: '/assets/images/cars/Twitter post - 4.png',
			title: 'KIA Sportage',
			price: '25 000',
		},
		{
			id: 'car5',
			brand_id: 'land-rover',
			image: '/assets/images/cars/Twitter post - 5.png',
			title: 'Land Rover Range Rover',
			price: '55 000',
		},
		{
			id: 'car6',
			brand_id: 'mercedes',
			image: '/assets/images/cars/Twitter post - 6.png',
			title: 'Mercedes Benz C230',
			price: '19 000',
		},
		{
			id: 'car7',
			brand_id: 'nissan',
			image: '/assets/images/cars/Twitter post - 7.png',
			title: 'Nissan XTrail',
			price: '22 000',
		},
		{
			id: 'car8',
			brand_id: 'toyota',
			image: '/assets/images/cars/Twitter post - 8.png',
			title: 'Toyota Corolla',
			price: '12 400',
		},
	];

	const tabsEl = document.querySelector('.tab-buttons');

	// Tabs
	tabs.forEach(tab => {
		tabsEl.innerHTML += `
		<button class='tab-button ${tab.class}' id='${tab.id}'> ${tab.brand}</button>
		`;
	});

	const carsBox = document.querySelector('#cars-place');

	cars.forEach((car, i) => {
		carsBox.innerHTML += `
			<!-- ${i + 1} -->
							<div class="car-card" data-brand="${car.brand_id}">
								<img src="/assets/images/cars/Twitter post - ${i + 1}.png" alt="">
								<div class="car-card__content">
									<div class="car-card-row">
										<h3>${car.title}</h3>
										<div class="row-start">
											<span class="price">${car.price}</span>
											<span class='currency'>₸</span>
										</div><!-- ROW -->
									</div> <!-- CARD-ROW -->
									<button class="add-button">
										Добавить
									</button>
								</div> <!-- CONTENT -->
							</div> <!-- Card -->
			`;
	}); /* Cars ForEach */

	const carCards = document.querySelectorAll('.car-card');
	const tabButtons = document.querySelectorAll('.tab-button');

	tabButtons.forEach(tabButton => {
		tabButton.addEventListener('click', function (e) {
			e.preventDefault();

			let brandId = this.id;

			tabButtons.forEach(tabButtonInner => {
				tabButtonInner.classList.remove('active');
			}); /* Inner forEach */

			this.classList.add('active');

			carCards.forEach(car => {
				if (brandId === 'all') {
					car.classList.remove('hide');
				} else if (car.getAttribute('data-brand') === brandId) {
					car.classList.remove('hide');
				} else {
					car.classList.add('hide');
				}
			}); /* carCards ForEach */
		});
	}); /* ForEach */
}); /* DOMContentLoaded */
