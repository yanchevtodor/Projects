document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.book_serch').forEach(div => {

        div.onclick = function () {
            console.log(this.dataset.search);
            $(".serch_input").load(`Templates/${this.dataset.search}.html`);
            
            if($(".results").is(':empty')){
                console.log("empty")
            }
            else{
                $(".results").empty();
            }

            };
            

    });
});


function show_books() {
    $(".results").empty();
    $(".results").load("Templates/results.html");
    console.log(this);
}
