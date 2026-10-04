document.addEventListener('DOMContentLoaded', function() {

    let sliderElement = document.querySelector('.product-comparison__slider');
    let slideElements = sliderElement.querySelectorAll('.product-comparison__slide');
    let numberOfSlides = slideElements.length;
    let comparedElement = document.getElementById('compared');
    comparedElement.textContent = numberOfSlides;

    function updateNumberOfSlides() {
        let sliderElement = document.querySelector('.product-comparison__slider');
        let slideElements = sliderElement.querySelectorAll('.product-comparison__slide');
        let numberOfSlides = slideElements.length;
        let comparedElement = document.getElementById('compared');
        comparedElement.textContent = numberOfSlides;
    }

    let productComparisonSliderBlocksInfo = document.querySelectorAll('.product-comparison__sliderBlockInfo')
    if (productComparisonSliderBlocksInfo) {
        let height = 0;
        for (var i = 0; i < productComparisonSliderBlocksInfo.length; i++) {
            var current_height = productComparisonSliderBlocksInfo[i].offsetHeight;
            if (current_height > height) {
                height = current_height;
            }
        }
        for (var i = 0; i < productComparisonSliderBlocksInfo.length; i++) {
            productComparisonSliderBlocksInfo[i].style.height = height + 'px';
        }
    }

    function setUniqueHeight() {
        var maxHeightByList = {};
        var comparisonLists = document.querySelectorAll('.js-product-comparison-list');
        comparisonLists.forEach(function(list) {
            var items = list.querySelectorAll('li');
            items.forEach(function(item) {
                var listId = item.getAttribute('data-list');
                var height = item.offsetHeight;
                if (!maxHeightByList[listId] || height > maxHeightByList[listId]) {
                    maxHeightByList[listId] = height;
                }
            });
        });
        for (var listId in maxHeightByList) {
            var elementsWithSameListId = document.querySelectorAll('.js-product-comparison-list li[data-list="' + listId + '"]');
            elementsWithSameListId.forEach(function(element) {
                element.style.height = maxHeightByList[listId] + 'px';
            });
        }
    }
    setUniqueHeight();

    // Функция для обновления количества слайдов
    function updateNumberOfSlides() {
        let numberOfSlides = document.querySelectorAll('.product-comparison__slide').length;
        document.getElementById('compared').textContent = numberOfSlides;
    }

    // Находим элемент с id "clear-list-product-comparison"
    let clearListButton = document.getElementById('clear-list-product-comparison');

    // Добавляем слушатель события click для кнопки очистки списка
    clearListButton.addEventListener('click', () => {
        // Находим все элементы с классом "product-comparison__slide"
        let slideElements = document.querySelectorAll('.product-comparison__slide');

        // Удаляем каждый найденный элемент
        slideElements.forEach((slide) => {
            slide.remove();
        });

        // Обновляем количество слайдов на 0
        updateNumberOfSlides();

        // Обновляем swiper
        document.querySelector('.product-comparison__slider').swiper.update();

        // Удаляем атрибуты style у всех li внутри .js-product-comparison-list
        let comparisonListItems = document.querySelectorAll('.js-product-comparison-list li');
        comparisonListItems.forEach((item) => {
            item.removeAttribute('style');
            item.parentNode.remove();
            if (document.querySelector('.product-comparison__checkboxs')) {
                document.querySelector('.product-comparison__checkboxs').remove();
            }
            if (document.querySelector('.product-comparison__clear-list')) {
                document.querySelector('.product-comparison__clear-list').remove();
            }
        });

        // Вызываем функцию для установки уникальной высоты после обновления
        setUniqueHeight();
    });

    // Добавляем слушатели события click для кнопок удаления элементов
    let productComparisonButtonsRemove = document.querySelectorAll('.product-comparison__buttonRemove');
    productComparisonButtonsRemove.forEach((productComparisonButtonRemove) => {
        productComparisonButtonRemove.addEventListener('click', () => {
            let parentNode = productComparisonButtonRemove.parentNode;
            productComparisonButtonRemove.parentNode.remove();

            // Обновляем количество слайдов
            updateNumberOfSlides();

            // Обновляем swiper
            document.querySelector('.product-comparison__slider').swiper.update();

            // Если был удален последний элемент
            if (document.querySelectorAll('.product-comparison__buttonRemove').length === 0) {
                parentNode.remove();
                if (document.querySelector('.product-comparison__checkboxs')) {
                    document.querySelector('.product-comparison__checkboxs').remove();
                }
                if (document.querySelector('.product-comparison__clear-list')) {
                    document.querySelector('.product-comparison__clear-list').remove();
                }
                let jsProductComparisonLists = document.querySelectorAll('.js-product-comparison-list')
                jsProductComparisonLists.forEach((jsProductComparisonList) => {
                    if (jsProductComparisonList) {
                        jsProductComparisonList.remove();
                    }
                });
            } else {
                // Вызываем функцию для установки уникальной высоты после обновления
                setTimeout(setUniqueHeight, 0);
            }
        });
    });
});