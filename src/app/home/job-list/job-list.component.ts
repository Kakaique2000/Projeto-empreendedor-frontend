import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { JobList } from './job-list.model'
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  @Input() jobList: string;
  filtroAnterior: string;
  dados: JobList[] = []
  constructor() { }

  ngOnInit() {
    this.filtroAnterior = this.jobList
    this.dados = [
      { id: 1, label: "Um emprego legal", title: "emprego", date: "2020-11-09" },
      { id: 2, label: "Um emprego quase legal", title: "outro emprego", date: "2020-11-09" },
      { id: 3, label: "Um emprego meio legal", title: "mais umemprego", date: "2020-11-09" },
      { id: 4, label: "Um emprego mes passado", title: "teste mes", date: "2020-10-09" },
      { id: 5, label: "Um emprego ano passado", title: "teste ano", date: "2019-11-09" }
    ]
    setInterval(() => {
      if (this.filtroAnterior != this.jobList) {
        this.filtroAnterior = this.jobList
        console.log("fazer chamada a API de empregos filtrando por ", this.jobList)
        console.log("sobrescrever a lista de empregos")

      }
    }, 200)
  }
  dataAtual = new Date();
  diasAtras(data: string) {
    if (this.dataAtual.getFullYear() > parseInt(data.slice(0, 4))) {
      return ('Ano passado')
    }
    if (this.dataAtual.getMonth()+1 > parseInt(data.slice(5, 7))) {
      return ('Mês passado')
    }
    let dia = this.dataAtual.getDay() - parseInt(data.slice(6, 7))
    return (dia.toString() + ' dias atrás')
  }

  // não funcionou ...... Fiz uma gambiarra no lugar
  // ngOnChange(changes: SimpleChange) {
  //   console.log("fazer chamada a API de empregos filtrando por ", this.jobList)
  //   console.log("sobrescrever a lista de empregos")
  // }
}
