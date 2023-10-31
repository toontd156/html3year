const checkdate = document.querySelector('#checkdate');
const selectroom = document.querySelector('#selectroom');
const selecttime = document.querySelector('#selecttime');
const timecount = document.querySelector('#timecount');
const countpeople = document.querySelector('#countpeople');
const itemaddon = document.querySelector('#itemaddon');
const formsubmitdetail = document.querySelector('#submit-detail');

formsubmitdetail.addEventListener('submit', (e) => {
    e.preventDefault();
    if (checkdate.value == "" || selectroom.value == "" || selecttime.value == "" || timecount.value == "" || countpeople.value == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }
    const data = {
        checkdate: checkdate.value,
        selectroom: selectroom.value,
        selecttime: selecttime.value,
        timecount: timecount.value,
        countpeople: countpeople.value,
        itemaddon: itemaddon.value
    }
})