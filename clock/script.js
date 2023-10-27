console.log("hallow brother0")
function clock (){
let tarikh = new Date();
let sdate= tarikh.getSeconds();
let mdate= tarikh.getMinutes();
let hdate= tarikh.getHours();
let mrotation = 6*mdate;
let srotation = 6*sdate;
let hrotation = 30*hdate + mdate/2;
H_hand.style.transform=`rotate(${hrotation}deg)`
M_hand.style.transform=`rotate(${mrotation}deg)`
S_hand.style.transform=`rotate(${srotation}deg)`
}
setInterval(clock,1000);
clock();