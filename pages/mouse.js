
const progress = document.querySelector('.progress');
const progLine = document.querySelector('.line-progress')

window.addEventListener('scroll',function(){
    let h = document.documentElement;
    let st = h.scrollTop ||document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;

    let percent = st/(sh- h.clientHeight)*100;

    let roundedPercent = Math.round(percent)
    progress.innerText = `${roundedPercent}%`;
    progLine.style.width=`${roundedPercent}%`;

})






// window.addEventListener('load', function(){


      
//   //ficha cursor 
//   //document.body.style.cursor="none"

//   //tengeneza cursor mpya

//   var cursor = document.createElement("div");
//   cursor.classList.add('cursor');
 
//   document.querySelector('body').appendChild(cursor)
//   //mdogo cursor
//    var follow = document.createElement("div");
//   follow.classList.add('follow');
  
//    document.querySelector('body').appendChild(follow)

//    //to move cursor

//    function move (item,event){
//          item.style="";
//          item.style.top= event.clientY + 'px';
//          item.style.left = event.clientX + 'px';

//    }

//    if(cursor){
//        window.addEventListener("mousemove",function(event){


//            var e = event;
//            var t = e.target;
//            var f = follow;
//            var c = cursor;

//             if(t.tagName == "BUTTON"){
//               f.classList.add("scale-down-cursor-follow")
//               c.classList.add("sclae-up-cursor")
                          
//                move(c,e)
           
//             }
//             else if(t.className == "Logo-name"){
//               f.classList.add("scale-down-cursor-follow")
//               c.classList.add("sclae-up-cursor")
              
                          
//                move(c,e)
//             }
//             else if(t.className === "down-arrow"){
//               f.classList.add("scale-down-cursor-follow")
//               c.classList.add("sclae-up-cursor")
                          
//                move(c,e)
//             }

//             else if(t.className == "link"){
//               f.classList.add("scale-down-cursor-follow")
//               c.classList.add("sclae-up-cursor")
                          
//                move(c,e)
//             }

//             else if(t.tagName == "A"){
//                 f.classList.add("scale-down-cursor-follow")
//                 c.classList.add("sclae-up-cursor")
                            
//                  move(c,e)
//             }
//             else{
//                 f.classList.remove("onFocus")
//                 f.classList.remove("scale-down-cursor-follow");
//                 c.classList.remove("sclae-up-cursor")
                
//                move(c,e)
//                move(f,e)
//             }

          

//        })
//    }

// })