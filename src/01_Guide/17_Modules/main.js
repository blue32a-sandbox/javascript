import * as Canvas from './modules/canvas.js';
import * as Square from './modules/square.js';
import randomSquare from './modules/square.js';
import('./modules/dynamic-module-loding.js')
  .then((module) => {
    console.log(module.hoge());
  });

let myCanvas = Canvas.create('myCanvas', document.body, 480, 320);
let reportList = Canvas.createReportList(myCanvas.id);

let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, 'blue');
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);
Square.reportArea(square2.length, reportList);
Square.reportPerimeter(square2.length, reportList);
