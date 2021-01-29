$(document).ready(function(){
  $('.header').height($(window).height());
})

function check(){
	var c=0;
	var q1=document.question.question1.value;
	var q2=document.question.question2.value;
	var q3=document.question.question3.value;
	var q4=document.question.question4.value;
	var q5=document.question.question5.value;
	var q6=document.question.question6.value;
	var q7=document.question.question7.value;
	var q8=document.question.question8.value;
	var result=document.getElementById('result');
	var question=document.getElementById("question");
	if(q1=="High"){c++}
	if(q2=="Yes"){c++}
	if(q3=="Yes"){c++}
	if(q4=="Yes"){c++}
	if(q5=="Yes"){c++}
	if(q6=="Yes"){c++}
	if(q7=="Yes"){c++}
	if(q8=="More than two days"){c++}
	
	if(c>=4) {
		result.textContent=`DENGUE. You have ${c} symptoms. you have suspected to get dengue fever.
		 Please visit hospital to get checked as soon as possible.`
	} else {
		result.textContent=`NO DENGUE. You have ${c} symptoms, you are less likely to get dengue. 
		Even so, please take care of your health and hygiene.`
	}
}
