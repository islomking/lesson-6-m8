let qr;

  function generateQRCode() {
    const text = document.getElementById("text").value;
    const darkColor = document.getElementById("darkColor").value;
    const lightColor = document.getElementById("lightColor").value;
    document.getElementById("qrcode").innerHTML = "";
    qr = new QRCode(document.getElementById("qrcode"), {
      text: text,
      width: 200,
      height: 200,
      colorDark: darkColor,
      colorLight: lightColor,
      correctLevel: QRCode.CorrectLevel.H
    });
  }