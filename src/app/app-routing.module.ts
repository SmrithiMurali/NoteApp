import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "notes", pathMatch: "full" },
  { path: "notes", loadChildren: "./home/home.module#HomePageModule" },
  { path: "notes/:id", loadChildren: "./details/details.module#DetailsPageModule" },
  {
    path: 'new-note',
    loadChildren: () => import('./new-note/new-note.module').then( m => m.NewNotePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
