//your JS code here. If required.
 document.getElementById('fname').addEventListener('blur',(e)=>{
	 e.preventDefault();
	 let inputBox=document.getElementById('fname').value.toUpperCase();
	 e.target.value=inputBox;
	
 })