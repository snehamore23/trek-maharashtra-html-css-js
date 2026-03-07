let inquiries = JSON.parse(localStorage.getItem("trekData")) || [];

const form = document.getElementById("contactForm");
const list = document.getElementById("inquiryList");

function displayData(){

list.innerHTML="";

if(inquiries.length===0){
list.innerHTML="<p>No inquiries yet.</p>";
return;
}