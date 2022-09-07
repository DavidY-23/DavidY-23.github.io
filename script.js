function aboutMe() {
    document.getElementById("paragraphs").innerHTML = `<p>hello, im david i code, study japanese, game, consume media, and enjoy walks/biking. ill probably work on this site more, but for now i enjoy the minimalistic look</p>
    <p id="about" onclick="mainPage()">go back.</p>`
}

function mainPage() {
    document.getElementById("paragraphs").innerHTML = `<p id="about" onclick="aboutMe()">about me.</p>
    <a href="https://www.linkedin.com/in/davidye23/" target="_blank"><p>linkedin.</p></a>
    <a href="https://github.com/DavidY-23/" target="_blank"><p>github.</p></a>
    <a href="Ye,David_Resume.pdf" target="_blank"><p>resume.</p></a>`
}
