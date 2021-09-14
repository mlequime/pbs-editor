import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'pokemon',
  component: PokemonComponent
},{
  path: 'item',
  component: ItemComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
