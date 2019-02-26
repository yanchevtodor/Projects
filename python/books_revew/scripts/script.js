document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.book_serch').forEach(div => {

        div.onclick = function () {
            console.log(this.dataset.search);
            $(".serch_input").load(`Templates/${this.dataset.search}.html`);
            $('#search').click(function () {

                    
                });


            };
       

    });
});


function show_books() {
    $(".results").empty();
    $(".results").load("Templates/results.html");
    console.log(this.dataset.search);
}
