import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../servicios/api-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.page.html',
  styleUrls: ['./editar-producto.page.scss'],
})
export class EditarProductoPage implements OnInit {

  idProd;info;
  producto; valor;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: ApiServiceService,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.idProd= this.route.snapshot.paramMap.get('id');
    this.infoProd();
  }

  infoProd(){
    let x = {
      funcion: 'verProducto',
      idProd: this.idProd
    
    }
    this.api.verProducto(x).subscribe(res=>{
      console.log(res) 
      this.info=res;
      for(var x=0; x<this.info.length; x++){
       
        this.producto=this.info[x]['descripcion'];
        this.valor=this.info[x]['valor'];
      }
  
    })
  }


  editar(){
    if(this.producto=='' || this.producto==undefined){
      this.alertError('Ingrese nombre del producto');
    }else if(this.valor=='' || this.valor==undefined){
      this.alertError('Ingrese valor del producto');
    }else{
      this.actualizarProducto();
    }
  
  }

  actualizarProducto(){
    console.log(this.valor)
    console.log(this.producto)
    
    let x = {
      funcion: 'actualizarProducto',
      nombre: this.producto,
      valor: this.valor,
      idP: this.idProd
    
    }
    this.api.actualizarProducto(x).subscribe(res=>{
     if(res=="true"){
      this.alertOk();
      this.router.navigate(['/home'])
     }
     else{
       alert("WEOEOE")
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
      message: 'Producto actualizado con exito',
      position: 'bottom',
      duration: 500,
    });
    await toast.present();
  }

}
