const parametri = new URLSearchParams(location.search);
console.log(new URLSearchParams(location.search));
const id = parametri.get('id')
console.log(id);

const url = "https://striveschool-api.herokuapp.com/books/" + id;

function loadbooks() {
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Errore nella richiesta');
        }
        return response.json();
    })
    .then((book) =>{
       
        let elencoLibri = document.getElementById("elencolibri");
                elencoLibri.innerHTML+= `
            <div class="col">
                    <div class="card h-80 gap-2 pb-2" style="width: 18rem;">
                        <img src="${book.img}" class="card-img-top" alt="${book.title}">
                        <div class="card-body">
                            <h5 class="card-title paragrafo-troncato">${book.title}</h5>
                            <div class="d-flex gap-3 justify-content-center align-items-center">
                                <button type="button" class="btn btn-primary carrello">EUR ${book.price}</button>
                                <a href="./index.html?id=${book}"  class="btn btn-info">Indietro</a>
                                </div>
                        </div>
                    </div>
                </div>`
                
        })
   
    .catch(error => {
        // Gestisci gli errori
        console.error('Si è verificato un errore:', error);
    });
}

loadbooks()
