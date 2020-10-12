const menuBtn = document.querySelector(".menu-button"),
      sideMenu = document.querySelector(".side-menu");
      
let tl = gsap.timeline();

tl.from(".container", {duration:1, opacity:0, scale:.2, y:50, ease:Power2.easeInOut});


      //this opens and closes the side menu
      menuBtn.addEventListener("click", () => {
        tl.from(".side-menu li", {duration:1, opacity:0, scale:.2, y:50, stagger:.5, ease:Power2.easeInOut});
        sideMenu.classList.toggle("open");
      });

      //image slider 
let pic = document.querySelector(".pic"),
      nextBtn = document.querySelector(".nextBtn"),
      prevBtn = document.querySelector(".prevBtn"),
      position = 0,
      images = [ "img/rikonavt-3eebt4Xsg_c-unsplash-removebg-preview.png", "img/omid-armin-fizNJRMNuZQ-unsplash-removebg-preview.png", "img/melody-jacob-zIviddKCNkc-unsplash-removebg-preview.png", "img/omid2-armin-tEHEScfaFvk-unsplash-removebg-preview.png", "img/terricks-noah-OyhmfCc0pw4-unsplash-removebg-preview.png"];

      pic.src = images[0];

      nextBtn.addEventListener("click", () => {
        if (position === images.length-1) {
          position = 0;
          tl.from(".pic", {duration:1, opacity:0, scale:.1, rotate:360, y:20, ease:Power2.easeInOut});
          return pic.src = images[position];
        }

        tl.from(".pic", {duration:1, opacity:0, scale:.3, rotate:360, y:20, ease:Power2.easeInOut});
        pic.src = images[position + 1];
        position++;
        
      });

      prevBtn.addEventListener("click", () => {
        if (position === 0) {
          position = images.length-1;
          tl.from(".pic", {duration:1, opacity:0, scale:.1, rotate:-360, y:20, ease:Power2.easeInOut});
          return pic.src = images[position];
        }

        tl.from(".pic", {duration:1, opacity:0, scale:.1, rotate:-360, y:20, ease:Power2.easeInOut});
        pic.src = images[position - 1];
        position--;
      });