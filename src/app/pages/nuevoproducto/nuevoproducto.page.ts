import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiServiceService } from '../../servicios/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.page.html',
  styleUrls: ['./nuevoproducto.page.scss'],
})
export class NuevoproductoPage implements OnInit {

  producto; valor;

  constructor(private toast: ToastController,
    private router: Router,
    private api: ApiServiceService) { }

  ngOnInit() {
  }


  crearP(){
    if(this.producto=='' || this.producto==undefined){
      this.alertError('Ingrese nombre del producto');
    }else if(this.valor=='' || this.valor==undefined){
      this.alertError('Ingrese valor del producto');
    }else{
      this.nuevoProducto();
    }
  }

  nuevoProducto(){
    
      let x = {
        funcion: 'nuevoProducto',
        nombre: this.producto,
        valor: this.valor
      
      }
      this.api.nuevoProducto(x).subscribe(res=>{
       if(res=="true"){
        this.alertOk();
        this.router.navigate(['/home'])
       }
      })
    
  }


  async  alertError(x){
    const toast = await this.toast.create({
      message: x,
      position: 'bottom',
      duration: 500,
    });
    await toast.present();
  }

  async  alertOk(){
    const toast = await this.toast.create({
      message: 'Producto registrado con exito',
      position: 'bottom',
      duration: 500,
    });
    await toast.present();
  }

}
