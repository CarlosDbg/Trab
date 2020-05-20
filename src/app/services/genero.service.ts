import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Genero } from '../models/genero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private firestore: AngularFirestore) { }

  async add(genero: Genero): Promise< Genero > {
   const docRef= await this.firestore.collection<Genero>('genero').add(genero);
   const doc = await docRef.get();


   return {
     id: doc.id,
     ...doc.data()
   } as Genero;

  }
}
