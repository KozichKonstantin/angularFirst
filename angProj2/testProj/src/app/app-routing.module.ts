import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { mainpageguardGuard } from './services/guard.service';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
// import { mainGuard } from './guards/guard';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent,
    canActivate: [mainpageguardGuard]
  },
  {
    path: 'edit',
    component: EditPageComponent, 
    canActivate: [mainpageguardGuard]
  },
  {
    path: '',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
