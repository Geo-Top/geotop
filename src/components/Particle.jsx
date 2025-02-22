import "../App.css"
import { useEffect } from "react";
import Particles from "particles.js";

export default function ParticleComp() {
  useEffect(() => {
    Particles("particles-js", {
      "particles": {
        "number": {
          "value": 380,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

    // لتحديث الإحصائيات (إن وجد)
    const stats = new window.Stats();
    stats.setMode(0);
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0";
    stats.domElement.style.top = "0";
    document.body.appendChild(stats.domElement);
    const countParticles = document.querySelector(".js-count-particles");
    const update = function () {
      stats.begin();
      stats.end();
      if (
        window.pJSDom &&
        window.pJSDom[0] &&
        window.pJSDom[0].pJS &&
        window.pJSDom[0].pJS.particles &&
        window.pJSDom[0].pJS.particles.array
      ) {
        countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
      // تنظيف العنصر عند فك القطعة
      return () => {
        document.getElementById("particles-js").innerHTML = "";
      };
    }, []);
  return (
    <div>
      <div id="particles-js"></div>
    </div>
  )
}
