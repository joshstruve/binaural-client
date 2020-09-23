import React from "react";
import SineWaves from "sine-waves";
import $ from "jquery";

class DefaultAV extends React.Component {
  render() {
    $(function () {
      var waves = new SineWaves({
        el: document.getElementById("waves"),

        speed: 2,
        width: function () {
          return $(window).width();
        },
        height: function () {
          return $(window).height() / 2;
        },
        wavesWidth: "100%",
        ease: "SineInOut",
        waves: [
          // Left wave
          {
            timeModifier: 1,
            lineWidth: 0.5,
            amplitude: 5,
            wavelength: 40,
            segmentLength: 1,
            strokeStyle: "#FFFFFF",
          },
          // Middle wave
          {
            timeModifier: 0.5,
            lineWidth: 1.5,
            amplitude: 15,
            wavelength: 80,
            segmentLength: 1,
            strokeStyle: "#E0FEFF",
          },
          // Right wave
          {
            timeModifier: 0.5,
            lineWidth: 1,
            amplitude: 10,
            wavelength: 50,
            segmentLength: 1,
            strokeStyle: "#AECBCC",
          },
        ],

        initialize: function () {},

        resizeEvent: function () {
          //   var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
          //   gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
          //   gradient.addColorStop(0.5, "rgb(140, 158, 255)"); // colorL
          //   gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          //   var index = -1;
          //   var length = this.waves.length;
          //   while (++index < length) {
          //     this.waves[index].strokeStyle = gradient;
          //   }
          // Clean Up
          //   index = void 0;
          //   length = void 0;
          //   gradient = void 0;
        },
      });
    });

    return (
      <div id="container">
        <canvas id="waves" height="700" width="100%"></canvas>
      </div>
    );
  }
}

export default DefaultAV;