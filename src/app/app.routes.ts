import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactsPage } from './pages/contacts-page/contacts-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';

export const routes: Routes = [
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "",
        component: ContactsPage
    },
    {
        path: "contacts/:id",
        component: ContactDetailsPage
    },
];
