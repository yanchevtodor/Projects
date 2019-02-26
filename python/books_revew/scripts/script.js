document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.book_serch').forEach(div => {
//        document.querySelector('.section_1 container').append()
        
        
        div.onclick = function () {
            
            console.log(this.dataset.search)
            $(".serch_input").load(`Templates/${this.dataset.search}.html`)
            
            
        };

        
    });

});
