(function(){
    var fs = require('fs'),
        request = require('request'),
        properties = require('./properties.js')
        timeStamp = Math.round(new Date().getTime()/1000),
        filename = 'data/mp3/' + timeStamp + '.mp3';
    fs.writeFile(filename, '', (err) => {
        if (err){
          throw err;  
        }else{
            console.log('file at : data/mp3/' + timeStamp + '.mp3');
            request
                .get(properties.scannerURI)
                .on('error', function(err) {
                    console.log(err);
                })
                .pipe(fs.createWriteStream(filename));
        }
    });
    //todo set timeout
    //todo clean up audio after timeout
}());