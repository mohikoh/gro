// Range for price
function initPriceRange() {
    document.querySelectorAll('.rangeslider').forEach((parent) => {
        const minInput = parent.querySelector('.min');
        const maxInput = parent.querySelector('.max');
        const track = parent.querySelector('.rangeslider__track');

        if (!minInput || !maxInput || !track) {
            console.warn('Не найден input или .rangeslider__track', parent);
            return;
        }

        function updateRange() {
            const minValue = Number(minInput.min);
            const maxValue = Number(minInput.max);
            const range = maxValue - minValue || 1;

            const min = Number(minInput.value);
            const max = Number(maxInput.value);

            const start = ((min - minValue) / range) * 100;
            const end = ((max - minValue) / range) * 100;

            track.style.setProperty('--range-start', `${start}%`);
            track.style.setProperty('--range-width', `${end - start}%`);

            console.log({
                min,
                max,
                start,
                width: end - start
            });
        }

        minInput.addEventListener('input', updateRange);
        maxInput.addEventListener('input', updateRange);

        updateRange();
    });
}
document.addEventListener('DOMContentLoaded', initPriceRange);

document.addEventListener('reset', (event) => {
    setTimeout(() => {
        const form = event.target;

        form.querySelectorAll('.rangeslider').forEach((parent) => {
            const minInput = parent.querySelector('.min');
            const maxInput = parent.querySelector('.max');
            const track = parent.querySelector('.rangeslider__track');

            if (!minInput || !maxInput || !track) return;

            const minValue = Number(minInput.min);
            const maxValue = Number(minInput.max);
            const range = maxValue - minValue || 1;

            const min = Number(minInput.value);
            const max = Number(maxInput.value);

            const start = ((min - minValue) / range) * 100;
            const end = ((max - minValue) / range) * 100;

            track.style.setProperty('--range-start', `${start}%`);
            track.style.setProperty('--range-width', `${end - start}%`);
        });
    }, 0);
}, true);