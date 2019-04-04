import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from '../app/components/event-list/event-list.component';
import { PacketsandeventsComponent } from '../app/components/packetsandevents/packetsandevents.component';
import {PacketsdetailsComponent} from '../app/components/packetsdetails/packetsdetails.component';
import { CustomersandprovidersComponent} from '../app/components/customersandproviders/customersandproviders.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/packetsandevents',
    pathMatch:'full'
  },
  {
    path:'events',
    component:EventListComponent
  },
  {
    path:'packetsandevents',
    component:PacketsandeventsComponent
  },
  {
    path:'packetsdetails',
    component:PacketsdetailsComponent
  },
  {
    path:'customerandproviders',
    component:CustomersandprovidersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
