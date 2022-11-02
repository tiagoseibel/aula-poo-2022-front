import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  valor1:string = "Valor da variavel";
  valor2 = 50;

  mostrarMensagem():void {
    alert("Mensagem de aviso!");
  }

}
