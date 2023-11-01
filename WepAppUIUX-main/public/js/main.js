// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// ===============================คำขอใช้งาน =====================================
// <!-- คำสั่ง Swal เมื่อคลิกปุ่ม "อนุมัติ" -->
function approveRequest() {
  Swal.fire({
    icon: 'success',
    title: 'อนุมัติเรียบร้อย',
    showConfirmButton: false,
    timer: 1500 // หน่วงเวลาก่อนปิด Swal
  });
}

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// <!-- คำสั่ง Swal เมื่อคลิกปุ่ม "ไม่อนุมัติ" -->
function rejectRequest() {
  Swal.fire({
    icon: 'warning',
    title: 'เหตุผลที่ไม่อนุมัติ',
    input: 'text',
    showCancelButton: true,
    confirmButtonText: 'ยืนยัน',
    cancelButtonText: 'ยกเลิก',
    inputValidator: (value) => {
      if (!value) {
        return 'กรุณากรอกเหตุผลที่ไม่อนุมัติ';
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('ส่งเหตุผลเรียบร้อย', '', 'success');
    }
  });
}


// ============= จัดการห้อง =================







// ================= กดเปลี่ยนหน้า ==============
document.getElementById('showTableButton').addEventListener('click', function() {
  var rightSidebar = document.getElementById('rightSidebar');
  if (rightSidebar.style.display === 'none') {
      rightSidebar.style.display = 'block'; // แสดงแถบขวาเมื่อคลิกที่ปุ่ม
  } else {
      rightSidebar.style.display = 'none'; // ซ่อนแถบขวาเมื่อคลิกอีกครั้ง
  }
});