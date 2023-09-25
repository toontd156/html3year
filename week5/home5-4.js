const assets = [
    { "id": 662500200564001, "name": "laptop", "status": 1, "image": "1665382383102.jpg" },
    { "id": 673000100364002, "name": "projector", "status": 0, "image": "1665566532088.jpg" },
    { "id": 744001200561020, "name": "UPS", "status": 0, "image": "1665544789222.jpg" }
];

const tableBody = document.querySelector('#table-body');
const boxQrcode = document.querySelector('#qrcode');
loadData();
function loadData() {
    for (let i = 0; i < assets.length; i++) {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <input type="checkbox" name="checkbox" id="checkbox" class="form-check-input" onclick="createQrcode()">
            </td>
            <td>${assets[i].id}</td>
            <td>${assets[i].name}</td>
            <td>${assets[i].status == 1 ? 'Nomal' : 'Last' }</td>
        `
        tableBody.append(row)
    }
}

function createQrcode() {
    const listId = [];
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            listId.push(checkbox[i].parentElement.nextElementSibling.textContent);
        }
    }
    if (listId.length == 0) {
        alert('Please select at least one item');
        return;
    }
    boxQrcode.innerHTML = '';
    for (let i = 0; i < listId.length; i++) {
        const qrcode = document.createElement('div');
        qrcode.innerHTML = `
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${listId[i]}" alt="">
            <p>${listId[i]}</p>
        `
        boxQrcode.append(qrcode);
    }
}
