function myFunction(){
	//Math.random() is  used to return a floating-point pseudo-random number between range [0,1) ,0(inclusive) and 1 (exclusive) which can be scaled according to the desired range. With the aide of the Math.round(), the values will be rounded to nearest integer [0,100). 
	//generates random value from 0-100 and round off the random values
	var x = Math.random();
	var y = Math.round(x*100);
	var sum = parseInt(document.getElementById("sum1").innerHTML);
	var prod = parseInt(document.getElementById("prod1").innerHTML);
	
	document.getElementById("display").innerHTML +=" "+y;
	
	if ((y%2)==0){
		document.getElementById("even").innerHTML +=" "+y;
		prod *= y;
		document.getElementById("prod1").innerHTML=prod;
	}else{
		document.getElementById("odd").innerHTML +=" "+y;
		sum +=y;
		document.getElementById("sum1").innerHTML=sum;
	}
}