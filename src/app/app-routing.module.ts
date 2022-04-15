import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricalComponent } from '../app/electrical/electrical.component'


const routes: Routes = [
    { path: 'electrical', component: ElectricalComponent},
    // { path: 'home', component: HomeComponent},
    // { path: 'services', component: ServicesComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
