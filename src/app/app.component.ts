import { Component, OnInit } from '@angular/core';
import { SituacaoCartorioModel } from 'src/core/situacao-cartorio-model.model';
import { SituacaoCartorioService } from 'src/core/situacao-cartorio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontEsc';
  sitList:SituacaoCartorioModel[]=[];
  displayedColumns = ['id', 'nome']

  constructor(private service: SituacaoCartorioService){}

 async ngOnInit(){
    await this.service.getAll().subscribe((res)=>{
      console.log("RESSS ",res);
      
      this.sitList = res;
    })
  }
}
