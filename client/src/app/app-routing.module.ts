import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from '../app/components/event-list/event-list.component';
import { PacketsandeventsComponent } from '../app/components/packetsandevents/packetsandevents.component';
import { PacketsdetailsComponent } from '../app/components/packetsdetails/packetsdetails.component';
import { CustomersandprovidersComponent } from '../app/components/customersandproviders/customersandproviders.component';
import { NewformpacketComponent } from '../app/components/newformpacket/newformpacket.component';
import { EditpacketComponent } from '../app/components/editpacket/editpacket.component';
import { LogInComponent } from '../app/components/log-in/log-in.component';
import { NewEventComponent} from '../app/components/new-event/new-event.component';
import { UserComponent} from '../app/components/user/user.component'; 
import { NewCustomerComponent } from '../app/components/new-customer/new-customer.component';
import { ProviderListComponent } from '../app/components/provider-list/provider-list.component';
import { HomeComponent } from '../app/components/home/home.component';
import { PasswordComponent } from '../app/components/password/password.component';
import { ActualizadoComponent} from '../app/components/actualizado/actualizado.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
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
  },
  {
    path:'packet/new',
    component:NewformpacketComponent
  },
  {
    path:'packet/edit',
    component:EditpacketComponent
  },
  {
    path:'login',
    component:LogInComponent
  },
  {
    path:'event/new',
    component:NewEventComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path: 'new',
    component: NewCustomerComponent
  },
  {
    path: 'password',
    component: PasswordComponent
  },
  {
    path: 'customer/edit',
    component: UserComponent
  },
  {
    path: 'providers',
    component: ProviderListComponent
  },
  {
    path: 'act',
    component: ActualizadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
