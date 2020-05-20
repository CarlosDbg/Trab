import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Produto } from './models/produto.model';
import { Genero } from './models/genero.model';
import { ProdutosService } from './services/produtos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Carlos Inc';

  constructor(private firestore: AngularFirestore) { }

  async ngOnInit() {

    const documento = await this.firestore.collection('produto')
      .doc('6Azx9zqroCD5DRkggKv3')
      .get()
      .toPromise();

    const produto = {
      id: documento.id,
      ...documento.data()
    } as Produto;

    console.log(produto);

    const documentoGenero = await this.firestore.collection('genero')
      .doc(produto.id)
      .get()
      .toPromise();

    const genero = {
      id: documentoGenero.id,
      ...documentoGenero.data()
    } as Genero;



    console.log('Nome do Filme: ' + produto.nome);
    

  




  } 
  

}
