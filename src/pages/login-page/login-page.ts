import { Component } from '@angular/core';
import {MenuController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

import {Auth} from "../../providers/auth";
import {HomePage} from "../home/home";
import {HomeSubscriberPage} from "../home-subscriber/home-subscriber";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  user = {
      email: 'admin@user.com',
      password: '123456'
  }


  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public toastCtrl: ToastController,
              public navParams: NavParams,
              private http:Http,
              private auth: Auth) {

      this.menuCtrl.enable(false);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  login(){
    this.auth.login(this.user)
        .then((user) => {
          this.afterLogin(user);
        })
        .catch(() =>{
            let toast = this.toastCtrl.create({
                message: 'Email ou senha inválidos.',
                duration: 4000,
                position: 'top',
                cssClass: 'toast-reverse'

            });

            toast.present();
        })
  }

  irParaHome(){
      this.navCtrl.push(HomePage);
  }


  loginFacebook() {
      this.auth.loginFacebook().then((user) => {
          this.afterLogin(user);
      }).catch(() => {

          let toast = this.toastCtrl.create({
              message: 'Erro ao realizar login no Facebook.',
              duration: 4000,
              position: 'top',
              cssClass: 'toast-reverse'

          });
      });
  }

    afterLogin(user){
        this.menuCtrl.enable(true);
        //this.navCtrl.push(HomePage);
        this.navCtrl.setRoot(user.subscription_valid ? 'HomeSubscriberPage': 'HomePage' );
    }

}
