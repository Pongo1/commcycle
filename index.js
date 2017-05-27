 
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