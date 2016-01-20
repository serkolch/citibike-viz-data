var request = require('request');
var fs = require('fs')

var bikeData = function(){
  request('https://www.citibikenyc.com/stations/json',function(error,response,body){
    var data = JSON.parse(response.body)
    var splitDatetime = data.executionTime.split(" ")
    var fileName = 'data/'+splitDatetime[1]+splitDatetime[2]+'.json'
    fs.writeFile(fileName,JSON.stringify(data.stationBeanList))
  })
}

bikeData()