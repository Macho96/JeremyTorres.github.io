// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
//#region CONST TEXT
HOME=$("#home");
ABOUT=$("#ab");
TABOUT =$("#tAbout");
ABOUTTEXT=$("#aboutText");
CONTACT=$("#cont");
CONTACTBTN=$("#contactbtn");
TCONTACT=$("#tContactM");
PNAME=$("#pName");
PSUB=$("#pSub");
PMSG=$("#pMsg");
BTNSEND=$("#btnSend");
TCONTACT=$("#tContactM");
SKILLS=$("#sk");
TSKILLS=$("#tSkill");
TFRAMEWORK=$("#tFramework");
//PORTFOLIO=$("#port");
//TPORTFOLIO=$("#tportfolio");
XP=$("#xp");
WORK=$("#work");
DATE1=$("#date1");
WORK1=$("#work1");
JOB1=$("#job1");
JOB1D=$("#job1d");
PROFESION=$("#profesion");
EDUCATION=$("#tEducation");
DEGREE=$("#degree");
CARRER=$("#carrer");
UNIVERSITY=$("#university");
CV=$("#download");
TGIT=$("#tGit");
TLINK=$("#tLink");
TINSTA=$("#tInsta");
PROFILE=$("#profile");
BTNCLOSE=$("#btnclose");
ES=$("#ES");
EN=$("#EN");
LANG=$("#lang");
TINFO=$("#tInfo");
AGE=$("#age");
EMAIL=$("#email");
PHONE=$("#phone");
ADDRESS=$("#address");
LAN=$("#lan");
LANGUAGEKNOW=$("#languageKnow"); 

_lang=localStorage.getItem('lang');
//#endregion


function loadLenguaje(language){
    HOME.text(language["home"]);
    ABOUT.text(language["about"]);
    TABOUT.text(language["about"]);
    ABOUTTEXT.text(language["aboutText"]);
    TINFO.text(language["info"]);
    CONTACT.text(language["contact"]);
    TCONTACT.text(language["contact"]);
    CONTACTBTN.text(language["contact"]);
    PNAME.text(language["pName"]);
    PSUB.text(language["pSub"]);
    PMSG.text(language["pMsg"]);
    BTNSEND.text(language["btnSend"]);
    SKILLS.text(language["skills"]);
    TSKILLS.text(language["skills"]);
    TFRAMEWORK.text(language["framework"]);
    //PORTFOLIO.text(language["portfolio"]);
    //TPORTFOLIO.text(language["portfolio"]);
    XP.text(language["xp"]);
    WORK.text(language["work"]);
    DATE1.text(language["date1"]);
    WORK1.text(language["work1"]);
    JOB1.text(language["job1"]);
    JOB1D.text(language["job1d"]);
    PROFESION.text(language["profesion"]);
    EDUCATION.text(language["education"]);
    DEGREE.text(language["degree"]);
    CARRER.text(language["carrer"]);
    UNIVERSITY.text(language["university"]);
    CV.text(language["download"]);
    TGIT.tooltip('hide').attr('data-original-title', language["tGit"]);
    TLINK.tooltip('hide').attr('data-original-title', language["tLink"]);
    TINSTA.tooltip('hide').attr('data-original-title', language["tInsta"]);
    PROFILE.text(language["profile"]);
    BTNCLOSE.text(language["close"]);
    ES.text(language["es"]);
    EN.text(language["en"]);
    AGE.text(language["age"]);
    EMAIL.text(language["email"]);
    PHONE.text(language["phone"]);
    ADDRESS.text(language["address"]);
    LAN.text(language["lan"]);
    LANGUAGEKNOW.text(language["languageKnow"]);
}

LANG.change(function() {
  _lang=LANG.val();
  localStorage.setItem('lang',""+_lang);
  window.location.reload()
});
function downloadCV(){
  if(_lang=="es-ES"){
    //open new tab cv
    alert("download spanish")
  }else{
    //open new tab cv
    alert("download english")
  }
}

$(document).ready(function() {
  AOS.init( {

    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
  $.getJSON("/lenguaje.json", function(json) {
    if(_lang){
      console.log("local :" + _lang)
      LANG.val(_lang);
      loadLenguaje(json[_lang]);
    }else{
      console.log("browser")
    var lang = navigator.language || navigator.userLanguage;
    localStorage.setItem('lang',""+lang);
    LANG.val(lang);
    loadLenguaje(json[lang]);
  }
});
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
