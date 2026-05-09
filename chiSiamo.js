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

let members = [
    
    {
        img:'./media/sid.jpeg',
        number:'0',
        name:'Sid Wilson (DJ Starscream)', 
        role:'DJ', 
        description:`Si, gli slipknot hanno pure un DJ, membro piu' giovane del gruppo nato nel 1977, e famoso per i suoi salti dal palco sopra la folla`
    },
    
    {
        img:'./media/joey.jpg',
        number:'1',
        name:'Joey Jordison', 
        role:'batterista', 
        description:`In assoluto il piu' grande batterista metal (e non) che l'umanita' abbia visto capace di suonare una canzone su una batteria ancorata in una piattaforma elevabile, ruotabile e girabile mantenendo lo stesso ritmo senza perdere un colpo, secondo il mio ignorantissimo parere con la sua morte gli slipknot hanno perso tantissimo che difficilmente riusciranno a recuperare, magari Eloy sapra' portare avanti questo ruolo...`
    },

    {
        img:'./media/paul.jpg',
        number: '2',
        name:'Paul Grey', 
        role:'bassista', 
        description:`Non c'e molto da dire a parte una vita spericolata fra droghe e alcol fino alla fine della sua strada nel 2010`
    },
    
    {
        img:'./media/chris.jpg',
        number:'3',
        name:'Chris Fehn', 
        role:'percussinista', 
        description:`membro anch'esso storico e iconico per la sua maschera di pinocchio del gruppo che sprigionava una grande felicita' durante i live, licenziato dal gruppo per una questione di soldi`
    },
    
    {
        img:'./media/jim.jpg',
        number:'4',
        name:'Jim Root', 
        role:'chitarrista', 
        description:`Ultimo membro che entro a fare parte della formazione per come si ricorda nella storia, il piu' alto della band e con uno stile di headbang unico nel suo genere`
    },
    
    {
        img:'./media/craig.jpg',
        number: '5',
        name:'Craig Jones', 
        role:'tastierista', 
        description:`Nemmeno di lui non c'era molto da dire, membro in assoluto piu silenzioso e riservato del gruppo, primo perfino a lasciare il palco alla fine dei live`
    },
    
    {
        img:'./media/clown.jpg',
        number: '6',
        name:'Shawn Crahan (Clown)', 
        role:'percussionista', 
        description:`uno dei fondatori del gruppo non che membro piu' anziano con i suoi attuali 57 anni mal portati, iconica figura del gruppo famosa per dare mazzate infuocate ad un bidone`
    },

    {
        img:'./media/mick.jpg',
        number:'7',
        name:'Mick Thomson', 
        role:'chitarrista', 
        description:`Ultimo membro fondatore del gruppo, bestione inquietante e ancor di piu' con la sua maschera che fa un mix fra Jason di venerdi 13 e il fantasma o demone del film sinister...amante dei gatti`
    },
    
    {
        img:'./media/corey.jpg',
        number: '8',
        name:'Corey Tylor', 
        role:'cantante', 
        description:'Secondo cantante che vede la band dopo Colsefini, reclutato da alcuni fondatori del gruppo in un sexyshop diviene praticamente uno dei membri principali con la sua potentissima voce.'
    }
]

let circle = document.querySelector('.circle');

let movedDivs = document.querySelectorAll('.moved');

let innerFace = document.querySelector('.inner-face');

let memberNumb = document.querySelector('.memberNumb');

let memberName = document.querySelector('.memberName');

let memberRole = document.querySelector('.memberRole');

let memberStory = document.querySelector('.memberStory');

let flipCard = document.querySelector('.flip-card');

document.addEventListener('DOMContentLoaded', ()=>{

    movedDivs.forEach((moved, i)=>{
        let angle = (360 * i) / movedDivs.length
        moved.style.transform = `rotate(${angle}deg) translate(150px)`;
    })

})

let check = false;

movedDivs.forEach((movedDiv, i)=>{
    movedDiv.addEventListener('click', ()=>{
        let member = members[i];
        innerFace.style.backgroundImage = `url(${member.img})`;
        memberNumb.innerHTML = member.number;
        memberName.innerHTML = member.name;
        memberRole.innerHTML = member.role;
        memberStory.innerHTML = member.description;
        if (check == false) {
            flipCard.classList.remove('d-none')
            check = true;
        }else{
            flipCard.classList.add('d-none')
            check = false;
        }
             
    })
})

