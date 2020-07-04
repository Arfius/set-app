import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'addevent', loadChildren: './events/addevent/addevent.module#AddeventPageModule' },
  { path: 'addtask', loadChildren: './events/addtask/addtask.module#AddtaskPageModule' }]
;
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
