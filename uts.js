/*Form Validation JS*/

function validasi() {
    let nomorWhatsApp = document.getElementById("nomor").value;
    let validasinomor = document.getElementById("validasinomor");
  
    if (nomorWhatsApp === "") {
      validasinomor.innerText = "*Nomor Whatsapp tidak boleh kosong";
      validasinomor.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    } else if (!nomorWhatsApp.startsWith("+628")) {
      validasinomor.innerText = "*Nomor Whatsapp harus dimulai dengan +628";
      validasinomor.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    } else if (nomorWhatsApp.length < 12) {
      validasinomor.innerText = "*Nomor Whatsapp kurang dari 12 digit";
      validasinomor.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    } else if (nomorWhatsApp.length > 15) {
      validasinomor.innerText = "*Nomor Whatsapp lebih dari 15 digit";
      validasinomor.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    } else {
      validasinomor.innerText = "";
      validasinomor.classList.remove("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    }
  
    let firstname = document.getElementById("namadepan").value;
    let lastname = document.getElementById("namabelakang").value;
    let validasidepan = document.getElementById("validasidepan");
    let validasibelakang = document.getElementById("validasibelakang");
  
    if (firstname === "" && lastname === "") {
      validasidepan.innerText = "*Nama depan tidak boleh kosong";
      validasidepan.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
      validasibelakang.innerText = "*Nama belakang tidak boleh kosong";
      validasibelakang.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    } else if (firstname === "") {
      validasidepan.innerText = "*Nama depan tidak boleh kosong";
      validasidepan.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
      validasibelakang.innerText = "";
      validasibelakang.classList.remove("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    } else if (lastname === "") {
      validasibelakang.innerText = "*Nama belakang tidak boleh kosong";
      validasibelakang.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
      validasidepan.innerText = "";
      validasidepan.classList.remove("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    } else {
      validasidepan.innerText = "";
      validasidepan.classList.remove("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
      validasibelakang.innerText = "";
      validasibelakang.classList.remove("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    }
  
    var nrp = document.getElementById("nrp");
    let validasinrp = document.getElementById("validasinrp");
    
    if (nrp.value == "") {
    validasinrp.innerText = "*NRP tidak boleh kosong";
    validasinrp.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
    } else {
      var parsedNrp = parseInt(nrp.value);
    
      if (isNaN(parsedNrp) || nrp.value !== parsedNrp.toString()) {
        validasinrp.innerText = "*NRP harus berupa angka";
        validasinrp.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
      } else if (nrp.value.length != 10) {
        validasinrp.innerText = "*NRP harus berjumlah 10 digit.";
        validasinrp.classList.add("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
      } else {
        validasinrp.innerText = "";
        validasinrp.classList.remove("form-control", "form-control-md", "border-0", "inputform", "text-danger", "fw-bold");
      }
    }
}