import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DefaultComponent } from './admin/default/default.component';
import { TiersComponent } from './admin/tiers/tiers.component';
import { AddtierComponent } from './admin/tiers/addtier/addtier.component';
import { ClassComponent } from './admin/class/class.component';
import { AddComponent } from './admin/class/add/add.component';
import { TypeComponent } from './admin/type/type.component';
import { AddtypeComponent } from './admin/type/addtype/addtype.component';
import { EntityComponent } from './admin/entity/entity.component';
import { AddentityComponent } from './admin/entity/addentity/addentity.component';
import { DetailsComponent } from './admin/type/details/details.component';
import { DetailsentityComponent } from './admin/entity/detailsentity/detailsentity.component';
import { UpdateComponent } from './admin/entity/update/update.component';
import { ProcessComponent } from './admin/process/process.component';
import { AddprocessComponent } from './admin/process/addprocess/addprocess.component';
import { UpdateprocessComponent } from './admin/process/updateprocess/updateprocess.component';
import { DetailprocessComponent } from './admin/process/detailprocess/detailprocess.component';
import { LoginComponent } from './admin/user/login/login.component';
import { RiskComponent } from './admin/risk/risk.component';
import { AddriskComponent } from './admin/risk/addrisk/addrisk.component';
import { AnalyseComponent } from './admin/risk/analyse/analyse.component';
import { SingupComponent } from './admin/user/singup/singup.component';
import { UpdateRiskComponent } from './admin/risk/update-risk/update-risk.component';
import { ControlComponent } from './admin/control/control.component';
import { UpdatecontrolComponent } from './admin/control/updatecontrol/updatecontrol.component';
import { UpdateuserComponent } from './admin/user/updateuser/updateuser.component';
import { ListuserComponent } from './admin/user/listuser/listuser.component';
import { RiskdetaillsComponent } from './admin/risk/riskdetaills/riskdetaills.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path: 'register', component: SingupComponent},
  {path:'home', component: DefaultComponent,
  children : [
    {path: 'dashboard', component: DashboardComponent},
    {path:'tier',component:TiersComponent},
    {path:'tier/add',component:AddtierComponent},
    {path:'class',component:ClassComponent},
    {path:'class/add',component:AddComponent},
    {path:'type',component:TypeComponent},
    {path:'type/add',component:AddtypeComponent},
    {path:'entity',component:EntityComponent},
    {path:'entity/add',component:AddentityComponent},
    { path: 'typedetails/:name', component: DetailsComponent },
    { path: 'entitydetails/:name', component: DetailsentityComponent },
    { path: 'update/:name', component: UpdateComponent },
    {path:'process',component:ProcessComponent},
    {path:'process/add',component:AddprocessComponent},
    { path: 'updateprocess/:name', component: UpdateprocessComponent },
    { path: 'details/:name', component: DetailprocessComponent },
    { path: 'risk', component: RiskComponent },
    { path:'risk/add',component:AddriskComponent },
    { path:'risk/analyse',component:AnalyseComponent },
    { path: 'updaterisk/:name', component: UpdateRiskComponent },
    { path: 'control', component: ControlComponent },
    { path: 'updatecontrol/:name', component : UpdatecontrolComponent},
    { path: 'updateuser/:name', component : UpdateuserComponent},
    { path: 'ListUser', component : ListuserComponent},
    { path: 'Riskdetails/:name', component: RiskdetaillsComponent },
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
