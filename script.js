import $ from "https://cdn.skypack.dev/jquery@3.6.0";
import * as platform from "https://cdn.skypack.dev/platform@1.3.6";

const se = new Audio("https://otologic.jp/sounds/se/pre/Camera-Phone03-2.mp3");
se.play();

let c = 604800

setInterval(() => {
  $("#hour").text(Math.floor(c / 3600));
  $("#min").text(Math.floor((c % 3600) / 60));
  $("#sec").text(Math.floor(c % 60));
  c = c - 1;
}, 1000)

$("#date").text(new Date().toLocaleString());

$("#user").text(platform.description);
