var figure = document.getElementById('figure')
var counter = 1;

function changeSource() {
    setInterval(() => {
        if (counter <= 5) {
            figure.innerHTML =
            `<img src="images/img${counter}.jpg" alt="img${counter}">`
            counter++;
        } else {
            counter = 1;
            console.log(counter)
        }
    }, 3000); 
    

}
changeSource();


