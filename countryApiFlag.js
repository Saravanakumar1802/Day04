// 2.)Display all the country flags in the console

//Create Request
var request = new XMLHttpRequest();

//REQUEST CONNECTION
request.open('GET', 'https://restcountries.com/v2/all')

request.onload=function(){
    var countryData=JSON.parse(this.responseText);
    for(let country of countryData){
    console.log(`${country.name} : ${country.flag}`);
    } 
}

//Sending Request
request.send();



