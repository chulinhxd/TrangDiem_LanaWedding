function submitLienHeForm(event) {
  event.preventDefault(); //dừng load lại trang

  var footerFormFullname = document.getElementById("footerFormFullname").value;
  var footerFormMobiphone = document.getElementById(
    "footerFormMobiphone"
  ).value;

  var khachHang = new KhachHangLienHe(footerFormFullname, footerFormMobiphone);
  console.log(khachHang);
  //   alert("chào")
}
class KhachHangLienHe {
  Fullname = "";
  Mobiphone = "";
  constructor(Fullname, Mobiphone) {
    this.Fullname = Fullname;
    this.Mobiphone = Mobiphone;
  }
}
// JavaScript để xử lý sự kiện click
function chatZaloBtn() {
  var zaloPhoneNumber = "0867272050"; // Thay số điện thoại của bạn vào đây
  var zaloLink = "https://zalo.me/" + zaloPhoneNumber;

  // Mở chat Zalo khi click vào nút
  window.open(zaloLink, "_blank");
}
function phoneCaleBtn() {
  // Kích hoạt chức năng gọi điện
  window.location.href = "tel:0976240820";
}
