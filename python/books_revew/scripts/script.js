document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.book_serch').forEach(div => {
 
        div.onclick = function () {            
            console.log(this.dataset.search);            $(".serch_input").load(`Templates/${this.dataset.search}.html`)            
        };

        
    });
    
    document.querySelector('#search').onchange(function(){
        
          $(".results").load("Templates/browse.html")         

        
    });

});
