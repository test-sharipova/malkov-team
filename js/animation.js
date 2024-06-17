function animation() {
    gsap.registerPlugin(ScrollTrigger);

    if (document.documentElement.clientWidth > 767) {
        gsap.from('.promo__title span', {
        opacity: 0,
        stagger: 0.3,
    });
    }
  
    

      gsap.from('.work__item', {
      opacity: 0,
      yPercent: 30,
        
      stagger: 0.4,
      scrollTrigger: {
        trigger: '.work',
        start: 'top 45%', 
       
        toggleActions: 'play none none reverse',
      }
    });
    gsap.from('.wins__item', {
        opacity: 0,
        yPercent: 30,
          
        stagger: 0.4,
        scrollTrigger: {
          trigger: '.wins',
          start: 'top 45%', 
         
          toggleActions: 'play none none reverse',
        }
      });
   

    
    
  }
  animation();