import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong>5</strong></h3>
        <button (click)="modificar( bases )"> +{{ bases }} </button>

        <span> {{ numero }} </span>

        <button (click)="modificar( -bases )"> -{{ bases }} </button>
    `
})

export class ContadorComponent{
    
    titulo: string = 'Contador App';
    numero: number = 50;
    
    bases:number = 5;

    modificar( valor:number ) {
        this.numero += valor;
    }

}