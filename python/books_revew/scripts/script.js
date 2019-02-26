document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.book_serch').forEach(div => {
//        document.querySelector('.section_1 container').append()
        
        
        div.onclick = function () {
            
            console.log(this.dataset.search)
            $(".section_1").load(`Templates/${this.dataset.search}.html`)
            
            console.log(`Templates/${this.dataset.search}.html`)
        };

        
    });

});
