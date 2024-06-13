
// let prevX = shadowCircleElm.style.left;
// let prevY=shadowCircleElm.style.top;



document.addEventListener('mousemove', (event)=> {
    const shadowCircleElm = document.getElementById('shadow-circle');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    // prevX=event.clientX;
    // prevY=event.client
    shadowCircleElm.style.transform = `translate(${mouseX - 30}px, ${mouseY - 30}px)`;
    // shadowCircleElm.style.transform = `translate(${mouseX - 30}px, ${mouseY - 30}px)`;

});


document.addEventListener('mouseenter', ()=> {
    const shadowCircleElm = document.getElementById('shadow-circle');
    shadowCircleElm.style.display = 'block';
});

document.addEventListener('mouseleave', ()=> {
     const shadowCircleElm = document.getElementById('shadow-circle');
    shadowCircleElm.style.display = 'none';
});

