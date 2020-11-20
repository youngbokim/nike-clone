function lnbOpen() {
  document.getElementById("lnb").style = "max-height:600px;";
}

function lnbClose() {
  document.getElementById("lnb").style = "max-height:0px;";
}

function lnbShow(lnbNumber) {
  for (i = 0; i < 6; i++) {
    document.getElementsByClassName("lnb_wrap")[i].style = "display:none;";
  }

  document.getElementsByClassName("lnb_wrap")[lnbNumber].style =
    "display:flex;";

  document.getElementById("lnb").style = "animation:fade-in 1s forwards;";
}

function lnbHide() {
  document.getElementById("lnb").style = "animation:fade-out 1s forwards; ";
}

// 모바일 메뉴 코드

function mLnbShow() {
  document.getElementById("main_header").style = "height:auto;";
  document.getElementById("m_lnb").style = "left:0;";
  document.getElementById("m_gnb_main_menubutton_show").style =
    " display:none;";
  document.getElementById("m_gnb_main_menubutton_hide").style =
    " display:block;";
}
function mLnbHide() {
  document.getElementById("m_lnb").style = "left:100vw;";
  document.getElementById("m_gnb_main_menubutton_show").style =
    " display:block;";
  document.getElementById("m_gnb_main_menubutton_hide").style =
    " display:none;";
  document.getElementById("main_header").style = "height:60px;";
}

// 모바일 메뉴 아코디온 코드
var mLnbMenuState = [0, 0, 0, 0, 0, 0];
var menulinkState = [0, 0, 0, 0];

function mLnbMenuOpen(menuNumber) {
  for (i = 0; i < 6; i++) {
    document.getElementsByClassName("m_lnb_menu")[i].style =
      " max-height:44px;";

    document.getElementsByClassName("m_lnb_menu_img")[i].style =
      "transform: rotate(0deg);";

    if (mLnbMenuState[menuNumber] == 0) {
      mLnbMenuState[i] = 0;
    }
  }

  if (mLnbMenuState[menuNumber] == 0) {
    document.getElementsByClassName("m_lnb_menu")[menuNumber].style =
      " max-height:600px;";

    document.getElementsByClassName("m_lnb_menu_img")[menuNumber].style =
      "transform: rotate(180deg);";

    mLnbMenuState[menuNumber] = 1;
  } else {
    document.getElementsByClassName("m_lnb_menu")[menuNumber].style =
      " max-height:44px;";

    document.getElementsByClassName("m_lnb_menu_img")[menuNumber].style =
      "transform: rotate(0deg);";

    mLnbMenuState[menuNumber] = 0;
  }
}

document.getElementsByClassName("menulink_ul")[0].style = {};

function menulinkOpen(menuNumber) {
  for (i = 0; i < 4; i++) {
    document.getElementsByClassName("menulink_ul")[i].style =
      "max-height:40px;";

    if (menulinkState[menuNumber] == 0) {
      menulinkState[i] = 0;
    }
  }

  if (menulinkState[menuNumber] == 0) {
    document.getElementsByClassName("menulink_ul")[menuNumber].style =
      "max-height:600px;";

    menulinkState[menuNumber] = 1;
  } else {
    document.getElementsByClassName("menulink_ul")[menuNumber].style =
      "max-height:44px;";

    menulinkState[menuNumber] = 0;
  }
}

var bannerText1 = ["COVID 19 Alert", "Free Shipping", "40% Sale"];
var bannerText2 = ["View Here", "Join Now", "Shop Our Lastest Sale Styles"];
var bannerLink = [
  "https://www.nike.com/covid-19-response",
  "https://www.nike.com/membership",
  "https://www.nike.com/w/sale-3yaep",
];

var bannerBg = ["rgb(207, 61, 99)", "rgb(207,93,100)", "rgb(207,150,150)"];

var textOrder = 0;

// setTimeout(bannerDisplay, 1000);

var displayRepeat = setInterval(bannerDisplay, 1000);

function bannerDisplay() {
  document.getElementById("banner_text_1").innerHTML = bannerText1[textOrder];

  document.getElementById("banner_text_2").innerHTML = bannerText2[textOrder];

  document.getElementById("banner_text_2").href = bannerLink[textOrder];

  document.getElementById("alert_banner").style =
    "background-color:" + bannerBg[textOrder];

  textOrder = textOrder + 1;

  if (textOrder == 3) {
    textOrder = 0;
  }
}
