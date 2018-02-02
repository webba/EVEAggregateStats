var fs = require('fs');
var esijson = JSON.parse(fs.readFileSync('esi.json', 'utf8'));


var temp = "";

for (const key in esijson.properties) {
    if (esijson.properties.hasOwnProperty(key) && key != "year") {
        const element = esijson.properties[key];
        //console.log(""+key);
        temp += '<div class=" row justify-content-md-center border-bottom pb-3 mb-4"><h1 clas="text-center" id="'+key+'" >'+key+'</h1></div>\n<div *ngIf="stat.'+key+'" class="row justify-content-md-center">\n';
        temp += '\t<table class="table" style="border:1px solid black;">';
        for (const key2 in element.properties) {
           temp += '\n\t\t<tr>\n\t\t\t<td>'+key2+'</td>\n\t\t\t<td><app-character-stat [value]="stat.'+key+'.'+key2+'"></app-character-stat></td>\n\t\t</tr>'
        }
        //console.log(""+temp)
        temp += "\n\t</table>\n</div>\n"
    }
}


var stream = fs.createWriteStream("test.html");
stream.once('open', function(fd) {
  stream.write(temp);
  stream.end();
});

//console.log(esijson.properties.character.properties)