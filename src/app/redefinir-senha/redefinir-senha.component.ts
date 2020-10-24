import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-login-page',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.scss']
})
export class RedefinirSenhaCmponent implements OnInit {
  confirmacao(){
    if(this.valido(""))
      alert("Será enviado a seu email um link para redefinir a senha")
    else
      alert("Por favor verificar se o e-mail está correto")
  }
  valido(email:any){
    //aqui a gente vai verificar na base de dados se o email esta cadastrado!
    //aqui a gente vai verificar na base de dados se o email esta cadastrado!
    //aqui a gente vai verificar na base de dados se o email esta cadastrado!
    return true
  }
  constructor() { }

  ngOnInit() {
  }


}
