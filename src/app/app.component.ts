import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  direction = '';
  int: any;
  startinterval(direction) {
    this.direction = direction;
    this.int = setInterval(() => {
      this.move(this.direction);
    }, 100);
  }
  constructor() {
    clearInterval(this.int);
    document.addEventListener('keydown', (event) => {
      console.log(event.key);
      switch (event.key) {
        case 'ArrowDown':
          this.move('down');
          break;

        case 'ArrowUp':
          this.move('up');
          break;

        case 'ArrowRight':
          this.move('right');
          break;
        case 'ArrowLeft':
          this.move('left');
          break;
      }
    });
  }
  stop() {
    clearInterval(this.int);
    let el = document.getElementById('instructions');
    el.style.display = 'block';
  }
  move(direction) {
    let el = document.getElementById('instructions');
    el.style.display = 'none';
    let doc = document.getElementById('in');
    let style = getComputedStyle(doc);
    var position = doc.getBoundingClientRect();
    var x = position.left;
    var y = position.top;
    switch (direction) {
      case 'right':
        if (x >= 416) {
          break;
        }
        var right = style.marginLeft.substring(0, style.marginLeft.length - 2);
        var rightint = parseInt(right);
        let newright = rightint + 5;
        doc.style.marginLeft = newright + 'px';
        break;
      case 'left':
        if (x == 49) {
          break;
        }
        var left = style.marginLeft.substring(0, style.marginLeft.length - 2);
        var leftint = parseInt(left);
        let newleft = leftint - 5;
        doc.style.marginLeft = newleft + 'px';
        break;
      case 'up':
        if (y <= 53) {
          break;
        }
        var up = style.marginTop.substring(0, style.marginTop.length - 2);

        var upint = parseInt(up);
        let newup = upint - 5;
        doc.style.marginTop = newup + 'px';
        break;
      case 'down':
        if (y >= 418) {
          break;
        }
        var down = style.marginTop.substring(0, style.marginTop.length - 2);

        var downint = parseInt(down);
        let newdown = downint + 5;
        doc.style.marginTop = newdown + 'px';
        break;
    }
  }
}
