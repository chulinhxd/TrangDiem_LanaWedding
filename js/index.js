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
