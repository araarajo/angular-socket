import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './containers/error/error.component';

export const rootRoutes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

export const RootRouter = RouterModule.forRoot(
  rootRoutes, { useHash: true }
);
