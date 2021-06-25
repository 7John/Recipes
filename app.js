const log=console.log;function initDropdown(e){document.addEventListener("click",function(t){if(t.target.matches(e+" .drop"))if(t.target.parentElement.classList.contains("dropdown__active"))t.target.parentElement.classList.remove("dropdown__active");else{var o=document.querySelectorAll(e+" .dropdown");Array.prototype.forEach.call(o,function(e){e.classList.remove("dropdown__active")}),t.target.parentElement.classList.add("dropdown__active")}})}function initArrows(){document.addEventListener("click",function(e){let t=document.querySelectorAll(".dropdown"),o=document.querySelectorAll(".drop__arrow");for(var l=0;l<t.length;l++)t[l].classList.contains("dropdown__active")?o[l].classList.add("arrow__up"):o[l].classList.remove("arrow__up")})}function initDetails(e){document.addEventListener("click",function(e){if(e.target.matches(".select__details")){var t=document.querySelector(".select__arrow");e.target.firstElementChild.classList.contains("details__cnr-show")?(e.target.firstElementChild.classList.remove("details__cnr-show"),t.classList.remove("select__arrow-active")):(e.target.firstElementChild.classList.add("details__cnr-show"),t.classList.add("select__arrow-active"))}})}initDropdown(".drop__container"),window.onclick=function(e){if(!e.target.matches(".dropdown, .drop, .drop__links"))for(var t=document.getElementsByClassName("dropdown"),o=document.querySelectorAll(".drop__arrow"),l=0;l<t.length;l++){var s=t[l];s.classList.contains("dropdown__active")&&(s.classList.remove("dropdown__active"),o[l].classList.remove("arrow__up"))}},initArrows("dropdown"),window.addEventListener("click",function(e){var t=document.querySelector(".form__img"),o=document.querySelector(".form__text"),l=document.querySelector(".form__submit");e.target.matches(".form__img")?(t.classList.add("form__img-hide"),o.classList.add("form__text-show"),l.classList.add("form__submit-show")):e.target.matches(".form__text")||(t.classList.remove("form__img-hide"),o.classList.remove("form__text-show"),l.classList.remove("form__submit-show"))}),initDetails("select"),window.addEventListener("click",function(e){if(!e.target.matches(".select__details, .details__item, .details__title, .details__list")){log("sdf");var t=document.querySelector(".details__cnr"),o=document.querySelector(".select__arrow");t.classList.contains("details__cnr-show")&&t.classList.remove("details__cnr-show"),o.classList.contains("select__arrow-active")&&o.classList.remove("select__arrow-active")}});for(var acc=document.getElementsByClassName("details__title"),i=0;i<acc.length;i++)acc[i].addEventListener("click",function(e){if(e.target.matches(".details__title"))if(e.target.parentElement.classList.contains("details__item-show"))e.target.parentElement.classList.remove("details__item-show");else{var t=document.querySelectorAll(".details__item");Array.prototype.forEach.call(t,function(e){e.classList.remove("details__item-show")}),e.target.parentElement.classList.add("details__item-show")}});function scrollFunction(){let e=document.getElementById("header"),t=document.getElementById("header__icons"),o=document.getElementById("leaf__img"),l=document.getElementById("line__left"),s=document.getElementById("line__right");document.body.scrollTop>80||document.documentElement.scrollTop>80?(e.setAttribute("style","height: 40px; box-shadow: 4px 0px 5px #2f3032;"),t.style.height="40px",o.setAttribute("style","transform: translateY(-21px); width: 30px; margin: 0 auto"),l.style.display="none",s.style.display="none"):document.body.scrollTop>30||document.documentElement.scrollTop>30?o.setAttribute("style","transform: translateY(-33px); width: 30px; margin: 0 auto"):window.innerWidth<=768||document.documentElement.clientWidth<=768?(e.setAttribute("style","height: 52px"),t.style.height="52px",o.setAttribute("style","transform: translateY(0px); width: 40px; margin: 0 auto"),l.style.display="block",s.style.display="block"):(e.setAttribute("style","height: 66px; box-shadow: none;"),t.style.height="66px",o.setAttribute("style","transform: translateY(-5px); width: 50px;"),l.style.display="block",s.style.display="block")}function headerOnload(){this.event.preventDefault();let e=document.getElementById("header"),t=document.getElementById("header__icons"),o=document.getElementById("leaf__img"),l=document.getElementById("line__left"),s=document.getElementById("line__right");window.innerWidth<=768||document.documentElement.clientWidth<=768?(e.setAttribute("style","height: 52px"),t.style.height="52px",o.setAttribute("style","transform: translateY(0px); width: 40px; margin: 0 auto"),l.style.display="block",s.style.display="block"):(e.setAttribute("style","height: 46px; box-shadow: none;"),t.style.height="46px",o.setAttribute("style","transform: translateY(-5px); width: 50px;"),l.style.display="block",s.style.display="block")}function ingredients(){var e=document.getElementsByClassName("card__ingredients"),t=document.getElementsByClassName("card__ingredients-new");if(window.outerWidth<867||document.documentElement.clientWidth<867){for(var o=0;o<e.length;o++)e[o].style.display="none";for(o=0;o<t.length;o++)window.outerWidth<=768||document.documentElement.clientWidth<=768?t[o].style.display="none":t[o].style.display="block";if(window.outerWidth<=566||document.documentElement.clientWidth<=566)for(o=0;o<e.length;o++)e[o].style.display="block";if(window.outerWidth<=481||document.documentElement.clientWidth<=481)for(o=0;o<e.length;o++)e[o].style.display="none",t[o].style.display="block";if(window.outerWidth<=372||document.documentElement.clientWidth<=372)for(o=0;o<e.length;o++)e[o].style.display="none",t[o].style.display="none"}else if(window.outerWidth<=768||document.documentElement.clientWidth<=768){for(o=0;o<e.length;o++)e[o].style.display="none";for(o=0;o<t.length;o++)t[o].style.display="none"}else{for(o=0;o<e.length;o++)e[o].style.display="block";for(o=0;o<t.length;o++)t[o].style.display="none"}}function loadDrop(){var e=document.getElementsByClassName("card__ingredients"),t=document.getElementsByClassName("card__ingredients-new");if(window.outerWidth<867||document.documentElement.clientWidth<867){for(var o=0;o<e.length;o++)e[o].style.display="none";for(o=0;o<t.length;o++)window.outerWidth<=768||document.documentElement.clientWidth<=768?t[o].style.display="none":t[o].style.display="block";if(window.outerWidth<566||document.documentElement.clientWidth<566)for(o=0;o<e.length;o++)e[o].style.display="block";if(window.outerWidth<=481||document.documentElement.clientWidth<=481)for(o=0;o<e.length;o++)e[o].style.display="none",t[o].style.display="block";if(window.outerWidth<=372||document.documentElement.clientWidth<=372)for(o=0;o<e.length;o++)e[o].style.display="none",t[o].style.display="none"}else if(window.outerWidth<=768||document.documentElement.clientWidth<=768){for(o=0;o<e.length;o++)e[o].style.display="none";for(o=0;o<t.length;o++)t[o].style.display="none"}else{for(o=0;o<e.length;o++)e[o].style.display="block";for(o=0;o<t.length;o++)t[o].style.display="none"}}function initCards(e){document.addEventListener("click",function(t){t.target.matches(e+" .card-social__svg")&&(t.target.parentElement.classList.contains("active")?t.target.parentElement.classList.remove("active"):t.target.parentElement.classList.add("active"))})}window.onscroll=function(){scrollFunction()},window.onload=function(){headerOnload()},window.onresize=function(){ingredients()},window.onload=function(){loadDrop()},$(function(){$(".center").slick({centerMode:!0,centerPadding:0,slidesToShow:5,responsive:[{breakpoint:768,settings:{adaptiveHeight:!0,autoplay:!0,autoplaySpeed:3e3,arrows:!0,centerMode:!0,centerPadding:0,slidesToShow:5}},{breakpoint:566,settings:{adaptiveHeight:!0,autoplay:!0,autoplaySpeed:3e3,arrows:!1,centerMode:!0,centerPadding:0,slidesToShow:3}},{breakpoint:480,settings:{autoplay:!0,autoplaySpeed:3e3,arrows:!1,centerMode:!0,centerPadding:0,slidesToShow:3}}]})}),initCards(".cards"),document.querySelector(".nav__darkMode").onclick=function(e){var t=document.querySelector("body"),o=document.querySelectorAll(".container"),l=document.querySelector(".form__img"),s=document.querySelector(".header"),n=document.querySelectorAll(".choose__title"),r=document.querySelector(".drop__details"),i=document.querySelector(".drop__recipes"),c=document.querySelector(".select__ingred"),d=document.querySelector(".select__details"),a=document.querySelector(".details__cnr"),m=document.querySelectorAll(".recipes__item"),_=document.querySelector(".recipes2__sort"),u=document.querySelector(".recipes2__sort").children,g=document.querySelectorAll(".card__item"),y=document.querySelectorAll(".card__content"),p=document.querySelectorAll(".card__title"),h=document.querySelectorAll(".card__ingredients"),f=document.querySelectorAll(".card-social"),w=document.querySelectorAll("card-social__svg"),v=document.querySelectorAll(".card-social__num"),L=document.querySelectorAll(".card-content__text"),k=document.querySelectorAll(".card-content__item"),S=(document.querySelector(".card-content__item").children,document.querySelectorAll(".hotRecipes__item")),E=document.querySelectorAll(".title"),q=document.querySelector(".slick-next"),b=document.querySelector(".slick-prev"),x=document.querySelectorAll(".sliderImg"),A=document.querySelector(".center"),W=document.querySelector(".mailing"),B=document.querySelector(".mailing__title"),C=document.querySelector(".mailing__btn");t.classList.toggle("body-dark");for(let e of o)e.classList.toggle("container-dark");for(var I of(l.classList.toggle("form__img-dark"),s.classList.toggle("header-dark"),n))I.classList.toggle("choose__title-dark");for(var I of(r.classList.toggle("drop__details-dark"),i.classList.toggle("drop__recipes-dark"),c.classList.toggle("select__ingred-dark"),d.classList.toggle("select__details-dark"),a.classList.toggle("details__cnr--dark"),m))I.classList.toggle("recipes__item-dark");for(var I of(_.classList.toggle("recipes2__sort-dark"),u))I.classList.toggle("recipes2__link-dark");for(var I of g)I.classList.toggle("card__item-dark");for(var I of y)I.classList.toggle("card__content-dark");for(var I of p)I.classList.toggle("card__title-dark");for(var I of h)I.classList.toggle("card__ingredients-dark");for(var I of f)I.classList.toggle("cardSocial-dark");for(var I of w)I.classList.toggle("cardSsocial__svg-dark");for(var I of v)I.classList.toggle("cardSocial__num-dark");for(var I of L)I.classList.toggle("cardContent__text-dark");for(var I of k)I.classList.toggle("cardContent__item-dark");for(var I of S)I.classList.toggle("hotRecipes__item-dark");for(var I of E)I.classList.toggle("title-dark");for(var I of(q.classList.toggle("slickNext-dark"),b.classList.toggle("slickPrev-dark"),x))I.classList.toggle("sliderImg-dark");A.classList.toggle("center-dark"),W.classList.toggle("mailing-dark"),B.classList.toggle("mailing__title-dark"),C.classList.toggle("mailing__btn-dark")};