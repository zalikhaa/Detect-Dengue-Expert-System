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
	
	//rule 1
	if (q1=="High" & q2=="Yes" & q3=="Yes" & q4=="Yes" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='DENGUE. You have all the symptoms of dengue. You are suspected to get dengue fever. Please visit hospital to get checked as soon as possible.'
	}
	//rule 2
	else if (q1=="High" & q2=="Yes" & q3=="Yes" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='DENGUE. You have almost all the symptoms of dengue. You are suspected to get dengue fever. Please visit hospital to get checked as soon as possible.'		
	}
	//rule 3
	else if (q1=="High" & q2=="Yes" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='DENGUE. You have almost all the symptoms of dengue. You are suspected to get dengue fever. Please visit hospital to get checked as soon as possible.'		
	}
	//rule 4
	else if (q1=="High" & q2=="Yes" & q3=="No" & q4=="Yes" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='DENGUE. You have almost all the symptoms of dengue. You are suspected to get dengue fever. Please visit hospital to get checked as soon as possible.'		
	}
	//rule 5
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='DENGUE. You have almost all the symptoms of dengue. You are suspected to get dengue fever. Please visit hospital to get checked as soon as possible.'		
	}
	//rule 6
	else if (q1=="High" & q2=="Yes" & q3=="Yes" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='DENGUE. You have almost all the symptoms of dengue. You are suspected to get dengue fever. Please visit hospital to get checked as soon as possible.'		
	}
	//rule 7
	else if (q1=="High" & q2=="Yes" & q3=="Yes" & q4=="No" & q5=="No" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='DENGUE. You have almost all the symptoms of dengue. You are suspected to get dengue fever. Please visit hospital to get checked as soon as possible.'		
	}
	//rule 8
	else if (q1=="High" & q2=="Yes" & q3=="Yes" & q4=="Yes" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue as the symptoms has only appeared less than 2 days.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 9
	else if (q1=="High" & q2=="Yes" & q3=="Yes" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue as the symptoms has only appeared less than 2 days.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 10
	else if (q1=="High" & q2=="Yes" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue as the symptoms has only appeared less than 2 days.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 11
	else if (q1=="High" & q2=="Yes" & q3=="No" & q4=="Yes" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue as the symptoms has only appeared less than 2 days.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 12
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue as the symptoms has only appeared less than 2 days.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 13
	else if (q1=="High" & q2=="Yes" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue as the symptoms has only appeared less than 2 days.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 14
	else if (q1=="High" & q2=="Yes" & q3=="Yes" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue as the symptoms has only appeared less than 2 days.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 15
	else if (q1=="High" & q2=="Yes" & q3=="Yes" & q4=="No" & q5=="No" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue as the symptoms has only appeared less than 2 days.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 16
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 17
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 18
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="No" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 19
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="No" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 20
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="No" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 21
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="No" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 22
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 23
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="NO" & q6=="Yes" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 24
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'			 
	}
	//rule 25
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 26
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="No" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 27
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="No" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 28
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="No" & q7=="No" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 29
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="No" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 30
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 31
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="Yes" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 32
	else if (q1=="High" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="Yes" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 33
	else if (q1=="Normal" & q2=="Yes" & q3=="Yes" & q4=="Yes" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 34
	else if (q1=="Normal" & q2=="Yes" & q3=="Yes" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 35
	else if (q1=="Normal" & q2=="Yes" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 36
	else if (q1=="Normal" & q2=="Yes" & q3=="No" & q4=="Yes" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 37
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 38
	else if (q1=="Normal" & q2=="Yes" & q3=="Yes" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 39
	else if (q1=="Normal" & q2=="Yes" & q3=="Yes" & q4=="No" & q5=="No" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 40
	else if (q1=="Normal" & q2=="Yes" & q3=="Yes" & q4=="Yes" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 41
	else if (q1=="Normal" & q2=="Yes" & q3=="Yes" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 42
	else if (q1=="Normal" & q2=="Yes" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 43
	else if (q1=="Normal" & q2=="Yes" & q3=="No" & q4=="Yes" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 44
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 45
	else if (q1=="Normal" & q2=="Yes" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 46
	else if (q1=="Normal" & q2=="Yes" & q3=="Yes" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 47
	else if (q1=="Normal" & q2=="Yes" & q3=="Yes" & q4=="No" & q5=="No" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 48
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 49
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 50
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="No" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 51
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="No" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 52
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="No" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 53
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="No" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 54
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="Yes" & q7=="Yes" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 55
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="Yes" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 56
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 57
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="Yes" & q7=="No" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 58
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="No" & q7=="No" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 59
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="Yes" & q6=="No" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 60
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="No" & q7=="No" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 61
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="N" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 62
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="Yes" & q7=="Yes" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 63
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="Yes" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 64
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="Yes" & q7=="No" & q8=="More"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 65
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="Yes" & q7=="No" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	//rule 66
	else if (q1=="Normal" & q2=="No" & q3=="No" & q4=="No" & q5=="No" & q6=="No" & q7=="No" & q8=="Less"){
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'		
	}
	else {
		result.textContent='NOT DENGUE. You are less likely to get dengue.\
		 Even so, please take care of your health and hygiene.'
	}
	
	
	/*if(c>=4) {
		result.textContent=`DENGUE. You have ${c} symptoms. you have suspected to get dengue fever.
		 Please visit hospital to get checked as soon as possible.`
	} else {
		result.textContent=`NO DENGUE. You have ${c} symptoms, you are less likely to get dengue. 
		Even so, please take care of your health and hygiene.`
	}*/
}
