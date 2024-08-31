const closebutton = document.querySelector("#close-script");
closebutton.addEventListener("click", function close() {
    document.querySelector(".modal-dialog").style.display = "none";
});

const openButton = document.querySelector("#open-button");
openButton.addEventListener('click', function() {
    document.querySelector('.modal-dialog').style.display = 'block';
});
