var darkMode = false;

function buttonFunction() {
    if(darkMode) {
    document.getElementsByTagName("body")[0].setAttribute("id", "");
    darkMode = false;
    } else {
    document.getElementsByTagName("body")[0].setAttribute("id", "darkMode");
    darkMode = true;
    }
}
let slideIndex = 0;
let certs = ["Certificate.pdf", "html.pdf", "Print Transcript.pdf", "osha cert.pdf", "Cybersecurity cert.pdf"]
let names = ["Tech Fundementals", "HTML/CSS", "Data Analytics", "OSHA", "Cybersecurity"]
let descs = [" ", " "," "," ", " "]
function setSlide(addd) {
    slideIndex += addd
    if(slideIndex < 0) {
        slideIndex = certs.length - 1
        
    }
    if (slideIndex > certs.length - 1) {
        slideIndex = 0
    }
    document.getElementsByTagName("iframe")[0].setAttribute("src", certs[slideIndex]);
    document.getElementById("titledesc").innerHTML = names[slideIndex];
    document.getElementById("desc").innerHTML = descs[slideIndex];

}