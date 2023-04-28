import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  listaFrutas:any={};  //Array frutas
  frutaText: string = '';

  constructor() { }

  ngOnInit(): void {
    this.listaFrutas = [
      { text: 'Manzanas' },
      { text: 'Naranjas' },
      { text: 'Cerezas'}
    ];

  }

  addFruta() {
    if (this.frutaText != null && this.frutaText != "") {
      let miFruta = { text: this.frutaText };
      this.listaFrutas.push(miFruta);
      this.frutaText = '';
    }

  }

}
