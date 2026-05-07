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

const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    effect: "fade",
    loop: true,

  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

});

let storycards = [
    {punto: 0, 
     img: `./media/story-1.jpg`, 
     anno: '1993-1998', 
     evento: 'nasce la band ad Iowa con Clown, Paul Grey, Joey Jordison, Anders Colsefini e Donnie Steele'
    },

    {punto: 12, 
     img:`./media/album-slipknot-1.jpg`, 
     anno: '1999-2000', 
     evento: 'primo album "slipknot" con la formazione che li porta fino al 2013 con i 9: Corey, Mick, Paul, Sid, Chris, Joey, Jim, Craig, clown'
    },

    {punto: 25, 
     img: `./media/album-slipknot-2.jpg` , 
     anno: '2001-2002', 
     evento: `nasce l'album "Iowa" e prima pausa`
    },

    {punto: 37, 
     img: `./media/album-slipknot-3.jpg`, 
     anno: '2003-2007', 
     evento: 'uscita terzo album "vol 3: (the subliminal verses)" e altra pausa'
    },

    {punto: 50, 
     img: `./media/paul grey.jpg`, 
     anno: '2009-2010', 
     evento: 'esce il quarto album "all hope is gone" e morte del bassista Paul Grey per overdose'
    },

    {punto: 63, 
     img: `./media/knotfest.jpg`, 
     anno: '2011-2012', 
     evento: 'primo festival a loro nome "Knotfest" e assegnati diversi premi alla band come migliore band-live, miglior vocalist e miglior batterista metal di tutti i tempi'
    },

    {punto: 75, 
     img: `./media/album-slipknot-5.jpg`, 
     anno: '2013-2017', 
     evento: 'licenziamento joey jordison, assunzione del nuovo batterista Jay Weinberg e del bassista di orgini siciliane Alessandro Venturella (in arte Vman) e uscita del quinto album "the grey chapter"- nota personale: qua la band ha cominciato a mio parere a perdere tanto -'
    },
    
    {punto: 88, 
     img: `./media/album-slipknot-6.jpg`, 
     anno: '2018-2020', 
     evento: 'licenziamento di Chris Fehn e rimpiazzamento del nuovo percussinista Michael Pfaff e uscita del sesto album "we are not your kind"'
    },
    
    {punto: 100, 
     img: `./media/joey jordison.jpg`, 
     anno: '2021-2024',
     evento: `morte di Joey Jordison causata da una mielite acuta trasversale, licenziamento di Jay e rimpiazzamento con Eloy Casagrande, uscita ultimo album "the end so far" e primo Knotfest ospitato a Bologna (io c'ero)`
    }
]

let img = document.querySelector('#imgCard');
let anno = document.querySelector('.anno');
let descrizione = document.querySelector('#descrizione');
let cardWrapper = document.querySelector('.cardWrapper');

storycards.forEach((storyCard)=>{
    let div = document.createElement('div');
    div.classList.add('card-custom');
    div.setAttribute('data-bs-toggle','modal');
    div.setAttribute('data-bs-target','#staticBackdrop')
    div.innerHTML = `
        <img src="${storyCard.img}" alt="immagine evento" id="#imgCard" class="img-fluid img-custom">
        <h3 class="anno">${storyCard.anno}</h3>
    `;

    div.addEventListener('click', ()=>{
        img.src = storyCard.img;
        anno.innerHTML = storyCard.anno;
        descrizione.innerHTML = storyCard.evento;
    })
    cardWrapper.appendChild(div);

})

// logica numeri

let ozzFest = document.querySelector('#ozzFest');
let download = document.querySelector('#download');
let knotFest = document.querySelector('#knotFest');

let confirm = true;

function creaIncremento(n, element, time) {

    let counter = 0;

    let interval = setInterval(()=>{
        if (counter < n) {
        counter++
        element.innerHTML = counter;
        }else{
            clearInterval(interval);
        }
    },time);

    setTimeout(()=>{
        confirm = true;
    }, 8000)
   
}

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting && confirm) {
            creaIncremento(180000, ozzFest, 1);
            creaIncremento(80000, download, 1);
            creaIncremento(100000, knotFest, 1);
            confirm = false;
        }
    });

});

observer.observe(ozzFest);