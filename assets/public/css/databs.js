window.onload = function() { jam(); }

 function jam() {
  var e = document.getElementById('jam'),
  d = new Date(), h, m, s;
  h = d.getHours();
  m = set(d.getMinutes());
  s = set(d.getSeconds());

  e.innerHTML = h +':'+ m +':'+ s;

  setTimeout('jam()', 1000);
 }

 function set(e) {
  e = e < 10 ? '0'+ e : e;
  return e;
 }

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
    document.getElementById("vikoo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s :"; 
}, 1000);

function cb(response) {
    document.getElementById('visits').innerText = response.value;
}