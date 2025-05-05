const showProgram = function () {
    let randomImage = "program" + Math.floor(Math.random() * 138) + ".jpg";
    let imageBox = document.querySelector('#program');
    imageBox.innerHTML = `<img src="assets/img/${randomImage}">`;
};