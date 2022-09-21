
// ABOUT ME SECTION LOGIC


let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// SIDE MENU ANIMATION LOGIC

let sideMenu = document.getElementById("sidemenu");

function openMenu(){
    sideMenu.style.right="0";
}

function closeMenu(){
    sideMenu.style.right="-200px";
}


// ---------------------Contact Form Script Logic-----------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbyEriG0rxAhT0-WAKkPLO_vDiaT5X_CBU0DCbnc-TZetw-CUN-0URyevU_w0iQPqXkJRA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Succesfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })