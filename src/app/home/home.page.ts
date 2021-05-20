import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../servicios/api-service.service';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginService} from '../servicios/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  idUsuario;productos;
  constructor(private router: Router,
    private api: ApiServiceService,
    public alert: AlertController,
    public toast: ToastController,
    private loginService: LoginService ) {}


  sliderOpts={
    zoom:false,
    slidesPerView: 2.3,
    centerSlides: true,
    spaceBetween: 10
  };
  
  ngOnInit(){
    this.verProductos();
    this.idUsuario=window.localStorage['IdUsuario'];
   
  }


  verProductos(){
    let x = {
      funcion: 'verProductos',
    
    }
    this.api.verProductos(x).subscribe(res=>{
      this.productos=res;
      console.log(res) 
    })
  }


  async delete(x){
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: '¿Continuar con la eliminación del producto?',
      buttons: [
        {
          text: 'NO',
          
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'SI',
          handler: () => {
            this.eliminarProducto(x)
          }
        }
      ]
    });

    await alert.present();
  
  }

  eliminarProducto(id){
    let x = {
      funcion: 'eliminarProducto',
      idProducto: id,
    
    }
    this.api.eliminarProducto(x).subscribe(res=>{
     if(res=="true"){
      this.alertOk();
      this.verProductos();
     }
    })
  }

  async  alertOk(){
    const toast = await this.toast.create({
      message: 'Producto eliminado con exito',
      position: 'bottom',
      duration: 500,
    });
    await toast.present();
  }

  nuevoP(){
    this.router.navigate(['/nuevoproducto'])
  }


  editar(x){
    this.router.navigate(['/editar-producto',x])
  }
 

 

    async salir(){
      const alert = await this.alert.create({
        cssClass: 'my-custom-class',
        header: '¿Cerrar sesión?',
        buttons: [
          {
            text: 'NO',
            
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'SI',
            handler: () => {
             this.loginService.Salida();
            }
          }
        ]
      });
  
      await alert.present();
    
    }

}
