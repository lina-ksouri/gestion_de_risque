import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DefaultComponent } from './admin/default/default.component';
import { SidebarComponent } from './admin/shard/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {TiersComponent } from './admin/tiers/tiers.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddtierComponent } from './admin/tiers/addtier/addtier.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClassComponent } from './admin/class/class.component';
import { AddComponent } from './admin/class/add/add.component';
import { TypeComponent } from './admin/type/type.component';
import {MatSelectModule} from '@angular/material/select';
import { AddtypeComponent } from './admin/type/addtype/addtype.component';
import { EntityComponent } from './admin/entity/entity.component';
import { AddentityComponent } from './admin/entity/addentity/addentity.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DetailsComponent } from './admin/type/details/details.component';
import { DetailsentityComponent } from './admin/entity/detailsentity/detailsentity.component';
import { UpdateComponent } from './admin/entity/update/update.component';
import { ProcessComponent } from './admin/process/process.component';
import { AddprocessComponent } from './admin/process/addprocess/addprocess.component';
import { UpdateprocessComponent } from './admin/process/updateprocess/updateprocess.component';
import { DetailprocessComponent } from './admin/process/detailprocess/detailprocess.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { LoginComponent } from './admin/user/login/login.component';
import { RiskComponent } from './admin/risk/risk.component';
import { AddriskComponent } from './admin/risk/addrisk/addrisk.component';
import { AnalyseComponent } from './admin/risk/analyse/analyse.component';
import { SingupComponent } from './admin/user/singup/singup.component';
import { UpdateRiskComponent } from './admin/risk/update-risk/update-risk.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { ControlComponent } from './admin/control/control.component';
import {MatTabsModule} from '@angular/material/tabs';
import { UpdatecontrolComponent } from './admin/control/updatecontrol/updatecontrol.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { UpdateuserComponent } from './admin/user/updateuser/updateuser.component';
import { ListuserComponent } from './admin/user/listuser/listuser.component';
import { RiskdetaillsComponent } from './admin/risk/riskdetaills/riskdetaills.component';
import {MatDatepickerModule} from '@angular/material/datepicker';




const Ux_Modules = [
  MatDialogModule,
  MatSelectModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  ScrollingModule,
  MatTabsModule,
  MatGridListModule,
  MatDatepickerModule,
 
]

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    SidebarComponent,
    DashboardComponent,
    TiersComponent,
    AddtierComponent,
    ClassComponent,
    AddComponent,
    TypeComponent,
    AddtypeComponent,
    EntityComponent,
    AddentityComponent,
    DetailsComponent,
    DetailsentityComponent,
    UpdateComponent,
    ProcessComponent,
    AddprocessComponent,
    UpdateprocessComponent,
    DetailprocessComponent,
    LoginComponent,
    RiskComponent,
    AddriskComponent,
    AnalyseComponent,
    SingupComponent,
    UpdateRiskComponent,
    ControlComponent,
    UpdatecontrolComponent,
    UpdateuserComponent,
    ListuserComponent,
    RiskdetaillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ux_Modules,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule, ReactiveFormsModule,
    HighchartsChartModule,
    NgxChartsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
