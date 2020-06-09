import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  contador:number = 0;

  constructor(private store:Store<any>) { 
    this.store.select('count').subscribe(contador=>this.contador=contador);
  }

  ngOnInit(): void {
  }

  reset(){
    this.store.dispatch(actions.reset());
  }

}
