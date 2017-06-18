import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
@Component({
  selector: 'flashlight',
  templateUrl: 'flashlight.html'
})
export class FlashLight {
  public icon_light='./assets/icon_light/lightoff.png';
  public status = {
    on:false,
    off:true
  };
  constructor(public navCtrl: NavController,public flashlight: Flashlight) {

  }
  lightStatus(){
    if(this.flashlight.isSwitchedOn()){
      this.flashlight.switchOff();
      this.status.on = false;
      this.status.off = true;
      this.icon_light='./assets/icon_light/lightoff.png';
    }else{
      this.flashlight.switchOn();
      this.status.on = true;
      this.status.off = false;
      this.icon_light='./assets/icon_light/lighton.png';
    }
  }
}
