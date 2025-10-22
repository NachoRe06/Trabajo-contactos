import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactsPage } from './pages/contacts-page/contacts-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { GroupsPage } from './pages/groups/groups';
import { RegisterPage } from './pages/register-page/register-page';
import { onlyPublicUserGuard } from './guards/only-public-user-guard';
import { onlyLoggedUserGuard } from './guards/only-logged-user-guard.';
import { NewEditContact } from './pages/new-edit-contact/new-edit-contact';

export const routes: Routes = [
    {
        path:"login",
        component: LoginPage,
        canActivate: [onlyPublicUserGuard]
    },
    {
        path: "register",
        component: RegisterPage,
        canActivate: [onlyPublicUserGuard]
    },

    {
        path: "",
        component: LoggedLayout,
        canActivate: [onlyLoggedUserGuard],
        children: [
            {
                path: "",
                component: ContactsPage  
            },
            {
                path: "contacts/new",
                component: NewEditContact
            },
            {
                path: "contacts/:idContacto",
                component: ContactDetailsPage
            },
            {
                path: "contacts/:idContacto/edit",
                component: NewEditContact
            },
            {
                path: "groups",
                component: GroupsPage  
            },
        ]
    }, 

];