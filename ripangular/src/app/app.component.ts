import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Result, Root } from './module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API';
  obs !: Observable<Root>
  pokemonList !: Result[]
  constructor(private http:HttpClient){

    this.obs = this.http.get<Root>("https://pokeapi.co/api/v2/type")
    this.obs.subscribe(this.oggetto)
  }

  oggetto = (data:any) =>{
    this.pokemonList = data.results
  }
}