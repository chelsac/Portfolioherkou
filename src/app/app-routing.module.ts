import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';
import { SamplesComponent } from './samples/samples.component';
import { ServicesSectionComponent } from './services-section/services-section.component';

const routes: Routes = [
                        {path:'',component:LandingSectionComponent},
                        {path:'about',component:AboutComponent},
                        {path:'services',component:ServicesSectionComponent},
                        
                        {path:'contactus',component:ContactUsComponent},
                        {path:'sample',component:SamplesComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
