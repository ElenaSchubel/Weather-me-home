(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},3:function(e,t,n){e.exports=n(4)},4:function(e,t,n){"use strict";n.r(t);var o=n(0);n(1),n(6),n(11);!function(){var e={teamIn:["basketball","hockey","volleyball"],teamOutWarm:["softball/baseball","football/soccer","American football","rowing","tennis","volleyball","ultimate frisbee","rugby"],teamOutCold:["hockey"],soloIn:["rock climbing","swimming","ice skating"],soloOutWarm:["rowing","running","hiking","cycling","rock climbing"],soloOutCold:["snowshoeing","downhill skiing","cross-country skiing","ice skating"]},t={},n="all";function i(i){if(void 0!==i&&i.target.classList.contains("selected"))return!0;function c(i){var c;if("solo"===n)(c=t.activities).push.apply(c,Object(o.a)(e["solo"+i]));else if("team"===n){var a;(a=t.activities).push.apply(a,Object(o.a)(e["team"+i]))}else{var l,r;(l=t.activities).push.apply(l,Object(o.a)(e["solo"+i])),(r=t.activities).push.apply(r,Object(o.a)(e["team"+i]))}}void 0===i||i.target.classList.contains("selected")||(n=i.target.id,document.querySelectorAll(".options div").forEach(function(e){e.classList.remove("selected")}),i.target.classList.add("selected")),t.activities=[],"Rain"===t.condition?c("In"):"Snow"===t.condition||t.degFInt<50?c("OutCold"):c("OutWarm");var a=document.querySelector(".activities"),l=document.createElement("div"),r=document.createElement("ul");t.activities.forEach(function(e,t){var n=document.createElement("li");n.setAttribute("key",t),n.textContent=e,r.appendChild(n)}),l.appendChild(r),document.querySelector(".activities div")?a.replaceChild(l,document.querySelector(".activities div")):a.appendChild(l),document.querySelector(".results").classList.add("open")}document.querySelector(".forecast-button").addEventListener("click",function(e){e.preventDefault();var n=document.querySelector("#location").value;document.querySelector("#location").value="",fetch("http://api.openweathermap.org/data/2.5/weather?q="+n+"&appid=c7f8d1ff04530c06077e107bb5c759ed").then(function(e){return e.json()}).then(function(e){!function(e){var n=e.main.temp-273.15,o=Math.floor(n),c=1.8*n+32,a=Math.floor(c);t={condition:e.weather[0].main,icon:"http://openweathermap.org/img/w/"+e.weather[0].icon+".png",degCInt:Math.floor(o),degFInt:Math.floor(a),city:e.name};var l=document.querySelector(".conditions"),r=document.createElement("div"),d=document.createElement("p");d.setAttribute("class","city"),d.textContent=t.city;var s=document.createElement("p");s.textContent="".concat(t.degCInt,"\xb0 C / ").concat(t.degFInt,"\xb0 F");var u=document.createElement("img");u.setAttribute("src",t.icon),u.setAttribute("alt",t.condition),s.appendChild(u),r.appendChild(d),r.appendChild(s),document.querySelector(".conditions div")?l.replaceChild(r,document.querySelector(".conditions div")):l.appendChild(r);i()}(e)}).catch(function(){document.querySelector(".conditions").textContent="Weather information unavailable"})},!1),document.querySelectorAll(".options div").forEach(function(e){e.addEventListener("click",i,!1)})}()}},[[3,1,2]]]);
//# sourceMappingURL=main.534055d1.chunk.js.map