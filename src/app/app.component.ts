import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador:number = 0;
  constructor( private store: Store<any>){
    this.store.select('count').subscribe(contador=>this.contador=contador);
  }

  incrementar(){
    this.store.dispatch(actions.incrementar());
  }

  decrementar(){
    this.store.dispatch(actions.decrementar());
  }
}
