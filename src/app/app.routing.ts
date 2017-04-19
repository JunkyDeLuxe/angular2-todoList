import { RouterModule, Routes } from '@angular/router';

/** modules **/
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
