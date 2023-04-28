import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  listaCaracteres:any = {};
  listaCaracter:string='';

  constructor() { }

  ngOnInit(): void {
    this.listaCaracteres = [
      {text: "Cadena1"},
      {text: "Cadena2" },
      {text: "Cadena3" }];
    }

  addListado(){
    if (this.listaCaracter != "") {
    let miListado={text:this.listaCaracter};
    this.listaCaracteres.push(miListado);
    this.listaCaracter='';
     }
    }
}
