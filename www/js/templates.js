
function Templates (){

    this.dir = "templates/";

    this.getPath = function(tpl){
        return this.dir + tpl + '.html';
    };

    this.render = function(tpl, data, callback){
        $.get(this.getPath(tpl), function(fileContent){
            for(var key in data){
                fileContent = fileContent.replace('{{' + key + '}}', data[key]);
            }
            callback(fileContent);
        });
    };

    return this;
}