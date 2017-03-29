import { RouterModule, Routes } from '@angular/router';

/** modules **/
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

/** auth guard **/
import { AuthGuard } from './components/auth/auth-guard.service';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
];

export const routing = RouterModule.forRoot(routes);
