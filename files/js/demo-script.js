document.addEventListener("DOMContentLoaded", function() {
    
    let popupForms = document.querySelectorAll('.popup-form');

    popupForms.forEach(function(popupForm) {
        let popupFormSubmits = popupForm.querySelectorAll('.popup-form__submit');
        
        popupFormSubmits.forEach(function(popupFormSubmit) {
            popupFormSubmit.addEventListener('click', function(e) {
                e.preventDefault();
                let popupContent = this.closest('.popup__content');
                if (popupContent) {
                    popupContent.classList.remove('before-active');
                }
            });
        });
    
        let rPopupFormWrapStarsRating = popupForm.querySelector('.popup-form__wrapStarsRating');
        popupForm.querySelectorAll('.popup-form-field-reset').forEach(function(field) {
            popupFormSubmits.forEach(function(popupFormSubmit) {
                popupFormSubmit.addEventListener('click', function() {
                    if (field.type === 'radio' || field.type === 'checkbox') {
                        field.checked = false;
                    } else {
                        field.value = '';
                    }
                    if (rPopupFormWrapStarsRating) {
                        rPopupFormWrapStarsRating.classList.remove('rating-1', 'rating-2', 'rating-3', 'rating-4', 'rating-5');
                    }
                });
            });
        });
    });
    
    let closePopups = document.querySelectorAll('.close-popup');
    let popupBodies = document.querySelectorAll('.popup__body');
    
    function togglePopupContents() {
        let popupContents = document.querySelectorAll('.popup__content:not(.before-active)');
        popupContents.forEach(function(popupContent) {
            setTimeout(function() {
                popupContent.classList.add('before-active');
            }, 600);
        });
    }

    closePopups.forEach(function(closePopup) {
        closePopup.addEventListener('click', togglePopupContents);
    });
    
    popupBodies.forEach(function(popupBody) {
        popupBody.addEventListener('click', function(event) {
            if (event.target === this) {
                togglePopupContents();
            }
        });
    });

    let dPopupClose = document.querySelector('.cancel-reboot .popup__close')
    dPopupClose.addEventListener('click', function(e) {
        e.preventDefault();
        dPopupClose.parentNode.parentNode.parentNode.classList.remove('open');
        setTimeout(function() {
            document.body.classList.remove('lock')
        }, 600)
    });

    // Redirect to another page after placing an order
    let checkoutButton = document.querySelector('.checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'thank-you-for-your-order.html';
        });
    }

    // Redirect to another page after placing an order
    const reportSentButtons = document.querySelectorAll('.report-sent-button');
    reportSentButtons.forEach(function(reportSentButton) {
        reportSentButton.addEventListener('click', function(event) {
            event.preventDefault();

            const beforeReportSentPopup = document.querySelector('.before-report-sent');
            const afterReportSent = document.querySelector('.after-report-sent');

            if (beforeReportSentPopup) {
                beforeReportSentPopup.classList.remove('active', 'open');
                document.body.classList.remove('lock', 'enable-page-scrolling');
            }

            if (afterReportSent) {
                afterReportSent.classList.add('active', 'open');
                document.body.classList.add('lock', 'enable-page-scrolling');
            }

            const chooseYourDeviceSubTitle = document.querySelector('.choose-your-device__subTitle');

            if (chooseYourDeviceSubTitle) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        
            // Сбрасываем родительские вкладки
            const tabsTabs = document.querySelectorAll('#tabs .tab');
            const tabsTabContents = document.querySelectorAll('#tabs .tabContent');

            tabsTabs.forEach(tab => tab.classList.remove('tab-active'));
            tabsTabContents.forEach(content => content.classList.remove('content-active'));

            tabsTabs[0]?.classList.add('tab-active');
            tabsTabContents[0]?.classList.add('content-active');

            // Сбрасываем вложенные вкладки
            const subTabs = document.querySelectorAll('#subTabs .subTab');
            const subTabsTabContents = document.querySelectorAll('#subTabs .subTabContent');

            subTabs.forEach(tab => tab.classList.remove('subTab-active'));
            subTabsTabContents.forEach(content => content.classList.remove('subContent-active'));

            subTabs[0]?.classList.add('subTab-active');
            subTabsTabContents[0]?.classList.add('subContent-active');

            // Возвращаем индикатор шага к первому шагу
            const tabsWrapTab = document.querySelector('#subTabs .tabs__wrap-tab');

            if (tabsWrapTab) {
                tabsWrapTab.classList.forEach(className => {
                    if (className.startsWith('step-')) {
                        tabsWrapTab.classList.remove(className);
                    }
                });

                tabsWrapTab.classList.add('step-subTab1');
            }
        });

        // Закрытие попапа после отправки отчёта
        const closePopupButtons = document.querySelectorAll('.after-report-sent.popup .close-popup');
        closePopupButtons.forEach(function(closePopupButton) {
            closePopupButton.addEventListener('click', function(event) {
                event.preventDefault();

                const beforeReportSentPopup = document.querySelector('.before-report-sent');
                const afterReportSent = document.querySelector('.after-report-sent.popup');

                if (afterReportSent) {
                    afterReportSent.classList.remove('active');
                }

                if (beforeReportSentPopup) {
                    beforeReportSentPopup.classList.add('active');
                }

                document.body.classList.remove('enable-page-scrolling');
            });
        });
    });
    /*
    let reportSentButtons = document.querySelectorAll('.report-sent-button');
    if (reportSentButtons) {
        reportSentButtons.forEach(function(reportSentButton) {
            reportSentButton.addEventListener('click', function(event) {
                event.preventDefault();

                //let tabsBlock = document.querySelector('.tabs__block')
                //let tabsManager = document.querySelector('.tabs-manager')
                let beforeReportSentPopup = document.querySelector('.before-report-sent')
                let afterReportSent = document.querySelector('.after-report-sent')
                //tabsBlock.classList.remove('active')
                //tabsManager.classList.remove('active')
                //beforeReportSentPopup.classList.remove('open')
                afterReportSent.classList.add('active open')
                //afterReportSent.classList.add('')
                
                setTimeout(function() {
                    //afterReportSent.classList.remove('active')
                    //tabsManager.classList.add('active')
                    beforeReportSentPopup.classList.remove('active open')
                    //beforeReportSentPopup.classList.remove('open')
                    //tabsBlock.classList.add('active')
                }, 8000);

                let chooseYourDeviceSubTitle = document.querySelector('.choose-your-device__subTitle');
                if (chooseYourDeviceSubTitle) {
                    let headerHeight = document.querySelector('.header__wrapper').offsetHeight;
                    let scrollPosition = chooseYourDeviceSubTitle.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({ top: scrollPosition - headerHeight, behavior: 'smooth' });
                }
            });
        });
    }
    */

    // Redirect to profile (demo)
    let entranceButton = document.querySelector('.entrance-button-demo');
    if (entranceButton) {
        entranceButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'profile.html';
        });
    }

    // Deleting search history
    const searchHistory = document.querySelector('.search-history');
    if (searchHistory) {
        searchHistory.addEventListener('click', (e) => {
            e.stopPropagation();
            const removeBtn = e.target.closest('.remove-result-name');
            if (removeBtn) {
                removeBtn.closest('li')?.remove();
                return;
            }
            const resetBtn = e.target.closest('.reset');
            if (resetBtn) {
                searchHistory.querySelector('.list-names')?.replaceChildren();
            }
        });
    }

    // Show the search form when clicking the icon in the header.
    const searchBtn = document.querySelector('#show-search-form');
    const searchForm = document.querySelector('.header__wrapForm');
    const headerBottom = document.querySelector('.header__bottom');
    const wrapper = document.querySelector('.wrapper');
    const originalParent = searchForm?.parentNode;
    searchBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        if (!searchForm || !originalParent || !headerBottom || !wrapper) return;
        const isOpen = searchBtn.classList.toggle('_active');
        searchForm.classList.toggle('_active', isOpen);
        wrapper.classList.toggle('open-form', isOpen);
        if (isOpen) {
            headerBottom.prepend(searchForm);
        } else {
            originalParent.prepend(searchForm);
        }
    });
    
});

// Show items mega menu
function updateMegaMenu() {
    document.querySelectorAll('[data-show-items]').forEach(menu => {
        const limit = parseInt(menu.dataset.showItems, 10);
        const items = menu.querySelectorAll('ul > li');
        const moreLink = menu.querySelector('.large-catalog-menu__more');
        if (window.matchMedia('(min-width: 641px)').matches) {
            items.forEach((item, index) => {
                item.hidden = index >= limit;
            });
            if (moreLink && items.length > limit) {
                moreLink.classList.remove('hidden');
            }
        } else {
            items.forEach(item => {
                item.hidden = false;
            });
            moreLink?.classList.add('hidden');
        }
    });
}
const megaMenuMedia = window.matchMedia('(min-width: 641px)');
updateMegaMenu();
megaMenuMedia.addEventListener('change', updateMegaMenu);
/*
document.querySelectorAll('[data-show-items]').forEach(menu => {
    const limit = parseInt(menu.dataset.showItems, 10);
    const items = menu.querySelectorAll('ul > li');
    const moreLink = menu.querySelector('.large-catalog-menu__more');
    if (items.length > limit) {
        if (moreLink) {
            moreLink.classList.remove('hidden');
        }
        items.forEach((item, index) => {
            if (index >= limit) {
                item.remove();
            }
        });
    }
});
*/

// Collapse/expand the "Repair" section in the search dropdown
document.querySelectorAll('[data-show-repair-items]').forEach(block => {

    const limit = parseInt(block.dataset.showRepairItems, 10);
    const items = block.querySelectorAll('.list-repair > li');
    const moreLink = block.querySelector('.list-repair--more');

    if (items.length > limit) {

        items.forEach((item, index) => {
            item.classList.toggle('hidden', index >= limit);
        });

        moreLink?.classList.remove('hidden');

        moreLink?.addEventListener('click', function (e) {
            e.preventDefault();

            const isOpened = this.classList.contains('opened');

            if (isOpened) {

                items.forEach((item, index) => {
                    item.classList.toggle('hidden', index >= limit);
                });

                this.classList.remove('opened');

            } else {

                items.forEach(item => {
                    item.classList.remove('hidden');
                });

                this.classList.add('opened');
            }
        });
    }

});

// Tooltips
document.addEventListener('click', function(event) {
    const trigger = event.target.closest('.page-product__tooltip-trigger');
    const wrap = event.target.closest('.page-product__wrap-icon');

    if (trigger && wrap) {
        const isOpen = wrap.classList.contains('show-tooltip');

        document.querySelectorAll('.page-product__wrap-icon.show-tooltip').forEach(function(item) {
            item.classList.remove('show-tooltip');
        });

        if (!isOpen) {
            wrap.classList.add('show-tooltip');
        }

        return;
    }

    if (!wrap) {
        document.querySelectorAll('.page-product__wrap-icon.show-tooltip').forEach(function(item) {
            item.classList.remove('show-tooltip');
        });
    }
});