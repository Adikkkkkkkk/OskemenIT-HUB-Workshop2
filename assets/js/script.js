'use strict';

window.addEventListener('DOMContentLoaded', () => {
	let tabs = [
		{
			id: 'audi',
			brand: 'Audi',
		},
		{
			id: 'bmw',
			brand: 'BMW',
		},
		{
			id: 'hyundai',
			brand: 'Hyundai',
		},
		{
			id: 'kia',
			brand: 'Kia',
		},
		{
			id: 'land-rover',
			brand: 'Land Rover',
		},
		{
			id: 'mercedes',
			brand: 'Mercedes',
		},
		{
			id: 'nissan',
			brand: 'Nissan',
		},
		{
			id: 'toyota',
			brand: 'Toyota',
		},
	];

	const tabsEl = document.querySelector('.tab-buttons');

	// Tabs
	tabs.forEach(tab => {
		tabsEl.innerHTML += `
		<button class='tab-button' id='${tab.id}'><i class='bi bi-car-front-fill'></i> ${tab.brand}</button>
		`;
	});

	const tabButtons = document.querySelectorAll('.tab-button');

	tabButtons.forEach(tabButton => {
		tabButton.addEventListener('click', function (e) {
			e.preventDefault();

			let brand = this.textContent;
			console.log(brand);
		});
	}); /* ForEach */

	// Cards
}); /* DOMContentLoaded */
