import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { AuthorizationComponent } from './authorizations/authorization-component';
import { MemberComponent } from './member/member-component';
import { AuthorizationNewComponent } from './authorizations/auth-new/authorization-new-component';
import { MemberSummaryComponent } from './member/summary/member-summary-component';
import { MemberDocumentComponent } from './member/documents/member-document-component';
import { MemberAuthorizationComponent } from './member/authorizations/member-authorization-component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    { path: 'home', component: Dashboard },
    { path: 'member', component: MemberComponent, children: [
        {path: '', redirectTo: 'summary', pathMatch: 'full'},
        {path: 'summary/:id', component: MemberSummaryComponent},
        {path: 'authorizations/:id', component: MemberAuthorizationComponent},
        {path: 'documents/:id', component: MemberDocumentComponent}
    ]},
    { path: 'authorizations', component: AuthorizationComponent },
    { path: 'new-auth', component: AuthorizationNewComponent },
    { path: '**', redirectTo: 'home' }
];
