import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../servicios/login.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email; password; data
  constructor(private loginService: LoginService,
    public router: Router, private toast: ToastController) { }


  ngOnInit() {
  }


  OnSubmitLogin(){
  
    this.loginService.IngresarCuenta(this.email, this.password).then(res => {
      this.data=res;
     window.localStorage['IdUsuario']=this.data.user.uid;
      this.alertOk();
     this.router.navigate(['/home']);
   }).catch(err =>{
  
     this.alertError();
   })
  }


 async  alertError(){
  const toast = await this.toast.create({
    message: 'Error, intente de nuevo',
    position: 'bottom',
    duration: 500,
  });
  await toast.present();
}

async  alertOk(){
  const toast = await this.toast.create({
    message: 'Bienvenido',
    position: 'bottom',
    duration: 500,
  });
  await toast.present();
}


}
