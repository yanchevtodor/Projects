document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.book_serch').forEach(div => {
 
            div.onclick = function () {            
                console.log(this.dataset.search);            
                $(".serch_input").load(`Templates/${this.dataset.search}.html`)  ;
                $('#search').click(function(){

              $(`#${this.dataset.search}`).onclick = function () { 
              
                  $(".results").load(`Templates/results.html`)  ;
                   


            };  
        };

        
    });
    
//    $('#search').click(function(){
//        
//          $(".results").load("Templates/browse.html")         
//
//        
//    });

});
