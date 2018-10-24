import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routingComponents = [

];

const routes: Routes = [
    { path: '', redirectTo: 'company-signals', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent },
    // { path: 'signup', component: SignupComponent },
    // { path: 'reset/:link', component: ChangePasswordLinkComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }