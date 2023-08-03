import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MaduraipackageComponent } from './maduraipackage/maduraipackage.component';
import { AdventurePackageComponent } from './adventure-package/adventure-package.component';

const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'maduraipackage', component:MaduraipackageComponent},
  {path:'adventure-package', component:AdventurePackageComponent},
  {path:'contact',component:ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
