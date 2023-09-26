document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("qrCodeForm");
    const inputText = document.getElementById("inputText");
    const output = document.getElementById("output");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior
        
        const inputValue = inputText.value.trim();

        if (inputValue) {
            generateQRCode(inputValue);
            generateBarcode(inputValue);
        } else {
            alert("Please enter a URL or text.");
        }
    });

    function generateQRCode(text) {
        const qrCode = new QRCode(document.createElement("div"), {
            text: text,
            width: 128,
            height: 128,
        });

        output.innerHTML = "";
        output.appendChild(qrCode._el);
    }

    function generateBarcode(text) {
        const canvas = document.createElement("canvas");
        JsBarcode(canvas, text, { format: "CODE128" });

        output.appendChild(canvas);
    }
});
