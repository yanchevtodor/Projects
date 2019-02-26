document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.book_serch').forEach(div => {

        div.onclick = function () {
            
            $(".serch_input").load(`Templates/${this.dataset.search}.html`);
            
            if($(".results").is(':not(:empty)')){
                 $(".results").empty();
            }
        };
            

    });
});


function show_books() {
    $(".results").empty();
    $(".results").load("Templates/results.html");
    
}
