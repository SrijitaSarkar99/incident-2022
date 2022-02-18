(function(){
    var box = document.querySelectorAll(".timeline-content");
    box.forEach((item, i) => {
      document.addEventListener("scroll", () => {
        const rect = item.getBoundingClientRect();
        if ((rect.top >= 20 && rect.top + 20 <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.bottom >= 20 && (rect.top + item.offsetHeight) + 20 <= (window.innerHeight || document.documentElement.clientHeight))) {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0px)';
          item.style.transition = '0.6s ease-in';
        }
        else {
          item.style.opacity = '0';
          if (i % 2 == 0) {
            item.style.transform = 'translateX(-50px)';
          }
          else {
            item.style.transform = 'translateX(50px)';
          }
        }
      });
    });
  })();
  
  