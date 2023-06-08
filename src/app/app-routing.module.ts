import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { SingleKittenComponent } from './single-kitten/single-kitten.component';

const routes: Routes = [
  {
    path: 'kitten', 
  component: ListKittenComponent
  },
  { path: 'kittenUser',
    component: ListKittenComponent
  },
  {
    path: 'createKitten',
    component: CreateKittenComponent,
  },
  {
    path :'kitten/:name',
    component: SingleKittenComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
