let checkBox = document.getElementById('petcheck');
let selectDiv = document.getElementById('petSelect');

checkBox.addEventListener('change', function(event) {
    if (checkBox.checked == true) {
        selectDiv.style.display = "Block";
    } else {
        selectDiv.style.display = "None"
    }
});

let saveForm = document.getElementById('saveForm');

saveForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameText = saveForm.elements[0].value;
    const addressText = saveForm.elements[1].value;
    const ageText = saveForm.elements[2].value;
    const hasPets = saveForm.elements[3].checked
    let petText = "No pets";

    if (nameText == "") {
        alert('Please Enter A Name');
        return;
    }
     if (addressText == "") {
        alert('Please Enter An Address');
        return;
    }
     if (ageText == "") {
        alert('Please Enter An Age');
        return;
    }

    if (hasPets) {
        petText = saveForm.elements[4].value;
    }

    if (petText == 'dog') {
        alert("Sorry, dog capacity is full :(")
        return;
    }

    alert('Booking Saved! Info: \n' +
     nameText + '\n' + 
     addressText + '\n' + 
     ageText + "\n" + petText)

});
// alert('hiya')
