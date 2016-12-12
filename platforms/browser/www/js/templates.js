
function Templates (){

    this.dir = "templates/";

    this.getPath = function(tpl){
        return this.dir + tpl + '.html';
    };

    this.render = function(tpl, data, callback){
        $.get(this.getPath(tpl), function(file){
            console.log(file);
        });
    };

    return this;
}