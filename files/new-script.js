// Уведомление над шапкой
document.addEventListener('DOMContentLoaded', function () {
   const STORAGE_KEY = 'notifyAboveHeaderClosed';
   const notify = document.querySelector('.block-notify-above-header');

   if (!notify) return;

   let closed = false;
   try {
      closed = localStorage.getItem(STORAGE_KEY) === '1';
   } catch (e) {}

   if (closed) {
      notify.remove();
      return;
   }

   function updateNotifyHeight() {
      if (document.body.contains(notify)) {
         document.documentElement.style.setProperty('--notify-height', notify.offsetHeight + 'px');
      }
   }

   document.body.classList.add('has-notify-above-header');
   updateNotifyHeight();

   window.addEventListener('resize', updateNotifyHeight);

   const closeBtn = notify.querySelector('.block-notify-above-header__button');

   if (closeBtn) {
      closeBtn.addEventListener('click', function () {
         notify.remove();
         document.body.classList.remove('has-notify-above-header');
         document.documentElement.style.setProperty('--notify-height', '0px');
         window.removeEventListener('resize', updateNotifyHeight);

         try {
            localStorage.setItem(STORAGE_KEY, '1');
         } catch (e) {}
      });
   }
});

// Счётчик блоков во вкладках
document.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.js-block-counter').forEach(function (tabs) {
      tabs.querySelectorAll('.tab[data-tab]').forEach(function (tab) {
         const content = tabs.querySelector('[data-tabcontent="' + tab.dataset.tab + '"]');
         const counter = tab.querySelector('span');
         if (!content || !counter) return;

         const count = content.querySelectorAll('.promotions__item').length;

         counter.textContent = count;
         tab.classList.toggle('zero', count === 0);
      });
   });
});

// Демо-счётчики обратного отсчёта (можно несколько на странице)
document.addEventListener('DOMContentLoaded', function () {
   const counters = document.querySelectorAll('.promotions-banner__counter');
   if (!counters.length) return;

   const pad = function (n) {
      return String(n).padStart(2, '0');
   };

   const items = [];

   counters.forEach(function (counter, index) {
      const numbers = counter.querySelectorAll('.number');
      if (numbers.length < 4) return;

      // Ключ в localStorage: data-counter-id или порядковый номер счётчика
      const key = 'promoCounter_' + (counter.dataset.counterId || index);

      // Стартовое значение берём из разметки
      const d = parseInt(numbers[0].textContent, 10) || 0;
      const h = parseInt(numbers[1].textContent, 10) || 0;
      const m = parseInt(numbers[2].textContent, 10) || 0;
      const s = parseInt(numbers[3].textContent, 10) || 0;
      const duration = (((d * 24 + h) * 60 + m) * 60 + s) * 1000;

      // Дни с ведущим нулём, только если так написано в разметке
      const padDays = numbers[0].textContent.trim().length > 1;

      let end = 0;
      try {
         const saved = JSON.parse(localStorage.getItem(key) || 'null');
         // Если стартовое время в разметке поменяли, начинаем заново
         if (saved && saved.duration === duration) end = saved.end;
      } catch (e) {}

      function restart() {
         end = Date.now() + duration;
         try {
            localStorage.setItem(key, JSON.stringify({ end: end, duration: duration }));
         } catch (e) {}
      }

      if (!end || end <= Date.now()) restart();

      items.push({
         tick: function () {
            let diff = end - Date.now();
            if (diff <= 0) {
               restart();
               diff = duration;
            }

            const days = Math.floor(diff / 86400000);
            diff %= 86400000;
            const hours = Math.floor(diff / 3600000);
            diff %= 3600000;
            const minutes = Math.floor(diff / 60000);
            diff %= 60000;
            const seconds = Math.floor(diff / 1000);

            numbers[0].textContent = padDays ? pad(days) : days;
            numbers[1].textContent = pad(hours);
            numbers[2].textContent = pad(minutes);
            numbers[3].textContent = pad(seconds);
         }
      });
   });

   function tickAll() {
      items.forEach(function (item) {
         item.tick();
      });
   }

   tickAll();
   setInterval(tickAll, 1000);
});