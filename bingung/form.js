function showData() {
    // *PENGAMBILAN NILAI*
    
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    // *PENGIRIMAN NILAI*

    document.getElementById("name").value = ""
 
    // *VALIDATE CONDITION*

    if (name == "") {
        alert("nama tidak boleh kosong")
        return
    }

    if (email == "") {
        alert("email tidak boleh kosong")
        return
    }

    if (phone == "") {
        alert("phone number tidak boleh kosong")
        return
    }

    if (subject == "") {
        alert("subject tidak boleh kosong")
        return
    }

    if (message == "") {
        alert("message tidak boleh kosong")
        return
    }

    // *PROSES EMAIL*

    // DOM membuat element
    let emailReceiver = 'seandanaiwa@gmail.com'

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name is ${name}, ${subject}, ${message}, this is my number ${phone}. Please contact me ASAP, Thank you`

    a.click()

    // *MEMBUAT OBJECT*

    let dataObject = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.table(dataObject);
}
