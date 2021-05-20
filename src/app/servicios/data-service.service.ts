import { Injectable } from '@angular/core';
import  { AngularFirestore}  from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private db : AngularFirestore) { }


  verCategorias(){
    return this.db.collection('categorias').valueChanges()
  }

  verCategoria(x){
    return this.db.collection('categorias').doc(x).valueChanges()
  }

  verComercios(){
    return this.db.collection('comercios').valueChanges()
  }

}
