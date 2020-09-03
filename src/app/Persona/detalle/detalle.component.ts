import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{ServiceService} from '../../Service/service.service';
import{Persona} from '../../Modelo/Persona';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  persona:Persona = new Persona();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Detalle();
  }
  Detalle(){
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })
  }

  volver(){
    this.router.navigate(["listar"]);
  }

}
