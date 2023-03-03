//#region CONST TEXT
HOME=$("#home");
ABOUT=$("#about");
CONTACT=$("#contact");
SKILLS=$("#skills");
CONTACTBTN=$("#contactbtn");
PORFOLIO=$("#portfolio");
XP=$("#xp");
PROFESION=$("#profesion");
CV=$("#download");
//#endregion


function loadLenguaje(language){
    HOME.text(language["home"]);
    ABOUT.text(language["about"]);
    CONTACT.text(language["contact"]);
    PORFOLIO.text(language["portfolio"]);
    XP.text(language["xp"]);
    PROFESION.text(language["profesion"]);
    CONTACTBTN.text(language["contact"]);
    CV.text(language["download"]);
}

window.onload =()=>{
$.getJSON("/lenguaje.json", function(json) {
    var lang = navigator.language || navigator.userLanguage; 
    loadLenguaje(json[lang]);
    console.log(json[""+lang]); // this will show the info it in firebug console
});
}