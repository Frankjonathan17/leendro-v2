var GLOBAL_CURRENT_SLIDE = 0;
var GLOBAL_NEXT_SLIDE = 1;
var GLOBAL_PREV_SLIDE = 0;
var END_OF_SLIDES = 10;
var body  = document.body;
var html = document;
var fistSlide= document.querySelector('.section-1');
var sec1= document.querySelector('.section-2');
var sec2= document.querySelector('.section-3');
var sec3= document.querySelector('.section-4');
var sec4= document.querySelector('.section-5');
var sec5= document.querySelector('.section-6');
var sec6= document.querySelector('.section-7');
var sec7= document.querySelector('.section-8');
var sec8= document.querySelector('.section-9');
var sec9= document.querySelector('.section-10');
var sections = document.querySelector('section');
var sec1ImgRight = document.querySelector('.section-1 .img-right img');
var sec1ImgLeft = document.querySelector('.section-1 .img-left img');
var sec1Head1= document.querySelector('.section-1 .intro-top span');
var sec1Head2= document.querySelector('.section-1 .intro-center span');
var sec1Head3= document.querySelector('.section-1 .intro-bottom span');
var sec1Button = document.querySelector('.section-1 .button-explore button');
var sec1ScrollInfo = document.querySelector('.section-1 .button-explore .intro-info');
var sec1ScrollSvg = document.querySelector('.section-1 .button-explore svg')
const app = document.querySelector('.app');
const timeline = new gsap.timeline();
const button_main = document.querySelector('.get-in-touch');
let angalia_video_kama_zimeload;
let video1,video2,video3,video4,video5,video6,video7,video8,video9;
let video1State,video2State,video3State,video4State,video5State,video6State,video7State,video8State,video9State =false
let fullScreen = false;
let zmereloadZote = false;

// second section
const SsTitle1A = document.querySelector('.section-2 .section-title .a');
const SsTitle1B = document.querySelector('.section-2 .section-title .b');
const SsTitle1C = document.querySelector('.section-2 .section-title .c');
const SsTitle1D = document.querySelector('.section-2 .section-title .d');
const SsText = document.querySelector('.section-2 .section-texts');
const SsButton = document.querySelector('.section-2 button');

// third section

const TsTitle1A = document.querySelector('.section-3 .section-title .a');
const TsTitle1B = document.querySelector('.section-3 .section-title .b');
const TsTitle1C = document.querySelector('.section-3 .section-title .c');
const TsTitle1D = document.querySelector('.section-3 .section-title .d');
const TsTitle1E = document.querySelector('.section-3 .section-title .e');
const TsText = document.querySelector('.section-3 .section-texts');
const TsButton = document.querySelector('.section-3 button');


// fourth section

const FsTitle1A = document.querySelector('.section-4 .section-title .a');
const FsTitle1B = document.querySelector('.section-4 .section-title .b');
const FsTitle1C = document.querySelector('.section-4 .section-title .c');
const FsTitle1D = document.querySelector('.section-4 .section-title .d');
const FsTitle1E = document.querySelector('.section-4 .section-title .e');
const FsText = document.querySelector('.section-4 .section-texts');
const FsButton = document.querySelector('.section-4 button');

// Fifth section

const VsTitle1A = document.querySelector('.section-5 .section-title .a');
const VsTitle1B = document.querySelector('.section-5 .section-title .b');
const VsTitle1C = document.querySelector('.section-5 .section-title .c');
const VsText = document.querySelector('.section-5 .section-texts');
const VsButton = document.querySelector('.section-5 button');


// sixth section

const XsTitle1A = document.querySelector('.section-6 .section-title .a');
const XsTitle1B = document.querySelector('.section-6 .section-title .b');
const XsTitle1C = document.querySelector('.section-6 .section-title .c');
const XsTitle1D = document.querySelector('.section-6 .section-title .d');
const XsText = document.querySelector('.section-6 .section-texts');
const XsButton = document.querySelector('.section-6 button');

// seventh section

const s7Title1A = document.querySelector('.section-7 .section-title .a');
const s7Title1B = document.querySelector('.section-7 .section-title .b');
const s7Title1C = document.querySelector('.section-7 .section-title .c');
const s7Text = document.querySelector('.section-7 .section-texts');
const s7Button = document.querySelector('.section-7 button');



// eigth section

const EsTitle1A = document.querySelector('.section-8 .section-title .a');
const EsTitle1B = document.querySelector('.section-8 .section-title .b');
const EsTitle1C = document.querySelector('.section-8 .section-title .c');
const EsText = document.querySelector('.section-8 .section-texts');
const EsButton = document.querySelector('.section-8 button');


// Nineth section

const NsTitle1A = document.querySelector('.section-9 .section-title .a');
const NsTitle1B = document.querySelector('.section-9 .section-title .b');
const NsTitle1C = document.querySelector('.section-9 .section-title .c');
const NsTitle1D = document.querySelector('.section-9 .section-title .d');
const NsText = document.querySelector('.section-9 .section-texts');
const NsButton = document.querySelector('.section-9 button');

// TENth section

const TETitle1A = document.querySelector('.section-10 .section-title .a');
const TEsTitle1B = document.querySelector('.section-10 .section-title .b');
const TEsTitle1C = document.querySelector('.section-10 .section-title .c');
const TEsTitle1D = document.querySelector('.section-10 .section-title .d');
const TEsText = document.querySelector('.section-10 .section-texts');
const TEsButton = document.querySelector('.section-10 button');

window.onload=()=>{

 
    // creating global theme var in window object
    window.theme='bl'

   
     window.loader=function(direction,page='work'){

        let loadDiv = document.querySelector('.main-loader');
        let white = loadDiv.querySelector('.inWhite');
          function colors(){
            if( window.theme===('bl')) return 'var(--blue)';
            else if(window.theme===('og')) return 'var(--orange)';
            else if( window.theme===('pi')) return 'var(--pink)';
            else if( window.theme===('vip')) return 'rgb(160, 91, 246)';
            else if( window.theme===('gr')) return 'var(--green)';
            else if( window.theme===('ye')) return 'var(--yellow)';
            else  return '#543DE0';
          }
        loadDiv.style.background=colors();
        loadDiv.querySelector("h1").innerText=page;
        setTimeout(() => {
            window.open(`pages/${direction}.html?tz=${window.theme}`,'_Parent')
        }, 1650);
    
    

        let tl = new gsap.timeline();
        
        tl.to(loadDiv,{
            y:0,
            ease:"expo.out",
            duration:.89,
            delay:0,
        })
        .to(white,{
            height:'110vh',
            ease:"expo.out",
            duration:.8,
            delay:.3
        })

     }


    
  //ficha cursor 
  //document.body.style.cursor="none"

  //tengeneza cursor mpya

  var cursor = document.createElement("div");
  cursor.classList.add('cursor');
 
   document.body.appendChild(cursor)
  //mdogo cursor
   var follow = document.createElement("div");
  follow.classList.add('follow');
  
   document.querySelector('body').appendChild(follow)

   //to move cursor

   function move (item,event){
         item.style="";
         item.style.top= event.clientY + 'px';
         item.style.left = event.clientX + 'px';

   }

   if(cursor){
       window.addEventListener("mousemove",function(event){


           var e = event;
           var t = e.target;
           var f = follow;
           var c = cursor;

            if(t.tagName == "BUTTON"){
              f.classList.add("scale-down-cursor-follow")
              c.classList.add("sclae-up-cursor")
                          
               move(c,e)
           
            }
            else if(t.className == "Logo-name"){
              f.classList.add("scale-down-cursor-follow")
              c.classList.add("sclae-up-cursor")
              
                          
               move(c,e)
            }
            else if(t.className === "down-arrow"){
              f.classList.add("scale-down-cursor-follow")
              c.classList.add("sclae-up-cursor")
                          
               move(c,e)
            }

            else if(t.className == "link"){
              f.classList.add("scale-down-cursor-follow")
              c.classList.add("sclae-up-cursor")
                          
               move(c,e)
            }

            else if(t.tagName == "A"){
                f.classList.add("scale-down-cursor-follow")
                c.classList.add("sclae-up-cursor")
                            
                 move(c,e)
            }
            else{
                f.classList.remove("onFocus")
                f.classList.remove("scale-down-cursor-follow");
                c.classList.remove("sclae-up-cursor")
                
               move(c,e)
               move(f,e)
            }

          

       })
   }


    const prevS =(e)=>{
        document.querySelector('#prevSlide').removeEventListener('click', prevS);
        e.key="ArrowUp"
        callBack_Listener(e);
     
        setTimeout(() => {
            document.querySelector('#prevSlide').addEventListener('click', prevS)
        }, 800);
    }

    document.querySelector('#prevSlide').addEventListener('click', prevS)


    let videoss = document.querySelectorAll('video')
       videoss.forEach(v=>{
               v.parentElement.classList.add('youCantStealVideo')
       })
    window.removeEventListener('keypress', callBack_Listener)


    

    if(window.innerWidth<=780){
  
        let headButton = document.querySelector('.header .get-in-touch');
        headButton.textContent='Menu'

        let menu = document.querySelector('.header button');
        let menuMobile = document.querySelector('.menuMobile');
        let menuCloseSvg = document.querySelector('.menuInside svg');
        let menuInside = document.querySelector('.menuInside');
        
        const openMenu=()=>{
        
          let  timeline =new gsap.timeline();
            menu.removeEventListener('click', openMenu)
            menuMobile.style.display='flex';
             timeline.from(menuMobile,{
                opacity:0,
                y:"-110vh",
                duration:.4,
                ease:"Power3.out",
                delay:0
         },'pamoja')
             .to(menuMobile,{
                y:"0vh",
                    opacity:1,
                    duration:.4,
                    ease:"Power3.out",
                    delay:0
             },'pamoja')
             .to(menuInside,{
                opacity:1,
                scale:0.5,
                duration:.5,
                ease:"Power3.out",
                delay:.3
         },'pamoja')
         .to(menuInside,{
            opacity:1,
            scale:1.18,
            duration:.5,
            ease:"Power3.out",
            delay:.36
        },'pamoja')
        .to(menuInside,{
            opacity:1,
            scale:1,
            duration:.5,
            ease:"Power3.out",
            delay:.48
        },'pamoja')
        
        
        }
        
        const closeMenu=()=>{
            menu.addEventListener('click', openMenu);

            let  timeline =new gsap.timeline();
             timeline.from(menuInside,{
                opacity:1,
                scale:1,
                duration:.5,
                ease:"Power3.out",
                delay:.48
            },'pamoja').to(menuInside,{
                opacity:0,
                scale:1.2,
                duration:.4,
                ease:"Power3.out",
                delay:0.3
            },'pamoja')
                .to(menuMobile,{
                y:"-110vh",
                    opacity:0,
                    duration:.4,
                    ease:"Power3.out",
                    delay:.5
             },'pamoja')
        }
        
        menu.addEventListener('click', openMenu)
        menuCloseSvg.addEventListener('click', closeMenu)



    }
    else{

    }


}





function openFirstSlide(){
    

timeline.to(document.querySelector('.header'),{
    opacity:1,
    y:"0px",
    duration:.4,
    ease:"Power3.ease",
    delay:0
},"same").to(sec1ImgLeft,{
    opacity:1,
    scale:1,
    duration:.6,
    ease:"Power3.ease",
    delay:.1
},"same").to(sec1ImgRight,{
    opacity:1,
    scale:1,
    duration:.6,
    ease:"Power3.ease",
    delay:.1
},"same").to(sec1Head1,{
    y:0,
    duration:.8,
    ease:"Power3.ease",
    delay:.5
},"same").to(sec1Head2,{
    y:0,
    duration:.8,
    ease:"Power3.ease",
    delay:.7
},"same").to(sec1Head3,{
    y:0,
    duration:.8,
    ease:"Power3.ease",
    delay:.9
},"same").to(sec1Button,{
    opacity:1,
    scale:1.46,
    duration:.4,
    ease:"Power4.ease",
    delay:1.1
},"same").to(sec1Button,{
    scale:1,
    duration:.3,
    ease:"Power4.ease",
    delay:1.3
},"same")
.to(sec1ScrollInfo,{
     opacity:1,
    duration:.4,
    ease:"Power4.ease",
    delay:1.5
},"same")

.to(sec1ScrollSvg,{
    opacity:1,
    scale:1.86,
   duration:.4,
   ease:"Power4.ease",
   delay:1.57
},"same")
.to(sec1ScrollSvg,{
    scale:1,
   duration:.3,
   ease:"Power4.ease",
   delay:1.7
},"same")

function closeAllAnimation(){

     // remove first slide animation
     let timel = new gsap.timeline();
    
     timel.to(SsTitle1A,{
    y:100,
    duration:0,
    delay:0,
},"same2")
.to(SsTitle1B,{
    y:100,
    duration:0,
    delay:0,
},"same2")
.to(SsTitle1C,{
    y:100,
    duration:0,
    delay:0,
},"same2")
.to(SsTitle1D,{
    y:100,
    duration:0,
    delay:0,
},"same2")
.to(SsText,{
    y:100,
    opacity:0,
    duration:0,
    delay:0,
},"same2")

.to(SsButton,{
opacity:0,
scale:.3,
duration:0,
delay:0,
},"same2")

.to(button_main,{
scale:1.5,
duration:.38,
ease:"Power3.ease",
delay:0
},"same")
.to(button_main,{
scale:1,
duration:.26,
ease:"Power3.ease",
delay:0
},"same")

//remove second animation

.to(SsTitle1A,{
y:100,
duration:0,
delay:0
},"same")
.to(SsTitle1B,{
y:100,
duration:0,
delay:0,
},"same")
.to(SsTitle1C,{
y:100,
duration:0,
delay:0,
},"same2")
.to(SsTitle1D,{
y:100,
duration:0,
delay:0,
},"same")
.to(SsText,{
y:100,
opacity:0,
duration:0,
delay:0,
},"same")

.to(SsButton,{
opacity:0,
scale:.3,
duration:0,
delay:0,
},"same")


.to(TsTitle1A,{
y:100,
duration:0,
delay:0
},"same")
.to(TsTitle1B,{
y:100,
duration:0,
delay:0,
},"same")
.to(TsTitle1C,{
y:100,
duration:0,
delay:0,
},"same2")
.to(TsTitle1D,{
y:100,
duration:0,
delay:0,
},"same")
.to(TsTitle1E,{
y:100,
duration:0,
delay:0,
},"same")
.to(TsText,{
y:100,
opacity:0,
duration:0,
delay:0,
},"same")

.to(TsButton,{
opacity:0,
scale:.3,
duration:0,
delay:0,
},"same")

.to(FsTitle1A,{
y:100,
duration:0,
delay:0
},"same")
.to(FsTitle1B,{
y:100,
duration:0,
delay:0,
},"same")
.to(FsTitle1C,{
y:100,
duration:0,
delay:0,
},"same2")
.to(FsTitle1D,{
y:100,
duration:0,
delay:0,
},"same")
.to(FsTitle1E,{
y:100,
duration:0,
delay:0,
},"same")
.to(FsText,{
y:100,
opacity:0,
duration:0,
delay:0,
},"same")

.to(FsButton,{
opacity:0,
scale:.3,
duration:0,
delay:0,
},"same")

//fifth

.to(VsTitle1A,{
y:100,
duration:0,
delay:0
},"same")
.to(VsTitle1B,{
y:100,
duration:0,
delay:0,
},"same")
.to(VsTitle1C,{
y:100,
duration:0,
delay:0,
},"same")
.to(VsText,{
y:100,
opacity:0,
duration:0,
delay:0,
},"same")  
.to(VsButton,{
opacity:0,
scale:.3,
duration:0,
delay:0,
},"same")

// remove SIXTH slide animation
.to(XsTitle1A,{
y:100,
duration:0,
delay:0
},"same")
.to(XsTitle1B,{
y:100,
duration:0,
delay:0,
},"same")
.to(XsTitle1C,{
y:100,
duration:0,
delay:0,
},"same")
.to(XsTitle1D,{
y:100,
duration:0,
delay:0,
},"same")
.to(XsText,{
y:100,
opacity:0,
duration:0,
delay:0,
},"same")  
.to(XsButton,{
opacity:0,
scale:.3,
duration:0,
delay:0,
},"same")
// remove SEVENTH slide animation
.to(s7Title1A,{
y:100,
duration:0,
delay:0
},"same")
.to(s7Title1B,{
y:100,
duration:0,
delay:0,
},"same")
.to(s7Title1C,{
y:100,
duration:0,
delay:0,
},"same")
.to(s7Text,{
y:100,
opacity:0,
duration:0,
delay:0,
},"same")  
.to(s7Button,{
opacity:0,
scale:.3,
duration:0,
delay:0,
},"same")

// remove EIGHTH slide animation
.to(EsTitle1A,{
y:100,
duration:0,
delay:0
},"same")
.to(EsTitle1B,{
y:100,
duration:0,
delay:0,
},"same")
.to(EsTitle1C,{
y:100,
duration:0,
delay:0,
},"same")
.to(EsText,{
y:100,
opacity:0,
duration:0,
delay:0,
},"same")  
.to(EsButton,{
opacity:0,
scale:.3,
duration:0,
delay:0,
},"same")

// remove NINETH slide animation
.to(NsTitle1A,{
y:100,
duration:0,
delay:0
},"same")
.to(NsTitle1B,{
y:100,
duration:0,
delay:0,
},"same")
.to(NsTitle1C,{
y:100,
duration:0,
delay:0,
},"same")
.to(NsTitle1D,{
y:100,
duration:0,
delay:0,
},"same")
.to(NsText,{
y:100,
opacity:0,
duration:0,
delay:0,
},"same")  
.to(NsButton,{
opacity:0,
scale:.3,
duration:0,
delay:0,
},"same")

// remove TENTH slide animation
.to(TETitle1A,{
y:100,
duration:0,
delay:0
},"same")
.to(TEsTitle1B,{
y:100,
duration:0,
delay:0,
},"same")
.to(TEsTitle1C,{
y:100,
duration:0,
delay:0,
},"same")
.to(TEsTitle1D,{
y:100,
duration:0,
delay:0,
},"same")
.to(TEsText,{
y:100,
opacity:0,
duration:0,
delay:0,
},"same")  
.to(TEsButton,{
opacity:0,
scale:.3,
duration:0,
delay:0,
},"same")

}



window.addEventListener('keypress', callBack_Listener);

function fowarding(e){
    document.querySelector('#nextSlide').removeEventListener('click', fowarding)
   
    setTimeout(() => {
        document.querySelector('#nextSlide').addEventListener('click',fowarding)
     
    }, 800);

    e.key="ArrowDown"
   callBack_Listener(e);  
        
}


function mbele(e){
    
     e.key="ArrowDown"
    callBack_Listener(e);  

        document.querySelector('#linked-svg').removeEventListener('click', mbele)

    
        setTimeout(() => {
            document.querySelector('#linked-svg').addEventListener('click', mbele)
        }, 800);

        if(window.innerWidth<780){
            if(fullScreen===false){
                // document.addEventListener('scroll', scrolled)
                document.documentElement.requestFullscreen();
                fullScreen=true;
            }
            
        }
        
}

document.querySelector('#linked-svg').addEventListener('click', mbele)
document.querySelector('#nextSlide').addEventListener('click',fowarding)


}




function closeIntro(){

timeline.to(document.querySelector('.loader'),{
    opacity:0,
    duration:.6,
    ease:"Power3.ease",
    delay:0
})
.to(document.querySelector('.loader'),{
    y:"-105vh",
    duration:0,
    ease:"Power3.ease",
    delay:0
})

openFirstSlide()

}



var databases = [
    {
        title:"What do we do?",
        paragraph:"   It's a question we've all been asked. Inshort Leendro is design, animate,  develop app  ,website and online business like CEO tools",
        button:"view our services",
        video_link:"videos/section1.mp4"
    },
    {
        title:"how we handle your work?",
        paragraph:"It's a question we've all been asked. Inshort Leendro is design, animate,  develop app  ,website and online business like CEO tools",
        button:"view our process",
        video_link:"videos/seciton2.mp4"
    },
    {
        title:"What to expect from uUs?",
        paragraph:"   It's a question we've all been asked. Inshort Leendro is design, animate,  develop app  ,website and online business like CEO tools",
        button:"view clients feedback",
        video_link:"videos/section3.mp4"
    },
    {
        title:"What to expect from us?",
        paragraph:"   It's a question we've all been asked. Inshort Leendro is design, animate,  develop app  ,website and online business like CEO tools",
        button:"view clients feedback",
        video_link:"videos/section4.mp4"
    },
    {
        title:"What to expect from us?",
        paragraph:" It's a question we've all been asked. Inshort Leendro is design, animate,  develop app  ,website and online business like CEO tools",
        button:"view clients feedback",
        video_link:"videos/section5.mp4"
    },
    {
        title:"What to expect from us?",
        paragraph:"   It's a question we've all been asked. Inshort Leendro is design, animate,  develop app  ,website and online business like CEO tools",
        button:"view clients feedback",
        video_link:"videos/section6.mp4"
    },
    {
        title:"What to expect from us?",
        paragraph:"   It's a question we've all been asked. Inshort Leendro is design, animate,  develop app  ,website and online business like CEO tools",
        button:"view clients feedback",
        video_link:"videos/section6.mp4"
    },
    {
        title:"What to expect from us?",
        paragraph:"   It's a question we've all been asked. Inshort Leendro is design, animate,  develop app  ,website and online business like CEO tools",
        button:"view clients feedback",
        video_link:"videos/section6.mp4"
    },
    {
        title:"What to expect from us?",
        paragraph:"   It's a question we've all been asked. Inshort Leendro is design, animate,  develop app  ,website and online business like CEO tools",
        button:"view clients feedback",
        video_link:"videos/section6.mp4"
    },
    {
        title:"What to expect from us?",
        paragraph:"   It's a question we've all been asked. Inshort Leendro is design, animate,  develop app  ,website and online business like CEO tools",
        button:"view clients feedback",
        video_link:"videos/section6.mp4"
    },
    
]

function changeButtonColor(color){
    if(color==='blue'){

       window.theme='bl'
       document.querySelector('.closeNav svg').style.fill="var(--dblue)"
           document.querySelector('.menuInside').style.background="var(--blue)"

        setTimeout(() => {
            button_main.style.background='#40BE88';
        }, 300);
    }
    
    else if(color==='full-blue'){
        window.theme='bl'
        document.querySelector('.closeNav svg').style.fill="var(--dblue)"
        document.querySelector('.menuInside').style.background="var(--blue)"
        setTimeout(() => {
         button_main.style.background='rgb(49 45 197)';
        }, 300);
         }
    else if(color==='orange'){
        window.theme='og'
        document.querySelector('.closeNav svg').style.fill="var(--dorange)"
        document.querySelector('.menuInside').style.background="var(--orange)"
   setTimeout(() => {
    button_main.style.background='rgb(214, 115, 28)';
   }, 300);
    }
    else if(color==='green'){
        window.theme='gr'
        document.querySelector('.closeNav svg').style.fill="var(--dgreen)"
        document.querySelector('.menuInside').style.background="var(--green)"
        setTimeout(() => {
            button_main.style.background='rgb(13 156 72)';
        }, 300);

    }
    else if(color==='pink'){
        window.theme='pi'
        document.querySelector('.closeNav svg').style.fill="var(--dpink)"
        document.querySelector('.menuInside').style.background="var(--pink)"
        setTimeout(() => {
            button_main.style.background='rgb(230 57 71)';
        }, 300);
    }
    else if(color==='violet'){
        window.theme='vip';
        window.theme='vip';
        document.querySelector('.closeNav svg').style.fill="var(--dviolet)"
        document.querySelector('.menuInside').style.background="var(--violet)"
      setTimeout(() => {
        button_main.style.background='rgb(136 28 214)';
      }, 300);
    }
    else if(color==='yellow'){
        window.theme='ye'
        document.querySelector('.closeNav svg').style.fill="var(--dyellow)"
        document.querySelector('.menuInside').style.background="var(--yellow)"
      setTimeout(() => {
        button_main.style.background='rgb(232 167 14)';
      }, 300);
    }
    else{
        window.theme='bl'
        document.querySelector('.closeNav svg').style.fill="var(--dblue)"
        document.querySelector('.menuInside').style.background="var(--blue)"
    console.log('button color cannot be updated! please refresh site now');
    }
}


class leendro {
    constructor(){
     
    }


     animateSlides(direction){
  
       

         let direct = direction;
         if(direct==='next'){
          if(GLOBAL_CURRENT_SLIDE===1){
           
           
            if(zmereloadZote===false){
                document.querySelector('.section-2 video').load();
            }

            app.style.background="rgb(255, 156, 67"; 
          

                const tl = new gsap.timeline();
                tl.to(button_main,{
                    scale:0,
                    duration:.18,
                    ease:"Power3.easeIn",
                    delay:0,
                    onanimationend:changeButtonColor('orange')
                },'same').to(fistSlide,{
                    y:"-105vh",
                    duration:.8,
                    ease:"Power4.out",
                    scale:1.05,
                    delay:0,
    
                },'same').to(sec1,{
                    y:"-100vh",
                    duration:.6,
                    ease:"Power4.ease",
                    delay:0,
                },'same')
                
    // ANIMATE TITLE
                .to(SsTitle1A,{
                    y:0,
                    duration:.6,
                    ease:"Power3.easeOut",
                    delay:.5,
                },"same")
                .to(SsTitle1B,{
                    y:0,
                    duration:.6,
                    ease:"Power3.easeOut",
                    delay:.56,
                },"same")
                .to(SsTitle1C,{
                    y:0,
                    duration:.6,
                    ease:"Power3.easeOut",
                    delay:.62,
                },"same")
                .to(SsTitle1D,{
                    y:0,
                    duration:.6,
                    ease:"Power3.easeOut",
                    delay:.68,
                },"same")
                .to(SsText,{
                    y:0,
                    opacity:1,
                    ease:"Power3.easeOut",
                    duration:.7,
                    delay:.75
                },"same")
                
.to(SsButton,{
    opacity:1,
    scale:1.16,
   duration:.38,
   ease:"Power3.ease",
   delay:.94
},"same")
.to(SsButton,{
    scale:1,
   duration:.28,
   ease:"Power3.ease",
   delay:1.2
},"same")

.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")

// remove landing slide animation
.to(sec1ImgLeft,{
    opacity:0,
    scale:0.3,
    duration:0,
    delay:2
   
},"same").to(sec1ImgRight,{
    opacity:0,
    scale:0.3,
    duration:0,
    delay:2
},"same").to(sec1Head1,{
    y:100,
    duration:0,
    delay:2
},"same").to(sec1Head2,{
    y:100,
    duration:0,
    delay:2
},"same").to(sec1Head3,{
    y:100,
    duration:0,
    delay:2
},"same").to(sec1Button,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:2
},"same")
.to(sec1ScrollInfo,{
    opacity:0,
    duration:0,
    delay:2
},"same") 
.to(sec1ScrollSvg,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:2
},"same")
                
                return;         
         }


         else if(GLOBAL_CURRENT_SLIDE===2){
            if(zmereloadZote===false){
                document.querySelector('.section-3 video').load();
            }

                        
        app.style.background="rgb(160, 91, 246)";  
           
                const tl = new gsap.timeline();
                 tl.to(button_main,{
                    scale:0,
                    duration:.18,
                    ease:"Power3.easeIn",
                    delay:0,
                    onanimationend:changeButtonColor('violet')
                },'same').to(sec1,{
                    y:"-205vh",
                    duration:1.6,
                    ease:"Power4.out",
                    scale:1.05,
                    delay:0,
    
                },'same').to(sec2,{
                    y:"-200vh",
                    duration:.6,
                    ease:"Power4.ease",
                    delay:0,
                },'same')
                // remove SECOND slide animation
             .to(SsTitle1A,{
                y:100,
                duration:0,
                delay:.5
            },"same")
            .to(SsTitle1B,{
                y:100,
                duration:0,
                delay:.5,
            },"same")
            .to(SsTitle1C,{
                y:100,
                duration:0,
                delay:.5,
            },"same2")
            .to(SsTitle1D,{
                y:100,
                duration:0,
                delay:.5,
            },"same")
            .to(SsText,{
                y:100,
                opacity:0,
                duration:0,
                delay:.5,
            },"same")
            
            .to(SsButton,{
            opacity:0,
            scale:.3,
            duration:0,
            delay:.5,
            },"same")
                         
    // ANIMATE THIRD SLIDE TITLE AND TEXT
    .to(TsTitle1A,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.5,
    },"same")
    .to(TsTitle1B,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.56,
    },"same")
    .to(TsTitle1C,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.62,
    },"same")
    .to(TsTitle1D,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.68,
    },"same")
    .to(TsTitle1E,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.7,
    },"same")
    .to(TsText,{
        y:0,
        opacity:1,
        ease:"Power3.easeOut",
        duration:.7,
        delay:.75
    },"same")
    
.to(TsButton,{
opacity:1,
scale:1.16,
duration:.38,
ease:"Power3.ease",
delay:.94
},"same")
.to(TsButton,{
scale:1,
duration:.28,
ease:"Power3.ease",
delay:1.2
},"same")

.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")

                return;
             
       
         }

         else if(GLOBAL_CURRENT_SLIDE===3){
            if(zmereloadZote===false){
                document.querySelector('.section-4 video').load();
            }

                      
        app.style.background="rgb(160, 91, 246)";  
           
            const tl = new gsap.timeline();
            tl.to(button_main,{
                scale:0,
                duration:.18,
                ease:"Power3.easeIn",
                delay:0,
                onanimationend:changeButtonColor('green')
            },'same').to(sec2,{
                y:"-305vh",
                duration:1.6,
                ease:"Power4.out",
                scale:1.05,
                delay:0,

            },'same').to(sec3,{
                y:"-300vh",
                duration:.6,
                ease:"Power4.ease",
                delay:0,
            },'same')

             // remove THIRD slide animation
             .to(TsTitle1A,{
                y:100,
                duration:0,
                delay:.5
            },"same")
            .to(TsTitle1B,{
                y:100,
                duration:0,
                delay:.5,
            },"same")
            .to(TsTitle1C,{
                y:100,
                duration:0,
                delay:.5,
            },"same2")
            .to(TsTitle1D,{
                y:100,
                duration:0,
                delay:.5,
            },"same")
            .to(TsTitle1E,{
                y:100,
                duration:0,
                delay:.5,
            },"same")
            .to(TsText,{
                y:100,
                opacity:0,
                duration:0,
                delay:.5,
            },"same")
            
            .to(TsButton,{
            opacity:0,
            scale:.3,
            duration:0,
            delay:.5,
            },"same")

            // ANIMATE FOURTH SLIDE
            .to(FsText,{
                y:0,
                opacity:1,
                ease:"Power3.easeOut",
                duration:.7,
                delay:.53
            },"same")
            .to(FsTitle1A,{
                y:0,
                duration:.6,
                ease:"Power3.easeOut",
                delay:.56,
            },"same")
            .to(FsTitle1B,{
                y:0,
                duration:.6,
                ease:"Power3.easeOut",
                delay:.62,
            },"same")
            .to(FsTitle1C,{
                y:0,
                duration:.6,
                ease:"Power3.easeOut",
                delay:.68,
            },"same")
            .to(FsTitle1D,{
                y:0,
                duration:.6,
                ease:"Power3.easeOut",
                delay:.7,
            },"same")
            .to(FsTitle1E,{
                y:0,
                duration:.6,
                ease:"Power3.easeOut",
                delay:.78,
            },"same")
            
            
        .to(FsButton,{
        opacity:1,
        scale:1.16,
        duration:.3,
        ease:"Power3.ease",
        delay:.94
        },"same")
        .to(FsButton,{
        scale:1,
        duration:.29,
        ease:"Power3.ease",
        delay:1.1
        },"same")

        .to(button_main,{
            scale:1.5,
           duration:.38,
           ease:"Power3.ease",
           delay:1.32
        },"same")
        .to(button_main,{
            scale:1,
           duration:.26,
           ease:"Power3.ease",
           delay:1.46
        },"same")
        

            return;
         
   
     }


     else if(GLOBAL_CURRENT_SLIDE===4){
             
        if(zmereloadZote===false){
            document.querySelector('.section-5 video').load();
        }

        app.style.background="rgb(32, 209, 134)";   
        
        const tl = new gsap.timeline();
        tl.to(button_main,{
            scale:0,
            duration:.18,
            ease:"Power3.easeIn",
            delay:0,
            onanimationend:changeButtonColor('yellow')
        },'same').to(sec3,{
            y:"-403vh",
            duration:1.6,
            ease:"Power4.out",
            scale:1.05,
            delay:0,

        },'same').to(sec4,{
            y:"-400vh",
            duration:.6,
            ease:"Power4.ease",
            delay:0,
        },'same')
         // remove FOURTH slide animation
         .to(FsTitle1A,{
            y:100,
            duration:0,
            delay:.5
        },"same")
        .to(FsTitle1B,{
            y:100,
            duration:0,
            delay:.5,
        },"same")
        .to(FsTitle1C,{
            y:100,
            duration:0,
            delay:.5,
        },"same2")
        .to(FsTitle1D,{
            y:100,
            duration:0,
            delay:.5,
        },"same")
        .to(FsTitle1E,{
            y:100,
            duration:0,
            delay:.5,
        },"same")
        .to(FsText,{
            y:100,
            opacity:0,
            duration:0,
            delay:.5,
        },"same")
        
        .to(FsButton,{
        opacity:0,
        scale:.3,
        duration:0,
        delay:.5,
        },"same")
        // ANIMATE FIFTH SLIDE
        .to(VsTitle1A,{
            y:0,
            duration:.6,
            ease:"Power3.easeOut",
            delay:.5,
        },"same")
        .to(VsTitle1B,{
            y:0,
            duration:.6,
            ease:"Power3.easeOut",
            delay:.56,
        },"same")
        .to(VsTitle1C,{
            y:0,
            duration:.6,
            ease:"Power3.easeOut",
            delay:.62,
        },"same")
        
        .to(VsText,{
            y:0,
            opacity:1,
            ease:"Power3.easeOut",
            duration:.7,
            delay:.75
        },"same")
        
    .to(VsButton,{
    opacity:1,
    scale:1.16,
    duration:.38,
    ease:"Power3.ease",
    delay:.94
    },"same")
    .to(VsButton,{
    scale:1,
    duration:.28,
    ease:"Power3.ease",
    delay:1.2
    },"same")

    .to(button_main,{
        scale:1.5,
       duration:.38,
       ease:"Power3.ease",
       delay:1.32
    },"same")
    .to(button_main,{
        scale:1,
       duration:.26,
       ease:"Power3.ease",
       delay:1.46
    },"same")
        return;

        
     

 }

 else if(GLOBAL_CURRENT_SLIDE===5){

    if(zmereloadZote===false){
        document.querySelector('.section-6 video').load();
    }

    app.style.background="rgb(253, 200, 62)";   
  
    const tl = new gsap.timeline();
    tl.to(button_main,{
        scale:0,
        duration:.18,
        ease:"Power3.easeIn",
        delay:0,
        onanimationend:changeButtonColor('full-blue')
    },'same').to(sec4,{
        y:"-503vh",
        duration:1.6,
        ease:"Power4.out",
        scale:1.05,
        delay:0,

    },'same').to(sec5,{
        y:"-500vh",
        duration:.6,
        ease:"Power4.ease",
        delay:0,
    },'same')
    // remove FIFTH slide animation
    .to(VsTitle1A,{
        y:100,
        duration:0,
        delay:.5
    },"same")
    .to(VsTitle1B,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(VsTitle1C,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(VsText,{
        y:100,
        opacity:0,
        duration:0,
        delay:.5,
    },"same")  
    .to(VsButton,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:.5,
    },"same")
    // ANIMATE SIXTH SLIDE
    .to(XsTitle1A,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.5,
    },"same")
    .to(XsTitle1B,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.56,
    },"same")
    .to(XsTitle1C,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.62,
    },"same").to(XsTitle1D,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.68,
    },"same")
    
    .to(XsText,{
        y:0,
        opacity:1,
        ease:"Power3.easeOut",
        duration:.7,
        delay:.75
    },"same")
    
.to(XsButton,{
opacity:1,
scale:1.16,
duration:.38,
ease:"Power3.ease",
delay:.94
},"same")
.to(XsButton,{
scale:1,
duration:.28,
ease:"Power3.ease",
delay:1.2
},"same")

.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")
    return;
    
}


else if(GLOBAL_CURRENT_SLIDE===6){

    if(zmereloadZote===false){
        document.querySelector('.section-7 video').load();
    }

    app.style.background="rgb(91, 100, 246)";  

  
    const tl = new gsap.timeline();
    tl.to(button_main,{
        scale:0,
        duration:.18,
        ease:"Power3.easeIn",
        delay:0,
        onanimationend:changeButtonColor('yellow')
    },'same').to(sec5,{
        y:"-603vh",
        duration:1.6,
        ease:"Power4.out",
        scale:1.05,
        delay:0,

    },'same').to(sec6,{
        y:"-600vh",
        duration:.6,
        ease:"Power4.ease",
        delay:0,
    },'same')

    // remove SIXTH slide animation
    .to(XsTitle1A,{
        y:100,
        duration:0,
        delay:.5
    },"same")
    .to(XsTitle1B,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(XsTitle1C,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(XsTitle1D,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(XsText,{
        y:100,
        opacity:0,
        duration:0,
        delay:.5,
    },"same")  
    .to(XsButton,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:.5,
    },"same")

    // ANIMATE SEVENTH SLIDE
    .to(s7Title1A,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.51,
    },"same")
    .to(s7Title1B,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.51,
    },"same")
    .to(s7Title1C,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.6,
    },"same")
    
    .to(s7Text,{
        y:0,
        opacity:1,
        ease:"Power3.easeOut",
        duration:.7,
        delay:.75
    },"same")
    
.to(s7Button,{
opacity:1,
scale:1.16,
duration:.38,
ease:"Power3.ease",
delay:.94
},"same")
.to(s7Button,{
scale:1,
duration:.28,
ease:"Power3.ease",
delay:1.2
},"same")

.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")
    return;
    
 

}

else if(GLOBAL_CURRENT_SLIDE===7){

    if(zmereloadZote===false){
        document.querySelector('.section-8 video').load();
    }


  app.style.background="rgb(253, 200, 62)"; 
  
    const tl = new gsap.timeline();
    tl.to(button_main,{
        scale:0,
        duration:.18,
        ease:"Power3.easeIn",
        delay:0,
        onanimationend:changeButtonColor('pink')
    },'same').to(sec6,{
        y:"-703vh",
        duration:1.6,
        ease:"Power4.out",
        scale:1.05,
        delay:0,

    },'same').to(sec7,{
        y:"-700vh",
        duration:.6,
        ease:"Power4.ease",
        delay:0,
    },'same')

      // remove SEVENTH slide animation
      .to(s7Title1A,{
        y:100,
        duration:0,
        delay:.5
    },"same")
    .to(s7Title1B,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(s7Title1C,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(s7Text,{
        y:100,
        opacity:0,
        duration:0,
        delay:.5,
    },"same")  
    .to(s7Button,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:.5,
    },"same")

    // ANIMATE EIGHTH SLIDE
    .to(EsTitle1A,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.5,
    },"same")
    .to(EsTitle1B,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.56,
    },"same")
    .to(EsTitle1C,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.62,
    },"same")
    
    .to(EsText,{
        y:0,
        opacity:1,
        ease:"Power3.easeOut",
        duration:.7,
        delay:.75
    },"same")
    
.to(EsButton,{
opacity:1,
scale:1.16,
duration:.38,
ease:"Power3.ease",
delay:.94
},"same")
.to(EsButton,{
scale:1,
duration:.28,
ease:"Power3.ease",
delay:1.2
},"same")

.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")
    return;
    
 

}

else if(GLOBAL_CURRENT_SLIDE===8){

    if(zmereloadZote===false){
        document.querySelector('.section-9 video').load();
    }


    app.style.background="rgb(255, 102, 103)";
  
    const tl = new gsap.timeline();
    tl.to(button_main,{
        scale:0,
        duration:.18,
        ease:"Power3.easeIn",
        delay:0,
        onanimationend:changeButtonColor('yellow')
    },'same').to(sec7,{
        y:"-803vh",
        duration:1.6,
        ease:"Power4.out",
        scale:1.05,
        delay:0,

    },'same').to(sec8,{
        y:"-800vh",
        duration:.6,
        ease:"Power4.ease",
        delay:0,
    },'same')

       // remove EIGHTH slide animation
       .to(EsTitle1A,{
        y:100,
        duration:0,
        delay:.5
    },"same")
    .to(EsTitle1B,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(EsTitle1C,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(EsText,{
        y:100,
        opacity:0,
        duration:0,
        delay:.5,
    },"same")  
    .to(EsButton,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:.5,
    },"same")

    // ANIMATE NINETH SLIDE
    .to(NsTitle1A,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.5,
    },"same")
    .to(NsTitle1B,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.56,
    },"same")
    .to(NsTitle1C,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.62,
    },"same")
    .to(NsTitle1D,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.68,
    },"same")
    
    .to(NsText,{
        y:0,
        opacity:1,
        ease:"Power3.easeOut",
        duration:.7,
        delay:.75
    },"same")
    
.to(NsButton,{
opacity:1,
scale:1.16,
duration:.38,
ease:"Power3.ease",
delay:.94
},"same")
.to(NsButton,{
scale:1,
duration:.28,
ease:"Power3.ease",
delay:1.2
},"same")


.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")
    return;
    
 

}

else if(GLOBAL_CURRENT_SLIDE===9){

    if(zmereloadZote===false){
        document.querySelector('.section-10 video').load();
        zmereloadZote = true;
    }


    app.style.background="rgb(253, 200, 62)";
  
    const tl = new gsap.timeline();
    tl.to(button_main,{
        scale:0,
        duration:.18,
        ease:"Power3.easeIn",
        delay:0,
        onanimationend:changeButtonColor('blue')
    },'same').to(sec8,{
        y:"-903vh",
        duration:1.6,
        ease:"Power4.out",
        scale:1.05,
        delay:0,

    },'same').to(sec9,{
        y:"-900vh",
        duration:.6,
        ease:"Power4.ease",
        delay:0,
    },'same')
       // remove NINETH slide animation
       .to(NsTitle1A,{
        y:100,
        duration:0,
        delay:.5
    },"same")
    .to(NsTitle1B,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(NsTitle1C,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(NsTitle1D,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(NsText,{
        y:100,
        opacity:0,
        duration:0,
        delay:.5,
    },"same")  
    .to(NsButton,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:.5,
    },"same")

    // ANIMATE EIGHTH SLIDE
    .to(TETitle1A,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.5,
    },"same")
    .to(TEsTitle1B,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.56,
    },"same")
    .to(TEsTitle1C,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.62,
    },"same")
    .to(TEsTitle1D,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.68,
    },"same")
    
    .to(TEsText,{
        y:0,
        opacity:1,
        ease:"Power3.easeOut",
        duration:.7,
        delay:.75
    },"same")
    
.to(TEsButton,{
opacity:1,
scale:1.16,
duration:.38,
ease:"Power3.ease",
delay:.94
},"same")
.to(TEsButton,{
scale:1,
duration:.28,
ease:"Power3.ease",
delay:1.2
},"same")


.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")
    return;
    
 

}

else if(GLOBAL_CURRENT_SLIDE===10){

    app.style.background="#543DE0";
    
  
    const tl = new gsap.timeline();
    tl.to(sec9,{
        y:"-1003vh",
        duration:1.6,
        ease:"Power4.out",
        scale:1.05,
        delay:0,

    },'same').to(sec10,{
        y:"-1000vh",
        duration:.6,
        ease:"Power4.ease",
        delay:0,
    },'same')
    return;
    
 

}
        }
        
       
            
         else if(direct === 'prev'){
        
             if(GLOBAL_CURRENT_SLIDE===0){
               
                const tl = new gsap.timeline ();
                tl.to (button_main, {
                    scale: 0,
                    duration: .06,
                    ease: "Power3.out",
                    delay: 0,
                    onanimationend: changeButtonColor ('blue')
                }, 'same')
                
                let line = new gsap.timeline();
                line.to(fistSlide, {
                    y: "0vh",
                    duration:.5,
                    ease: "Expo.out",
                    scale: 1,
                    delay: 0,
                }, 'same2'). to (sec1, {
                    y: "110vh",
                    duration: 1.6,
                    ease: "Power4.out",
                    delay: 0,
                 }, 'same2')
                 .to (sec1ImgLeft, {
                    opacity: 1,
                    scale: 1,
                    duration: .6,
                    ease: "Power3.easeOut",
                    delay: .2
                }, "same2"). to (sec1ImgRight, {
                    opacity: 1,
                    scale: 1,
                    duration: .6,
                    ease: "Power3.ease",
                    delay: .2
                }, "same2"). to (sec1Head1, {
                    y: 0,
                    duration: .8,
                    ease: "Power3.ease",
                    delay: .4
                }, "same2"). to (sec1Head2, {
                    y: 0,
                    duration: .8,
                    ease: "Power3.ease",
                    delay: .48
                }, "same2"). to (sec1Head3, {
                    y: 0,
                    duration: .8,
                    ease: "Power3.ease",
                    delay: .6
                }, "same2"). to (sec1Button, {
                    opacity: 1,
                    scale: 1.46,
                    duration: .4,
                    ease: "Power4.ease",
                    delay: 1.1
                }, "same2"). to (sec1Button, {
                    scale: 1,
                    duration: .3,
                    ease: "Power4.ease",
                    delay: 1.3
                }, "same2")
                .to (sec1ScrollInfo, {
                     opacity: 1,
                    duration: .4,
                    ease: "Power4.ease",
                    delay: 1.3
                }, "same2")
                
                .to (sec1ScrollSvg, {
                    opacity: 1,
                    scale: 1.86,
                   duration: .4,
                   ease: "Power4.ease",
                   delay: 1.57
                }, "same2")
                .to (sec1ScrollSvg, {
                    scale: 1,
                   duration: .3,
                   ease: "Power4.ease",
                   delay: 1.7
                }, "same2")
   // remove first slide animation
               .to(SsTitle1A,{
                    y:100,
                    duration:0,
                    delay:1.85,
                },"same2")
                .to(SsTitle1B,{
                    y:100,
                    duration:0,
                    delay:1.85,
                },"same2")
                .to(SsTitle1C,{
                    y:100,
                    duration:0,
                    delay:1.85,
                },"same2")
                .to(SsTitle1D,{
                    y:100,
                    duration:0,
                    delay:1.85,
                },"same2")
                .to(SsText,{
                    y:100,
                    opacity:0,
                    duration:0,
                    delay:1.85,
                },"same2")
                
.to(SsButton,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:1.85,
},"same2")

.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:.92
},"same2")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.1
},"same2")

                
                return;
             }
             else if(GLOBAL_CURRENT_SLIDE===1){
             
                app.style.background="rgb(255, 156, 67";  

                const tl = new gsap.timeline();
                tl.to(button_main,{
                    scale:0,
                    duration:.06,
                    ease:"Power3.out",
                    delay:0,
                    onanimationend:changeButtonColor('orange')
                },'same').to(sec1,{
                    y:"-100vh",
                    duration:.8,
                    ease:"Power4.ease",
                    scale:1.05,
                    delay:0,
    
                },'same').to(sec2,{
                    y:"-90vh",
                    duration:.6,
                    ease:"Power4.out",
                    delay:0,
                },'same')
                // remove THIRD slide animation
 .to(TsTitle1A,{
    y:100,
    duration:0,
    delay:.7
},"same")
.to(TsTitle1B,{
    y:100,
    duration:0,
    delay:.7,
},"same").to(TsTitle1C,{
    y:100,
    duration:0,
    delay:.7,
},"same2")
.to(TsTitle1D,{
    y:100,
    duration:0,
    delay:.7,
},"same")
.to(TsTitle1E,{
    y:100,
    duration:0,
    delay:.7,
},"same")
.to(TsText,{
    y:100,
    opacity:0,
    duration:0,
    delay:.7,
},"same")

.to(TsButton,{
opacity:0,
scale:.3,
duration:0,
delay:.7,
},"same")
        // ENTER SECOND SLIDE ANIMATION
                .to(SsTitle1A,{
                    y:0,
                    duration:.6,
                    ease:"Power3.easeOut",
                    delay:.5,
                },"same")
                .to(SsTitle1B,{
                    y:0,
                    duration:.6,
                    ease:"Power3.easeOut",
                    delay:.56,
                },"same")
                .to(SsTitle1C,{
                    y:0,
                    duration:.6,
                    ease:"Power3.easeOut",
                    delay:.62,
                },"same")
                .to(SsTitle1D,{
                    y:0,
                    duration:.6,
                    ease:"Power3.easeOut",
                    delay:.68,
                },"same")
                .to(SsText,{
                    y:0,
                    opacity:1,
                    ease:"Power3.easeOut",
                    duration:.7,
                    delay:.75
                },"same")
                
.to(SsButton,{
    opacity:1,
    scale:1.16,
   duration:.38,
   ease:"Power3.ease",
   delay:.94
},"same")
.to(SsButton,{
    scale:1,
   duration:.28,
   ease:"Power3.ease",
   delay:1.2
},"same")
 
.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")
                return;
             
       
         }
         else if(GLOBAL_CURRENT_SLIDE===2){
             
            app.style.background="rgb(255, 156, 67";  
            
           
            const tl = new gsap.timeline();
            tl.to(button_main,{
                scale:0,
                duration:.06,
                ease:"Power3.out",
                delay:0,
                onanimationend:changeButtonColor('violet')
            },'same').to(sec2,{
                y:"-200vh",
                duration:.8,
                ease:"Power4.ease",
                scale:1.05,
                delay:0,

            },'same').to(sec3,{
                y:"-195vh",
                duration:.8,
                ease:"Power4.out",
                delay:0,
            },'same')
             // remove FOURTH slide animation
             .to(FsTitle1A,{
                y:100,
                duration:0,
                delay:.5
            },"same")
            .to(FsTitle1B,{
                y:100,
                duration:0,
                delay:.5,
            },"same")
            .to(FsTitle1C,{
                y:100,
                duration:0,
                delay:.5,
            },"same2")
            .to(FsTitle1D,{
                y:100,
                duration:0,
                delay:.5,
            },"same")
            .to(FsTitle1E,{
                y:100,
                duration:0,
                delay:.5,
            },"same")
            .to(FsText,{
                y:100,
                opacity:0,
                duration:0,
                delay:.5,
            },"same")
            
            .to(FsButton,{
            opacity:0,
            scale:.3,
            duration:0,
            delay:.5,
            },"same")
             
             // ANIMATE THIRD SLIDE TITLE AND TEXT
    .to(TsTitle1A,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.5,
    },"same")
    .to(TsTitle1B,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.56,
    },"same")
    .to(TsTitle1C,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.62,
    },"same")
    .to(TsTitle1D,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.68,
    },"same")
    .to(TsTitle1E,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.7,
    },"same")
    .to(TsText,{
        y:0,
        opacity:1,
        ease:"Power3.easeOut",
        duration:.7,
        delay:.75
    },"same")
    
.to(TsButton,{
opacity:1,
scale:1.16,
duration:.38,
ease:"Power3.ease",
delay:.94
},"same")
.to(TsButton,{
scale:1,
duration:.28,
ease:"Power3.ease",
delay:1.2
},"same")

.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")
            return;
         }
        
     else if(GLOBAL_CURRENT_SLIDE===3){
             
        app.style.background="rgb(160, 91, 246)";  
           
        const tl = new gsap.timeline();
        tl.to(button_main,{
            scale:0,
            duration:.06,
            ease:"Power3.out",
            delay:0,
            onanimationend:changeButtonColor('green')
        },'same').to(sec4,{
            y:"-295vh",
            duration:.8,
            ease:"Power4.ease",
            scale:1.05,
            delay:0,

        },'same').to(sec3,{
            y:"-300vh",
            duration:.8,
            ease:"Power4.out",
            delay:0,
        },'same')
         // remove FIFTH slide animation
         .to(VsTitle1A,{
            y:100,
            duration:0,
            delay:.5
        },"same")
        .to(VsTitle1B,{
            y:100,
            duration:0,
            delay:.5,
        },"same")
        .to(VsTitle1C,{
            y:100,
            duration:0,
            delay:.5,
        },"same")
        .to(VsText,{
            y:100,
            opacity:0,
            duration:0,
            delay:.5,
        },"same")
        
        .to(VsButton,{
        opacity:0,
        scale:.3,
        duration:0,
        delay:.5,
        },"same")

        // ANIMATE FOURTH SLIDE
        .to(FsText,{
            y:0,
            opacity:1,
            ease:"Power3.easeOut",
            duration:.7,
            delay:.53
        },"same")
        .to(FsTitle1A,{
            y:0,
            duration:.6,
            ease:"Power3.easeOut",
            delay:.56,
        },"same")
        .to(FsTitle1B,{
            y:0,
            duration:.6,
            ease:"Power3.easeOut",
            delay:.62,
        },"same")
        .to(FsTitle1C,{
            y:0,
            duration:.6,
            ease:"Power3.easeOut",
            delay:.68,
        },"same")
        .to(FsTitle1D,{
            y:0,
            duration:.6,
            ease:"Power3.easeOut",
            delay:.7,
        },"same")
        .to(FsTitle1E,{
            y:0,
            duration:.6,
            ease:"Power3.easeOut",
            delay:.78,
        },"same")
        
        
    .to(FsButton,{
    opacity:1,
    scale:1.16,
    duration:.3,
    ease:"Power3.ease",
    delay:.94
    },"same")
    .to(FsButton,{
    scale:1,
    duration:.29,
    ease:"Power3.ease",
    delay:1.1
    },"same")
    .to(button_main,{
        scale:1.5,
       duration:.38,
       ease:"Power3.ease",
       delay:1.32
    },"same")
    .to(button_main,{
        scale:1,
       duration:.26,
       ease:"Power3.ease",
       delay:1.46
    },"same")



        return;
     

 }
 else if(GLOBAL_CURRENT_SLIDE===4){
             
    app.style.background="rgb(32, 209, 134)";   
           
    const tl = new gsap.timeline();
    tl.to(button_main,{
        scale:0,
        duration:.06,
        ease:"Power3.out",
        delay:0,
        onanimationend:changeButtonColor('yellow')
    },'same').to(sec5,{
        y:"-395vh",
        duration:.8,
        ease:"Power4.ease",
        scale:1.05,
        delay:0,

    },'same').to(sec4,{
        y:"-400vh",
        duration:.8,
        ease:"Power4.out",
        delay:0,
    },'same')
     // remove SIXTH slide animation
     .to(XsTitle1A,{
        y:100,
        duration:0,
        delay:.5
    },"same")
    .to(XsTitle1B,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(XsTitle1C,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(XsTitle1D,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(XsText,{
        y:100,
        opacity:0,
        duration:0,
        delay:.5,
    },"same")
    
    .to(XsButton,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:.5,
    },"same")
// ANIMATE FIFTH SLIDE
.to(VsTitle1A,{
    y:0,
    duration:.6,
    ease:"Power3.easeOut",
    delay:.5,
},"same")
.to(VsTitle1B,{
    y:0,
    duration:.6,
    ease:"Power3.easeOut",
    delay:.56,
},"same")
.to(VsTitle1C,{
    y:0,
    duration:.6,
    ease:"Power3.easeOut",
    delay:.62,
},"same")

.to(VsText,{
    y:0,
    opacity:1,
    ease:"Power3.easeOut",
    duration:.7,
    delay:.75
},"same")

.to(VsButton,{
opacity:1,
scale:1.16,
duration:.38,
ease:"Power3.ease",
delay:.94
},"same")
.to(VsButton,{
scale:1,
duration:.28,
ease:"Power3.ease",
delay:1.2
},"same")

.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")
    return;


}

else if(GLOBAL_CURRENT_SLIDE===5){
             
                 
    app.style.background="rgb(253, 200, 62)";   
           
    const tl = new gsap.timeline();
    tl.to(button_main,{
        scale:0,
        duration:.06,
        ease:"Power3.out",
        delay:0,
        onanimationend:changeButtonColor('full-blue')
    },'same').to(sec6,{
        y:"-495vh",
        duration:.8,
        ease:"Power4.ease",
        scale:1.05,
        delay:0,

    },'same').to(sec5,{
        y:"-500vh",
        duration:.8,
        ease:"Power4.out",
        delay:0,
    },'same')
    
    // remove SEVENTH slide animation
    .to(s7Title1A,{
        y:100,
        duration:0,
        delay:.5
    },"same")
    .to(s7Title1B,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(s7Title1C,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(s7Text,{
        y:100,
        opacity:0,
        duration:0,
        delay:.5,
    },"same")  
    .to(s7Button,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:.5,
    },"same")

     // ANIMATE SIXTH SLIDE
     .to(XsTitle1A,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.5,
    },"same")
    .to(XsTitle1B,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.56,
    },"same")
    .to(XsTitle1C,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.62,
    },"same").to(XsTitle1D,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.68,
    },"same")
    
    .to(XsText,{
        y:0,
        opacity:1,
        ease:"Power3.easeOut",
        duration:.7,
        delay:.75
    },"same")
    
.to(XsButton,{
opacity:1,
scale:1.16,
duration:.38,
ease:"Power3.ease",
delay:.94
},"same")
.to(XsButton,{
scale:1,
duration:.28,
ease:"Power3.ease",
delay:1.2
},"same")

.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")
    return;
 

}

else if(GLOBAL_CURRENT_SLIDE===6){
             
    app.style.background="rgb(91, 100, 246)";   
           
    const tl = new gsap.timeline();
    tl.to(button_main,{
        scale:0,
        duration:.06,
        ease:"Power3.out",
        delay:0,
        onanimationend:changeButtonColor('yellow')
    },'same').to(sec7,{
        y:"-595vh",
        duration:.8,
        ease:"Power4.ease",
        scale:1.05,
        delay:0,

    },'same').to(sec6,{
        y:"-600vh",
        duration:.8,
        ease:"Power4.out",
        delay:0,
    },'same')
    
    
      // remove EIGHTH slide animation
      .to(EsTitle1A,{
        y:100,
        duration:0,
        delay:.5
    },"same")
    .to(EsTitle1B,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(EsTitle1C,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(EsText,{
        y:100,
        opacity:0,
        duration:0,
        delay:.5,
    },"same")  
    .to(EsButton,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:.5,
    },"same")

    // ANIMATE SEVENTH SLIDE
    .to(s7Title1A,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.51,
    },"same")
    .to(s7Title1B,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.51,
    },"same")
    .to(s7Title1C,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.6,
    },"same")
    .to(s7Text,{
        y:0,
        opacity:1,
        ease:"Power3.easeOut",
        duration:.7,
        delay:.75
    },"same")
    
.to(s7Button,{
opacity:1,
scale:1.16,
duration:.38,
ease:"Power3.ease",
delay:.94
},"same")
.to(s7Button,{
scale:1,
duration:.28,
ease:"Power3.ease",
delay:1.2
},"same")

.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")
    return;
 

}

else if(GLOBAL_CURRENT_SLIDE===7){
             
    app.style.background="rgb(253, 200, 62)";       

    const tl = new gsap.timeline();
    tl.to(button_main,{
        scale:0,
        duration:.06,
        ease:"Power3.out",
        delay:0,
        onanimationend:changeButtonColor('pink')
    },'same').to(sec8,{
        y:"-625vh",
        duration:.8,
        ease:"Power4.ease",
        scale:1.05,
        delay:0,

    },'same').to(sec7,{
        y:"-700vh",
        duration:.8,
        ease:"Power4.out",
        delay:0,
    },'same')
    
      // remove EIGHTH slide animation
      .to(NsTitle1A,{
        y:100,
        duration:0,
        delay:.5
    },"same")
    .to(NsTitle1B,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(NsTitle1C,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(NsTitle1D,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(NsText,{
        y:100,
        opacity:0,
        duration:0,
        delay:.5,
    },"same")  
    .to(NsButton,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:.5,
    },"same")

    // ANIMATE SEVENTH SLIDE
    .to(EsTitle1A,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.5,
    },"same")
    .to(EsTitle1B,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.56,
    },"same")
    .to(EsTitle1C,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.62,
    },"same")
    
    .to(EsText,{
        y:0,
        opacity:1,
        ease:"Power3.easeOut",
        duration:.7,
        delay:.75
    },"same")
    
.to(EsButton,{
opacity:1,
scale:1.16,
duration:.38,
ease:"Power3.ease",
delay:.94
},"same")
.to(EsButton,{
scale:1,
duration:.28,
ease:"Power3.ease",
delay:1.2
},"same")

.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")

    
    return;
 

}

else if(GLOBAL_CURRENT_SLIDE===8){
             
    app.style.background="rgb(253, 200, 62)";
           
    const tl = new gsap.timeline();
    tl.to(button_main,{
        scale:0,
        duration:.06,
        ease:"Power3.out",
        delay:0,
        onanimationend:changeButtonColor('yellow')
    },'same').to(sec9,{
        y:"-725vh",
        duration:.8,
        ease:"Power4.ease",
        scale:1.05,
        delay:0,

    },'same').to(sec8,{
        y:"-800vh",
        duration:.8,
        ease:"Power4.ease",
        delay:0,
    },'same')
    
      // remove TENTH slide animation
      .to(TETitle1A,{
        y:100,
        duration:0,
        delay:.5
    },"same")
    .to(TEsTitle1B,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(TEsTitle1C,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(TEsTitle1D,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(TEsText,{
        y:100,
        opacity:0,
        duration:0,
        delay:.5,
    },"same")  
    .to(TEsButton,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:.5,
    },"same")

    // ANIMATE NINHT SLIDE
    .to(NsTitle1A,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.5,
    },"same")
    .to(NsTitle1B,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.56,
    },"same")
    .to(NsTitle1C,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.62,
    },"same")
    .to(NsTitle1D,{
        y:0,
        duration:.6,
        ease:"Power3.easeOut",
        delay:.68,
    },"same")
    
    .to(NsText,{
        y:0,
        opacity:1,
        ease:"Power3.easeOut",
        duration:.7,
        delay:.75
    },"same")
    
.to(NsButton,{
opacity:1,
scale:1.16,
duration:.38,
ease:"Power3.ease",
delay:.94
},"same")
.to(NsButton,{
scale:1,
duration:.28,
ease:"Power3.ease",
delay:1.2
},"same")

.to(button_main,{
    scale:1.5,
   duration:.38,
   ease:"Power3.ease",
   delay:1.32
},"same")
.to(button_main,{
    scale:1,
   duration:.26,
   ease:"Power3.ease",
   delay:1.46
},"same")
    
    return;
 

}

else if(GLOBAL_CURRENT_SLIDE===9){
             
    app.style.background="rgb(253, 200, 62)";
           
    const tl = new gsap.timeline();
    tl.to(sec10,{
        y:"-905vh",
        duration:.8,
        ease:"Power4.ease",
        scale:1.05,
        delay:0,

    },'same').to(sec9,{
        y:"-900vh",
        duration:.8,
        ease:"Power4.ease",
        delay:0,
    },'same')
    
      // remove NINETH slide animation
      .to(NsTitle1A,{
        y:100,
        duration:0,
        delay:.5
    },"same")
    .to(NsTitle1B,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(NsTitle1C,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(NsTitle1D,{
        y:100,
        duration:0,
        delay:.5,
    },"same")
    .to(NsText,{
        y:100,
        opacity:0,
        duration:0,
        delay:.5,
    },"same")  
    .to(NsButton,{
    opacity:0,
    scale:.3,
    duration:0,
    delay:.5,
    },"same")

    return;
 
        
}
           
         }
         else console.log('no direction found!!')
       
     }



    RenderObj(slideObj,position){
      

        let pos = position;
       let setting = slideObj;
       let readyObj = {
           video_url:setting.video_link,
           title:setting.title,
           paragraph:setting.paragraph,
           button:setting.button
       } 

       switch(pos){
           case 'prev':{
            
               this.animateSlides('prev');
              break
           }
           case 'current':{
           
             break
           }
           case 'next':{
               this.animateSlides('next');
            break 
           }
       }
       

    }

    PrepairNext(){
       
        if(GLOBAL_CURRENT_SLIDE===databases.length-1) return
        else if(GLOBAL_NEXT_SLIDE===databases.length-1) {
        GLOBAL_CURRENT_SLIDE++
        GLOBAL_PREV_SLIDE = GLOBAL_CURRENT_SLIDE -1
        this.RenderObj(databases[GLOBAL_PREV_SLIDE], 'next')
        
           return
         
        }
else{
    
    GLOBAL_NEXT_SLIDE++
    GLOBAL_CURRENT_SLIDE++
    GLOBAL_PREV_SLIDE = GLOBAL_CURRENT_SLIDE -1
  
   this.RenderObj(databases[GLOBAL_PREV_SLIDE], 'next')
}
        

             
    }
    PrepairPrev(){   
       
       if(GLOBAL_CURRENT_SLIDE===0) return;

        else if(GLOBAL_CURRENT_SLIDE===1){
            GLOBAL_CURRENT_SLIDE = 0;
            GLOBAL_NEXT_SLIDE = GLOBAL_CURRENT_SLIDE +1
                  
      this.RenderObj(databases[GLOBAL_PREV_SLIDE], 'prev')

            return
        }

       else if(GLOBAL_NEXT_SLIDE===2){
            GLOBAL_CURRENT_SLIDE = 1
            GLOBAL_NEXT_SLIDE=GLOBAL_CURRENT_SLIDE+1
          
      this.RenderObj(databases[GLOBAL_PREV_SLIDE], 'prev')
            return
        }
  
        GLOBAL_CURRENT_SLIDE--
      GLOBAL_NEXT_SLIDE--
      GLOBAL_PREV_SLIDE = GLOBAL_CURRENT_SLIDE -1
     
      this.RenderObj(databases[GLOBAL_PREV_SLIDE], 'prev')
     
    }
    prepairCurrent(fromWhere){
      
      let from = fromWhere;
        if(from==="begin"){
            this.RenderObj(databases[GLOBAL_CURRENT_SLIDE], "current")
        }
        else{
           
            this.RenderObj(databases[GLOBAL_CURRENT_SLIDE], "current")
        }

    }

    listener(e){
  
        window.removeEventListener('keydown', callBack_Listener)
        if(e.key==="ArrowUp"){  
             this.PrepairPrev()
        }
        else if(e.key==="ArrowDown"){
            this.PrepairNext()
        }

        else return

    }  
    
}

var A_LISTENER;

function callBack_Listener(e){

     A_LISTENER = new leendro;
     A_LISTENER.listener(e);
     setTimeout(() => {
        window.addEventListener('keydown', callBack_Listener)
    }, 1040);


} 




let firstSlide = new leendro
firstSlide.prepairCurrent('begin')



window.addEventListener('keydown', callBack_Listener)



let BRAND$NAME = document.querySelector('.header .left');
BRAND$NAME.style.cursor="pointer";
BRAND$NAME.addEventListener('click', function(){
  window.location.reload();
})

let relative = document.querySelector('.relative-to-body');

 let collection;
 let pastPos=0;
 let currentPosition=100;

function scrolled(e){
    
    
    // console.log('past: ',pastPos)
    // collection= relative.getBoundingClientRect();
    // currentPosition = collection.y
   
    //    console.log('current: ',currentPosition)
    //    if(pastPos<=currentPosition){
    //     document.removeEventListener('scroll', scrolled);
        
    //    setTimeout(() => {
    //     document.addEventListener('scroll', scrolled)
    //    }, 1200);
        //    console.log('moving back')
        //    e.key="ArrowUp"

        //    callBack_Listener(e);
       //}
    //    if(pastPos>=currentPosition){
    //     document.removeEventListener('scroll', scrolled);
        
    // //    setTimeout(() => {
    // //     document.addEventListener('scroll', scrolled)
    // //    }, 1200);
    //     console.log('moving foward')
    //     e.key="ArrowDown"
    //     callBack_Listener(e);
        
    //    }
           
       
    //    pastPos = currentPosition;


}


const updateListeners =()=>{

  let pop  = document.querySelector('.popUp');
   let popIn=  document.querySelector('.popUp-inside');

  if(window.innerWidth<=780){

    document.addEventListener('scroll', scrolled)
    pop.style.display='flex'

    document.querySelector('body').style.height = '1000vh';

    // const gsaap = new gsap.timeline()
 
    // gsaap.to(pop,{
    //     y:0,
    //     opacity:1,
    //     duration:.6,
    //     ease:"Power3.out",
    //     delay:0
    // },'wte').to(popIn,{
    //     scale:1,
    //     duration:.5,
    //     ease:'Expo.in',
    //     delay:0.5
    // },'wte')
 
    // function reloadSite(){
    //     window.location.reload()
    // }
 
    // function removePop(){
 
    //  gsaap.to(pop,{
    //      y:"-120vh",
    //      opacity:0,
    //      duration:.6,
    //      ease:"Power3.out",
    //      delay:0
    //  },'wte2').to(popIn,{
    //      scale:200,
    //      duration:.5,
    //      ease:'Expo.in',
    //      delay:0.5
    //  },'wte2')
 
    //  document.querySelector('.yes').removeEventListener('click', reloadSite)
    //  document.querySelector('.no').removeEventListener('click',removePop)
    //  setTimeout(() => {
    //      pop.style.display='none'
    //  }, 300);
    // }
 
    // document.querySelector('.yes').addEventListener('click', reloadSite)
    // document.querySelector('.no').addEventListener('click',removePop)
  }
  else{
    document.removeEventListener('scroll', scrolled)
  }

}


var numberOfLoadedVideo = 0;


window.addEventListener('resize', updateListeners);

 // Preload all the images in the page
 imagesLoaded(document.querySelectorAll('.image'), {background: false}, () => {
   

});


setInterval(() => {

    // document.querySelector('html').style.overflow = 'hidden'
    // document.querySelector('body').style.overflow = 'hidden'
    // document.querySelector('.app').style.overflow = 'hidden';
    document.querySelector('body').style.maxWidth = '100vw';
    document.querySelector('html').style.maxWidth = '100vw';

    // document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.maxWidth = '100vw'
   
    if(GLOBAL_CURRENT_SLIDE>0){
        document.querySelector("#color-switch").classList.add('none')
    }
    
    
    if(GLOBAL_CURRENT_SLIDE===0){
        document.querySelector("#color-switch").classList.remove('none')
        document.querySelector('#prevSlide').style.display='none'
    }
    if(GLOBAL_CURRENT_SLIDE>0){
        document.querySelector('#prevSlide').style.display='block'
        document.querySelector("#prevSlide").style.bottom='4.5%'
    }
    
    if(GLOBAL_CURRENT_SLIDE===9){
        document.querySelector("#prevSlide").style.bottom='16%'
        document.querySelector("#prevSlide").style.opacity='.8'
    }
    if(GLOBAL_CURRENT_SLIDE>0 && GLOBAL_CURRENT_SLIDE < 9){
        
        document.querySelector('#nextSlide').style.display="block"
        
            }
    else{
       
        document.querySelector('#nextSlide').style.display="none"
        

    }
}, 100);



var v1 = true;

let f = document.querySelector('.firstNumber');
let s = document.querySelector('.secondNumber');
let t = document.querySelector('.thirdNumber');
let tim =new gsap.timeline()

tim.to(f,{
    y:0,
    duration:.82,
    delay:0,
    ease:"Power3.easeOut"
},'s')
.to(s,{
   y:0,
   duration:.83,
   delay:0.1,
   ease:"Power3.easeOut"
},'s') 

function callme(){

    setTimeout(() => {
        closeIntro()
    }, 500);
}


function animateLoader(){
 let tl = new gsap.timeline();
    
             let sI = document.querySelector(".secondNumber .secondNumberInside");

        
         if(numberOfLoadedVideo===2){
             gsap.to(sI,{
                y:"-11.5%",
                delay:0,
                
            },'s')
        }
        else if(numberOfLoadedVideo===3){
            gsap.to(sI,{
                y:"-22.5%",
                delay:0,
                
            },'s')
        }
        else if(numberOfLoadedVideo===4){
            gsap.to(sI,{
                y:"-33.5%",
                delay:0,
                
            })
        }
        else if(numberOfLoadedVideo===5){
             gsap.to(sI,{
                y:"-44%",
                delay:0,
                
            },)
        }
        else if(numberOfLoadedVideo===6){
                 
            gsap.to(sI,{
                y:"-66.5%",
                delay:0,
                
            })
        }
        else if(numberOfLoadedVideo===7){
            gsap.to(sI,{
                y:"-77.5%",
                delay:0
                
            })
        }
        else if(numberOfLoadedVideo===8){
            gsap.to(sI,{
                y:"-88.5%",
                delay:0
                
            },)
        }
        else if(numberOfLoadedVideo===9){
            let timeline2 = new gsap.timeline()
            timeline2.to(sI,{
                y:"-88.5%",
                delay:0    
            },'w')
            .to(sI,{
                y:"-91%",
                delay:0.2    
            },'w')
            .to(t,{
                y:0,
                delay:.7,
                ease:"Power3.easeOut",
                duration:.8
            },"w")
            .to(f,{
                y:"-100%",
                delay:1.48,
                ease:"Power2.easeOut",
                duration:.95
            },"w")
            .to(s,{
                y:"-100%",
                delay:1.53,
                ease:"Power2.easeOut",
                duration:.96
            },"w")
            .to(t,{
                y:"-100%",
                delay:1.59,
                ease:"Power2.easeOut",
                duration:.97,
                onanimationend:callme
            },"w")

        }

        else{
            return 
        }

  

    }

    function boostResource(){
     
            if(video1State===false){
                document.querySelector('.section-2 video').setAttribute('src','videos/section2.mp4')
                document.querySelector('.section-2 video').load();
                
            }
             if(video2State===false){
                document.querySelector('.section-3 video').setAttribute('src','videos/section3.mp4')
                document.querySelector('.section-3 video').load();
            }
            if(video3State===false){
                document.querySelector('.section-4 video').setAttribute('src','videos/section4.mp4')
                document.querySelector('.section-4 video').load();
            }
            if(video4State===false){
                document.querySelector('.section-5 video').setAttribute('src','videos/section5.mp4')
                document.querySelector('.section-5 video').load();
            }
             if(video5State===false){
                document.querySelector('.section-6 video').setAttribute('src','videos/section6.mp4')
                document.querySelector('.section-6 video').load();
            }
            if(video6State===false){
                document.querySelector('.section-7 video').setAttribute('src','videos/section7.mp4')
                document.querySelector('.section-7 video').load();
            }
            else if(video7State===false){
                document.querySelector('.section-8 video').setAttribute('src','videos/section8.mp4')
                document.querySelector('.section-8 video').load();
            }
             if(video8State===false){
                document.querySelector('.section-9 video').setAttribute('src','videos/section9.mp4')
                document.querySelector('.section-9 video').load();
            }
             if(video9State===false){
               
                document.querySelector('.section-10 video').setAttribute('src','videos/section10.mp4')
                document.querySelector('.section-10 video').load();
            }
        
    }


    let imeitwa_tear = false;

    function angalia_kila_mda_video_resource(){
         if(imeitwa_tear===true) return
         else{
            
             imeitwa_tear = true     
       angalia_video_kama_zimeload = function(){
        boostResource();
       }
   


         }
    }


function checkVideoLoaded(){

   if(imeitwa_tear === false){
       angalia_kila_mda_video_resource()
   }
    
    boostResource();

    if(numberOfLoadedVideo===9){
        console.log("loaded all "+ numberOfLoadedVideo);
        // closeIntro();
    
    }
    else{
       return
    }
}




video1 = document.querySelector('.section-2 video');
video2 = document.querySelector('.section-3 video');
video3 = document.querySelector('.section-4 video');
video4 = document.querySelector('.section-5 video');
video5 = document.querySelector('.section-6 video');
video6 = document.querySelector('.section-7 video');
video7 = document.querySelector('.section-8 video');
video8 = document.querySelector('.section-9 video');
video9 = document.querySelector('.section-10 video');

video1.src="videos/section2.mp4";
video2.src="videos/section3.mp4";
video3.src ="videos/section4.mp4";
video4.src ="videos/section5.mp4";
video5.src ="videos/section6.mp4";
video6.src ="videos/section7.mp4";
video7.src ="videos/section8.mp4";
video8.src ="videos/section9.mp4";
video9.src ="videos/section10.mp4";
    





document.querySelector('.section-2 video').addEventListener('loadeddata',function(){
    v1 = true
numberOfLoadedVideo++ ;
video1State = true;
// document.querySelector('.loader .loading-text .l-text').textContent =10;
animateLoader();
     checkVideoLoaded();
},false)

document.querySelector('.section-3 video').addEventListener('loadeddata',function(){
    video2State = true;
numberOfLoadedVideo++ ;
// document.querySelector('.loader .loading-text .l-text').textContent = 20
animateLoader();
     checkVideoLoaded();
},false)
document.querySelector('.section-4 video').addEventListener('loadeddata',function(){
    video3State = true;
numberOfLoadedVideo++ ;
// document.querySelector('.loader .loading-text .l-text').textContent = 30
animateLoader();
     checkVideoLoaded();
},false)
document.querySelector('.section-5 video').addEventListener('loadeddata',function(){
    video4State = true;
numberOfLoadedVideo++ ;
// document.querySelector('.loader .loading-text .l-text').textContent =40
animateLoader();
     checkVideoLoaded();
},false)
document.querySelector('.section-6 video').addEventListener('loadeddata',function(){
    video5State = true;
numberOfLoadedVideo++ ;
// document.querySelector('.loader .loading-text .l-text').textContent =50
animateLoader();
     checkVideoLoaded();
},false)
document.querySelector('.section-7 video').addEventListener('loadeddata',function(){
    video6State = true;
numberOfLoadedVideo++ ;
// document.querySelector('.loader .loading-text .l-text').textContent = 60;
animateLoader();
     checkVideoLoaded();
},false)
document.querySelector('.section-8 video').addEventListener('loadeddata',function(){
    video7State = true;
numberOfLoadedVideo++ ;
// document.querySelector('.loader .loading-text .l-text').textContent = 70
animateLoader();
     checkVideoLoaded();
},false)
document.querySelector('.section-9 video').addEventListener('loadeddata',function(){
    video8State = true;
numberOfLoadedVideo++ ;
// document.querySelector('.loader .loading-text .l-text').textContent =99;
animateLoader();
     checkVideoLoaded();
},false)
document.querySelector('.section-10 video').addEventListener('loadeddata',function(){
    video9State = true;
numberOfLoadedVideo++ ;
// document.querySelector('.loader .loading-text .l-text').textContent =100
animateLoader();
     checkVideoLoaded();
},false)



function maliza (){
    setTimeout(() => {
        closeIntro();
    }, 1200);

}

setTimeout(() => {
    if(numberOfLoadedVideo!==9){
        // window.alert("internet connection is slow, please reaload..!")
        document.querySelector('.loader .low-connection-message').style.display="block";
        console.log('your connection is slow')
        zmereloadZote = false;
         maliza()
    }
    else{
        zmereloadZote = true;
    }
}, 5900);


// color change 

let currentColor = 'blue';
let colorBox = document.querySelector('.section-1 .colorBox');

const colorChange=()=>{
    if(currentColor==='blue'){

       
        timeline.to(colorBox,{
            duration:.8,
            ease:"Expo.out",
            opacity:1
        })
       currentColor = 'gradient'
       return
      }
    
     currentColor="blue" 
     timeline.to(colorBox,{
        duration:.8,
        ease:"Expo.out",
        opacity:0
    })
 
    document.querySelector("#color-switch").removeEventListener('click', colorChange);

    setTimeout(() => {
        document.querySelector("#color-switch").addEventListener('click', colorChange);
    }, 500);

     
}
document.querySelector("#color-switch").addEventListener('click', colorChange);




