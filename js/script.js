var lightMode = document.getElementById("lightMode");
var darkMode = document.getElementById("darkMode");
var pureBlackMode = document.getElementById("pureBlackMode");
var caresTA = document.getElementById("caresTextArea");
var notesTA = document.getElementById("notesTextArea");

/* ----------- Notes Hub ----------- */
function openMainNotes() {
  window.open('MasonNotes.html', 'mywindow', 'toolbar=no,.focus()location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=yes,resizable=no,width=333,height=975,');
  window.open('MasonNotes.html', 'mywindow', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=yes,resizable=no,width=800,height=600');
}

function openTestNotes() {
  window.open('test.html', 'mywindow', 'toolbar=no,.focus()location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=yes,resizable=no,width=333,height=975,');
  window.open('test.html', 'mywindow', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=yes,resizable=no,width=800,height=600');
}

function openNotesV2() {
  window.open('MasonNotesV2.html', 'mywindow', 'toolbar=no,.focus()location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=yes,resizable=no,width=333,height=800,');
  window.open('MasonNotesV2.html', 'mywindow', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=yes,resizable=no,width=800,height=600');  
}
/* ----------- End of Hub scripts -----------  */

/* ----------- Main scripts -----------  */
// forgot pw button
function openForgotPassword() {
  var forgotPasswordPopUp = window.open("https://www.squaretrade.com/user/password", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=0,left=500,width=980,height=480");
}

//setting button
function showSettings() {
    document.getElementById("settingsDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//theme change
function openLightMode() {
  onclick="location.href='MasonNotes_Light.html'";
}
function openDarkMode() {

}
function openBlackMode() {
  
}

function fillCares() {
  caresTA.value = " Company ID: \n Name: \n EE: ";
}

function fillNotes() {
  notesTA.value = "Notes: \n       \n       \n       \n       ";
}