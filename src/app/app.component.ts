import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  itens!: MenuItem[];

  ngOnInit(): void {
    this.itens = [
      {
        label: "Cadastros",
        items: [
          { label: "Pessoas", url: "/pessoas" },
          { label: "Departamentos", url: "/departamentos" }
        ]
      }
    ];
  }

}
