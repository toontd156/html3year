const assets = [
    { "id": 662500200564001, "name": "laptop", "status": 1, "image": "1665382383102.jpg" },
    { "id": 673000100364002, "name": "projector", "status": 0, "image": "1665566532088.jpg" },
    { "id": 744001200561020, "name": "UPS", "status": 0, "image": "1665544789222.jpg" }
];

const tablebody = document.querySelector('#tbody');
const qrocde = document.querySelector('#qrocde');

listItem();
function listItem(){
    for (let i = 0; i < assets.length; i++ ) {
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <input type = "checkbox" id="checkbox" class="form-check-input" onclick="CreateQRCode()">
            </td>
            <td>${assets[i].id}</td>
            <td>${assets[i].name}</td>
            <td>${assets[i].status == 1 ? 'Normal' : 'List'}</td>
        
        `
        tablebody.append(row)
    }
}


function CreateQRCode() {
    const list = []
    for(let i = 1; i < checkbox.length; i++) {
        if (checkbox[i].checked){
            list.push(checkbox[i].parentElement.nextElementSibling.textContent);
        }
    }
    qrocde.innerHTML
    for (let i = 0; i < list.length; i++) {
        const qrcode = document.createElement('div');
        qrcode.innerHTML = `
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${list[i]}" alt="">
            <p>${list[i]}</p>
        `
        qrocde.append(qrcode);
    }
}