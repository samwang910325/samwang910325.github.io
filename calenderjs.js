
document.getElementById("bt").onclick = function() {myFunction()};

function myFunction() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function(){
		var input;
		input = this.responseText;
		alert("ok");
		PutInTable(input);
	}
	xhttp.open("GET", "calender.txt");
	xhttp.send();
}

function PutInTable(input){ 
	const arr = ["","","","","","","",""];
	var index;
	for(var i = 0 ; i < input.length ; i++){
		if(input[i] == '/'){
			arr[index] += "<br>"
			index = input[i+1];
			i = i + 1;
		}
		arr[index] += input[i];
		
	}
	var trows = document.getElementById("table").rows;
	var tcols = trows[1].cells; 

	for(var i = 1 ; i < 7 ; i++){
		tcols[i - 1].innerHTML = arr[i];  
	}
	
	
	
	
}
