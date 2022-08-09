//3.) Print all countries names,regions,sub-regions and populations.

var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all');
request.send();
request.onload=function(){

    var countrydata = JSON.parse(this.responseText)
    for (let key of countrydata)
     {console.log(`Country Name  : ${key.name}`)
     console.log(`Region        : ${key.region}`)
     console.log(`Sub-Region    : ${key.subregion}`)
     console.log(`Population    : ${key.population}`)
     console.log(" ")
    }
}