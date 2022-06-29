import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menuNewLib';
  
  mouseIn:boolean = false;
  fixed:boolean = true;
  sidenavSmall: boolean = true;
  mouseOver: boolean = false;

  sidenavToggle(){
    this.fixed = !this.fixed;
    this.sidenavSmall = this.fixed;
    console.log(this.fixed);
  }

  mouseEnter() {
    if(this.fixed){
      this.mouseIn = true;
      this.sidenavOpen();
    }
  }
  mouseLeave(){
    if (this.fixed){
      this.mouseIn = false;
      this.sidenavSmall=true;
      this.mouseOver = false;
      console.log(this.mouseOver)
    }
  }

  async sidenavOpen() {
    if (this.mouseIn)
      await this.delay(600);
    if(this.mouseIn){
      this.sidenavSmall = false;
      this.mouseOver = true;
      console.log(this.mouseOver)
    }

  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
