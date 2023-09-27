const getPage = document.querySelector('input[name="countpaper"]');
const blackwhite = document.querySelector('input[id="black"]');
const color = document.querySelector('input[id="color"]');
const twoside = document.querySelector('input[name="check"]');
const btn = document.querySelector('button[type="submit"]');
const price = document.querySelector('#printcount');

btn.addEventListener('click', function (e) {
    let total = 0;
    if (!getPage.value) {
        alert('Please input number of pages');
        return
    }

    if (!blackwhite.checked && !color.checked) {
        alert('Please choose color or black-white');
        return
    }

    if (blackwhite.checked) {
        total = getPage.value * 2;
    }
    if (color.checked) {
        total = getPage.value * 5;
    }

    if (twoside.checked) {
        total = total - (0.2 * total);
    }

    if (total > 0.5) {
        total = Math.ceil(total);
    }else {
        total = Math.floor(total);
    }

    price.innerHTML = 'Price: ' + total;
});