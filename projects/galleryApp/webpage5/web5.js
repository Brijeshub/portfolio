const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

  function circlemove(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#circle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px)`
    })
  }
  circlemove()