

function Server (){

    var parent = this;

    this.getPage = function (slug){

        $.get('http://localhost:8000/api/en/page/' + slug, function(response, status){
            if(status == 'success'){
                parent.render('page', response);
            }
        });
    };


    this.activatePages = function(){
        $('a[data-slug]', 'div.navbar').click(function(){
           parent.getPage($(this).data('slug'));
        });
    };

    this.template = function(tpl){

    }

    this.render = function(tpl, data){

        Templates().render(tpl, data, function(){
            $('div#page-content').html('test');
        });
    };

    return this;
}