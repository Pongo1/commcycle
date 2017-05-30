
var shopTerms = function(temID,uploaderName,uploaderEmail,itemName,itemBrand,itemCategory,price){

	var ITEM = document.getElementById(itemID);
	var upName = document.getElementById(uploaderName); 
	var upEmail = document.getElementById(uploaderEmail);
	var itName = document.getElementById(itemName);
	var itCategory = document.getElementById(itemCategory);
	var itBrand = document.getElementById(itemBrand);
	var thePrice = document.getElementById(price);

	//buttons 
	var theCancel = document.getElementById("cancel");

	var theFinal = document.getElementById("finalise");


	if (ITEM.checked){
		upName.style.opacity="1";
		upEmail.style.opacity="1";
		itName.style.opacity="1";
		itCategory.style.opacity="1";
		itBrand.style.opacity="1";
		thePrice.style.opacity="1";
		
		theFinal.style.opacity = "1"; 


	}
	else{
		upName.style.opacity= "0";
		upEmail.style.opacity= "0";
		itName.style.opacity= "0";
		itCategory.style.opacity= "0";
		itBrand.style.opacity= "0";
		thePrice.style.opacity = "0";
		

		
		theFinal.style.opacity = "0"; 
		
	}



};

var terms = function(itemID,uploaderName,uploaderEmail,itemName,itemBrand,itemCategory,otherInfo){

	var ITEM = document.getElementById(itemID);
	var upName = document.getElementById(uploaderName); 
	var upEmail = document.getElementById(uploaderEmail);
	var itName = document.getElementById(itemName);
	var itCategory = document.getElementById(itemCategory);
	var itBrand = document.getElementById(itemBrand);
	var bigBox = document.getElementById(otherInfo);
	

	//buttons 
	var theCancel = document.getElementById("cancel");

	var theFinal = document.getElementById("finalise");
	if (ITEM.checked){
		upName.style.opacity="1";
		upEmail.style.opacity="1";
		itName.style.opacity="1";
		itCategory.style.opacity="1";
		itBrand.style.opacity="1";
		bigBox.style.opacity="1";
		
		theFinal.style.opacity = "1"; 


	}
	else{
		upName.style.opacity= "0";
		upEmail.style.opacity= "0";
		itName.style.opacity= "0";
		itCategory.style.opacity= "0";
		itBrand.style.opacity= "0";
		bigBox.style.opacity = "0";
		

		
		theFinal.style.opacity = "0"; 
		
	}



}; 

//A function that will help make any item invisible
 var hide = function(itemID){

    var uploadForm = document.getElementById(itemID);
    //locate that paticlar item by using its id
    uploadForm.style.display = "none"; 
    //now make it invisible.. This how to pass css through js


};
//A function to unhide items
 var unHide = function(itemID){
 	var ITEM = document.getElementById('postButton'); 
 	if(ITEM.style.cursor=="not-allowed"){}
 		else{
    var uploadForm = document.getElementById(itemID);
    uploadForm.style.display = "block"; }


};
//A function to make items invisible.. an alternative for hiding
var vanish = function(itemID){

var ITEM = document.getElementById(itemID); 
ITEM.style.opacity = "0.0";
ITEM.styke.cursor = "not-allowed";


};
// a function to make invisible items reappear
var appear = function(itemID){

var ITEM = document.getElementById(itemID); 
ITEM.style.opacity = "1";
ITEM.style.cursor= "pointer";
};