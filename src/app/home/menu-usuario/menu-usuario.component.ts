import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent implements OnInit {
  public edit_infos_pessoais: boolean = true;
  public edit_competencias: boolean = true;
  public contador:number = 0
  dadosMocados = {
    infos_pessoais: {
      nome: "Hugo Bentivegna",
      telefone: "(11)99999-8888",
      email: "hugobentivegna@usp.br",
      endereco: {
        rua: "Rua abc def",
        numero: 927,
        complemento: "apto 61"
      }
    },
    competencias: [
      {
        titulo: "Programação",
        nota: 9
      },
      {
        titulo: "Gambiarra",
        nota: 10
      }, {
        titulo: "Culinária",
        nota: 6
      },
      {
        titulo: "Rejuntar piso",
        nota: 4
      },
      {
        titulo: "Canto",
        nota: 0
      }]
  }
  editar_competencias() {
    this.edit_competencias = !this.edit_competencias;
    if(this.edit_competencias){
      $(".entrada_dados").attr('disabled','disabled');
    }
    else{
      $(".entrada_dados").removeAttr('disabled');
    }
    $("#edit_competencias").animate({
      width: "toggle"
    }, 300)
    $("#salvar_competencias").animate({
      width: "toggle"
    }, 300)
    setTimeout(() => {
      $("#adicionar_competencias").animate({
        width: "toggle"
      }, 300)
    }, 350)
  }

editar_infos_pessoais() {
  this.edit_infos_pessoais = !this.edit_infos_pessoais;
  $("#edit_infos_pessoais").animate({
    width: "toggle"
  }, 300)
  $("#salvar_infos_pessoais").animate({
    width: "toggle"
  }, 300)
  setTimeout(() => {
    $("#remover_infos_pessoais").animate({
      width: "toggle"
    }, 300)
  }, 350)
}

preencher_infos_pessoais() {
  $("#nome").val(this.dadosMocados.infos_pessoais.nome)
  $("#telefone").val(this.dadosMocados.infos_pessoais.telefone)
  $("#email").val(this.dadosMocados.infos_pessoais.email)
  $("#rua").val(this.dadosMocados.infos_pessoais.endereco.rua)
  $("#numero_rua").val(this.dadosMocados.infos_pessoais.endereco.numero)
  $("#complemento_rua").val(this.dadosMocados.infos_pessoais.endereco.complemento)
}

salvar_infos_pessoais() {
  this.dadosMocados.infos_pessoais.nome = $("#nome").val().toString()
  this.dadosMocados.infos_pessoais.telefone = $("#telefone").val().toString()
  this.dadosMocados.infos_pessoais.email = $("#email").val().toString()
  this.dadosMocados.infos_pessoais.endereco.rua = $("#rua").val().toString()
  this.dadosMocados.infos_pessoais.endereco.numero = parseFloat($("#numero_rua").val().toString())
  this.dadosMocados.infos_pessoais.endereco.complemento = $("#complemento_rua").val().toString()
}

adicionar_competencias() {
if($('#nova_competencia_nota').val() == "" || $('#nova_competencia_titulo').val() == "" ){
  $("#alerta_campos_faltando").fadeIn()
  setTimeout(()=>{
    $("#alerta_campos_faltando").fadeOut(1000)
  },5000)
  return(false)
}
if(parseFloat($('#nova_competencia_nota').val().toString()) > 10){
  $('#nova_competencia_nota').val(10)
}
else if(parseFloat($('#nova_competencia_nota').val().toString()) < 0){
  $('#nova_competencia_nota').val(0)
}
let nova_competencia = {
  titulo: $('#nova_competencia_titulo').val().toString(),
  nota: parseFloat($('#nova_competencia_nota').val().toString())
}
this.dadosMocados.competencias.push(nova_competencia)
this.cancelar_nova_competencia()
}
cancelar_nova_competencia(){
  $('#nova_competencia_titulo').val(""),
  $('#nova_competencia_nota').val("")
  $("#alerta_campos_faltando").hide()
}
salvar_competencias(){
let i = 0
let arr = []
while(i < this.dadosMocados.competencias.length){
  if($("#competencia_"+i).is(":checked")){
  this.dadosMocados.competencias[i].nota = parseFloat($("#competencia_nota_"+i).val().toString())
  this.dadosMocados.competencias[i].titulo = $("#competencia_titulo_"+i).val().toString()
  if(this.dadosMocados.competencias[i].nota > 10){
    this.dadosMocados.competencias[i].nota = 10
  }
  else   if(this.dadosMocados.competencias[i].nota < 0){
    this.dadosMocados.competencias[i].nota = 0
  }
  arr.unshift(this.dadosMocados.competencias[i])
  }
  i += 1
}
this.dadosMocados.competencias = arr
}


abrir_modal(){
  $("#modal").css('display','block')
  $("#alerta_campos_faltando").hide()
}
fechar_modal(){
  $("#modal").css('display','none')
}

constructor() { }

ngOnInit() {
  this.preencher_infos_pessoais()
  $("#salvar_infos_pessoais").hide()
  $("#remover_infos_pessoais").hide()
  $("#salvar_competencias").hide()
  $("#adicionar_competencias").hide()



}

}