function animation() {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from('.promo__title span', {
        opacity: 0,
        stagger: 0.3,
    });

    gsap.to('.anim-scale', {
        
        scale: 1.2,
        delay: 1,
    })

    gsap.to('.anim-scale', {
        
        scale: 1,
        delay: 1.5,
    })

    gsap.from('.work__item', {
      opacity: 0,
      yPercent: 30,
        
      stagger: 0.4,
      scrollTrigger: {
        trigger: '.work',
        start: 'top 35%', 
       
        toggleActions: 'play none none reverse',
      }
    });
    gsap.from('.wins__item', {
        opacity: 0,
        yPercent: 30,
          
        stagger: 0.4,
        scrollTrigger: {
          trigger: '.wins',
          start: 'top 35%', 
         
          toggleActions: 'play none none reverse',
        }
      });
   

    
    
  }
  animation();