import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { ExplicacionComponent } from './explicacion/explicacion.component';
import { RecoleccionDatosComponent } from './recoleccion-datos/recoleccion-datos.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { RecomendacionComponent } from './recomendacion/recomendacion.component';

import { StepsModule } from 'primeng/steps';
import { CheckboxModule } from 'primeng/checkbox';
import { SplashComponent } from '../components/splash/splash.component';
import { AccordionModule } from 'primeng/accordion';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  imports: [
    RouterModule.forChild([
			{path:'',component: MainPage, children:[
        {path: 'explicacion', component: ExplicacionComponent},
				{path: 'recoleccionDatos', component: RecoleccionDatosComponent},
				{path: 'cuestionario', component: CuestionarioComponent},
				{path: 'recomendacion', component: RecomendacionComponent}
			]}
		]),
    TranslateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    StepsModule,
    TabViewModule,
    DividerModule,
    CheckboxModule,
    ScrollPanelModule,
    MainPageRoutingModule,
    AccordionModule,
    ChartModule,
    ProgressBarModule,
    FieldsetModule
  ],
  declarations: [
    MainPage,
    ExplicacionComponent,
    RecoleccionDatosComponent,
    CuestionarioComponent,
    RecomendacionComponent,
    SplashComponent
  ],
  exports: [
    RouterModule
  ]
})
export class MainPageModule {}
