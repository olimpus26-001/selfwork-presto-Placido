let navbar = document.querySelector('#navbar');

let logoSlipknot = document.querySelector('.logo2');

let corey = document.querySelector('.img-corey');

let cross = document.querySelector('#cross');

let offCanvasElement = document.querySelector('#offcanvasNavbar')

let dots = document.querySelector('#dots');

window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY;

    if (scroll > 0) {
        navbar.style.height = '50px';
        navbar.classList.add('bg-black');
        navbar.style.transition = '0.5s';
        logoSlipknot.style.transform = 'rotateX(-90deg)';
        logoSlipknot.style.transition = '0.2s';
    }else{
        navbar.style.height = '100px';
        navbar.classList.remove('bg-black');
        navbar.style.transition = '0.5s';
        logoSlipknot.style.transform = 'rotateX(0deg)';
        logoSlipknot.style.transition = '0.5s';
    }
});

dots.addEventListener('click', ()=>{
    corey.style.transform = 'rotateY(180deg)';
})

cross.addEventListener('click', ()=>{
    corey.style.transform = 'rotateY(0deg)';
    corey.style.transition = '0.5s';
    
    setTimeout(()=>{
        let closeDelay = bootstrap.Offcanvas.getInstance(offCanvasElement);
        closeDelay.hide();
    }, 500);
})

// sezione annunci


fetch('./annunci.json').then((response)=>response.json()).then((data)=>{
    
    let divWrap = document.querySelector('#divWrap');
    let cardWrapper = document.querySelector('#card-wrapper');
    let confermBtn = document.querySelector('#confermBtn');

    function filtri() {
        let categories = data.map((annuncio)=> annuncio.category)
        
        let categorieUniche = Array.from(new Set(categories));
        
        categorieUniche.forEach((categoriaUnica)=>{
            let div =document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
                <input class="form-check-input" type="radio" name="radioDefault" id="${categoriaUnica}">
                <label class="form-check-label" for="${categoriaUnica}">${categoriaUnica}</label>
            `;
            divWrap.appendChild(div);
        })
        
    }
    filtri();

    function showcards(array) {

        cardWrapper.innerHTML = '';
        array.forEach((annuncio, i)=>{
            let div = document.createElement('div');
            div.classList.add('card-custom2');
            div.innerHTML = `
                <img src="${annuncio.img}" alt="immagine articolo" class="img-annuncio img-fluid">
                <div class="mt-4">
                    <h4>${annuncio.name}</h4>
                    <p>${annuncio.category}</p>
                    <p>${annuncio.price}€</p>
                </div>
            `;
            cardWrapper.appendChild(div);
        })

    }
    showcards(data);
        
    
    
    

})