function clock(){

    
    const d=new Date();
    let b=document.getElementsByClassName('h')[0];
    let c=document.getElementById('m');
    let hr=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    let hrt=30*hr+min/2;
    let mrt=6*min+0.1*sec;
    let srt=6*sec;
    b.style.transform=`rotate(${hrt}deg)`;
    m.style.transform=`rotate(${mrt}deg)`;
    s.style.transform=`rotate(${srt}deg)`;
    let sound=new Audio('clock.mp3');
    sound.play();
    
    
}
setInterval( clock,1000);