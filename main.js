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
     anno: '1993', 
     evento: 'nasce la band'
    },

    {punto: 12, 
     img:`./media/album-slipknot-1.jpg`, 
     anno: '1999', 
     evento: 'primo album "slipknot"'
    },

    {punto: 25, 
     img: `./media/album-slipknot-2.jpg` , 
     anno: '2002', 
     evento: 'nasce "Iowa" e prima pausa'
    },

    {punto: 37, 
     img: `./media/album-slipknot-3.jpg`, 
     anno: '2007', 
     evento: 'uscita terzo album e altra pausa'
    },

    {punto: 50, 
     img: `./media/paul grey.jpg`, 
     anno: '2010', 
     evento: 'uscita "all hope is gone" e morte del bassista'
    },

    {punto: 63, 
     img: `./media/knotfest.jpg`, 
     anno: '2012', 
     evento: 'primo knotfest e diversi premi assegnati alla band'
    },

    {punto: 75, 
     img: `./media/album-slipknot-5.jpg`, 
     anno: '2017', 
     evento: 'licenziamento joey jordison e uscita di"the grey chapter"'
    },
    
    {punto: 88, 
     img: `./media/album-slipknot-6.jpg`, 
     anno: '2020', 
     evento: 'licenziamento di chris e uscita album "we are not your kind"'
    },
    
    {punto: 100, 
     img: `./media/joey jordison.jpg`, 
     anno: '2021',
     evento: 'morte joey jordison e uscita ultimo album "the end so far"'
    }
]

let img = document.querySelector('#imgCard');
let anno = document.querySelector('#anno');
let evento = document.querySelector('#evento');
let cardWrapper = document.querySelector('.cardWrapper');

storycards.forEach((storyCard)=>{
    let div = document.createElement('div');
    div.classList.add('card-custom');
    div.innerHTML = `
        <img src="${storyCard.img}" alt="immagine evento" id="#imgCard" class="img-fluid img-custom">
        <h3 class="anno" id="anno">${storyCard.anno}</h3>
        <p class="evento" id="evento">${storyCard.evento}</p>
    `;
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