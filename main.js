function book() {
    var section = document.getElementById("book_button");
    section.style.display = "block";

    var package1 = document.getElementById("packageRadio1")
    var package2 = document.getElementById("packageRadio2")
    var package3 = document.getElementById("packageRadio3")
    package1.checked = false;
    package2.checked = false;
    package3.checked = false;

    var size1 = document.getElementById("sizeRadio1")
    var size2 = document.getElementById("sizeRadio2")
    var size3 = document.getElementById("sizeRadio3")
    size1.checked = false;
    size2.checked = false;
    size3.checked = false;

    var groomer4 = document.getElementById("groomerRadio4")
    groomer4.checked = true;

    var message = document.getElementById('date');
    message.value = '';

    document.getElementById('time').selectedIndex = 0;

    var frequency1 = document.getElementById("frequencyRadio1")
    frequency1.checked = true;

    var message = document.getElementById('name');
    message.value = '';
    var message = document.getElementById('email');
    message.value = '';
    var message = document.getElementById('dog');
    message.value = '';
    var message = document.getElementById('comment');
    message.value = '';
  }

function message() {
    var section = document.getElementById("message_button");
    section.style.display = "block";

    var message = document.getElementById('textarea_message');
    message.value = '';
  }