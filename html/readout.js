var fs = require('fs');
var esijson = JSON.parse(fs.readFileSync('esi.json', 'utf8'));




for (const key in esijson.properties) {
    if (esijson.properties.hasOwnProperty(key)) {
        const element = esijson.properties[key];
        //console.log(""+key);
        var temp =key+",";
        for (const key2 in element.properties) {
           temp += key2+","
        }
        console.log(""+temp)
    }
}


//console.log(esijson.properties.character.properties)