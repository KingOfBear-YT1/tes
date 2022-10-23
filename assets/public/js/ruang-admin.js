arrBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var txt = "";

txt += "<p><b>Browser</b>: " + navigator.appCodeName + "</p>";
txt += "<p><b>Cookies</b>: " + navigator.cookieEnabled + "</p>";
txt += "<p><b>Platform</b>: " + navigator.platform + "</p>";
txt += "<p><b>User Agent</b>: " + navigator.userAgent + "</p>";
txt += "<p><b>App name</b>: " + navigator.appName + "</p>";

var d = new Date();
const tgl = d.getDate();
const bln = d.getMonth();
const thn = d.getFullYear();
const bulan = arrBulan[bln]

document.getElementById("Statistic").innerHTML = txt
document.getElementById("tgl").innerHTML = tgl
document.getElementById("bln").innerHTML = bulan
document.getElementById("thn").innerHTML = thn

function cb(response) {
    document.getElementById('visits').innerText = response.value
}
function startTime() {
  var xdf = navigator.onLine
  console.log(xdf)
  setInterval(startTime, 1000)
  if(xdf == false){
  const conect = `<div class="alert alert-warning alert-dismissible" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h6><i class="fas fa-exclamation-triangle"></i><b> Warning!</b></h6>
                    Periksa jaringan internet anda
                  </div>`
  document.getElementById("notifini").innerHTML = conect
  }
}
var countDate = new Date('May 13 2021 00:00:00').getTime();

function newYear(){
	var now = new Date().getTime();
	gap = countDate - now;

	var detik = 1000;
	var menit = detik * 60;
	var jam = menit * 60;
	var hari = jam * 24;

	var h = Math.floor(gap / (hari));
	var j = Math.floor( (gap % (hari)) / (jam) );
	var m = Math.floor( (gap % (jam))  / (menit) );
	var d = Math.floor( (gap % (menit))  / (detik) );

	document.getElementById('hari').innerText = h;
	document.getElementById('jam').innerText = j;
	document.getElementById('menit').innerText = m;
	document.getElementById('detik').innerText = d;
}

setInterval( function(){
	newYear();
}, 1000);
(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict

// Modal Javascript

$(document).ready(function () {
  $("#myBtn").click(function () {
    $('.modal').modal('show');
  });

  $("#modalLong").click(function () {
    $('.modal').modal('show');
  });

  $("#modalScroll").click(function () {
    $('.modal').modal('show');
  });

  $('#modalCenter').click(function () {
    $('.modal').modal('show');
  });
});

// Popover Javascript

$(function () {
  $('[data-toggle="popover"]').popover()
});
$('.popover-dismiss').popover({
  trigger: 'focus'
});
fetch("https://viko-api.herokuapp.com/api/about-info")
	 .then(res=>res.json()).then(res=> {
	 document.getElementById("speed-test").innerHTML = `<strong>Kecepatan merespon:</strong> ${res.speed_server}`
});
var countDownDate = localStorage.getItem('startDate'); 
if (countDownDate) { 
    countDownDate = new Date(countDownDate); 
} else { 
    countDownDate = new Date(); 
    localStorage.setItem('startDate', countDownDate); 
} 
// Update the count down every 1 second 
var x = setInterval(function() { 
    // Get todays date and time 
    var now = new Date().getTime(); 
 
    // Find the distance between now an the count down date 
    var distance = now - countDownDate.getTime(); 
 
    // Time calculations for days, hours, minutes and seconds 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
    // Output the result in an element with id="demo" 
    document.getElementById("vikoo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s" 
}, 1000); 

// Apikey
randomapikey = ["9286c1a775","9267ic6a0f1","927j59de9c","921n567ea6","921h5a4282","925n2c494","928b0323c9","927b0k3hp7o2","925b04ib0j","023l1qhbpk","92b1a0h7ts","92a70b789c","9291a7bk0p1","92a7o8pe9c","92y1a7l0a6","9221a7i9h2","921a7k3n94","92a0kk2bc9","921a7l9pho2","92a2n1kb0j","92b0a75k6f","92u1a7pr8s"];
const randomkeys = randomapikey[Math.floor(Math.random() * (randomapikey.length))]
document.getElementById("randomkey").textContent=randomkeys

// Limit
limit = 'Unlimited'
document.getElementById("limit").textContent=limit

// Version in Sidebar

var version = document.getElementById('version-ruangadmin');

version.innerHTML = "Version 1.1";
