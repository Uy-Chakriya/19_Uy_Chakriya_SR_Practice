const number = document.getElementById("number");
        const show = document.getElementById("show");

       function validatePhone() {
    const phoneNumber = number.value.trim();
    const phoneNumberRegex = /^0\d{2}\d{3}\d{3,4}$/;

    if (phoneNumber === "") {
        show.innerHTML = `<span class="text-yellow-600">Please enter a phone number</span>`;
     
    }

    if (phoneNumberRegex.test(phoneNumber)) {
        show.innerHTML = `<span class="text-green-500">Valid phone number</span>`;
    } else {
        show.innerHTML = `<span class="text-red-500">Invalid phone number</span>`;
    }
}