document.querySelectorAll('.js-linked-to-visual-appearance').forEach(container => {

	const select = container.querySelector('select');

	if (!select) return;

	function syncCustomSelect() {

		const wrapper = container.querySelector('.custom-select');

		if (!wrapper) return;

		const current = wrapper.querySelector('.custom-select__current');
		const items = wrapper.querySelectorAll('.custom-select__item');

		current.textContent = select.options[select.selectedIndex]?.text || '';

		items.forEach((item, index) => {
			item.classList.toggle('_selected', index === select.selectedIndex);
		});

		const mobileItems = container.querySelectorAll('.catalog-page__wrap-select-by-mobile--list .custom-select__item');
		mobileItems.forEach((item, index) => {
			item.classList.toggle('_selected', index === select.selectedIndex);
		});
	}

	const wrapper = document.createElement('div');
	wrapper.className = 'custom-select';

	const current = document.createElement('button');
	current.className = 'custom-select__current';
	current.type = 'button';

	const list = document.createElement('ul');
	list.className = 'custom-select__list';

	[...select.options].forEach((option, index) => {

		const item = document.createElement('li');

		item.className = 'custom-select__item';
		item.dataset.index = index;
		item.textContent = option.text;

		list.append(item);
	});

	wrapper.append(current, list);

	select.classList.add('original-select-hidden');

	container.append(wrapper);

	const mobileListContainer = container.querySelector('.catalog-page__wrap-select-by-mobile--list');
	if (mobileListContainer) {

		const mobileList = document.createElement('ul');
		mobileList.className = 'custom-select__list';

		[...select.options].forEach((option, index) => {

			const item = document.createElement('li');

			item.className = 'custom-select__item';
			item.dataset.index = index;
			item.textContent = option.text;

			mobileList.append(item);
		});

		mobileListContainer.append(mobileList);

		mobileList.addEventListener('click', e => {

			const item = e.target.closest('.custom-select__item');

			if (!item) return;

			const index = Number(item.dataset.index);

			select.selectedIndex = index;

			select.dispatchEvent(
				new Event('change', { bubbles: true })
			);
		});
	}

	syncCustomSelect();

	current.addEventListener('click', () => {
		wrapper.classList.toggle('_active');
	});

	list.addEventListener('click', e => {

		const item = e.target.closest('.custom-select__item');

		if (!item) return;

		const index = Number(item.dataset.index);

		select.selectedIndex = index;

		select.dispatchEvent(new Event('change', { bubbles: true }));

		wrapper.classList.remove('_active');
	});

	select.addEventListener('change', syncCustomSelect);
	select.addEventListener('input', syncCustomSelect);

	const mobileList = container.querySelector('.catalog-page__wrap-select-by-mobile--list');
	if (mobileList) {

		[...select.options].forEach((option, index) => {

			const item = document.createElement('button');

			item.type = 'button';
			item.className = 'catalog-page__wrap-select-by-mobile--item';
			item.dataset.index = index;
			item.textContent = option.text;

			if (option.selected) {
				item.classList.add('_selected');
			}

			mobileList.append(item);

			item.addEventListener('click', () => {

				select.selectedIndex = index;

				select.dispatchEvent(new Event('change', { bubbles: true }));

				mobileList.querySelectorAll('._selected').forEach(el => {
					el.classList.remove('_selected');
				});

				item.classList.add('_selected');
			});
		});

		const cpWrapSelectMobile = container.querySelector('.catalog-page__wrap-select-by-mobile--block');
		if (cpWrapSelectMobile) {
			current.addEventListener('click', () => {
				document.body.classList.toggle('_lock');
				cpWrapSelectMobile.classList.toggle('mobile-short-by-show');
			});

			const closeBtn = cpWrapSelectMobile.querySelector('.catalog-page__wrap-select-by-mobile--head button[type="button"]');
			if (closeBtn) {
				closeBtn.addEventListener('click', () => {
					document.body.classList.remove('_lock');
					cpWrapSelectMobile.classList.remove('mobile-short-by-show');
				});
			}
		}
	}
});

document.addEventListener('click', e => {

	const currentSelect = e.target.closest('.custom-select');

	document.querySelectorAll('.custom-select').forEach(select => {

		if (select !== currentSelect) {
			select.classList.remove('_active');
		}
	});
});

document.addEventListener('reset', event => {

	setTimeout(() => {

		event.target.querySelectorAll('.js-linked-to-visual-appearance').forEach(container => {

			const select = container.querySelector('select');
			const wrapper = container.querySelector('.custom-select');

			if (!select || !wrapper) return;

			const current = wrapper.querySelector('.custom-select__current');
			const items = wrapper.querySelectorAll('.custom-select__item');

			current.textContent = select.options[select.selectedIndex]?.text || '';

			items.forEach((item, index) => {
				item.classList.toggle('_selected', index === select.selectedIndex);
			});

			const mobileButtons = container.querySelectorAll('.catalog-page__wrap-select-by-mobile--item');

			mobileButtons.forEach((item, index) => {
				item.classList.toggle('_selected', index === select.selectedIndex);
			});

			const mobileListItems = container.querySelectorAll('.catalog-page__wrap-select-by-mobile--list .custom-select__item');

			mobileListItems.forEach((item, index) => {
				item.classList.toggle('_selected', index === select.selectedIndex);
			});

		});

	}, 0);

}, true);