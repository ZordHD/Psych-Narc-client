
import Appeals from "./pages/Appeals";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import PersonalAccount from "./pages/PersonalAccount";
import Registration from "./pages/Registration";
import Services from "./pages/Services";
import Structure from "./pages/Structure";
import TeamNews from "./pages/TeamNews";
import Vacancies from "./pages/Vacancies";
import AdminMainPage from "./pages/AdminMainPage";
import AdminSecondPage from "./pages/AdminSecondPage";
import AdminVacancies from "./pages/AdminVacancies";
import AdminThirdPage from "./pages/AdminThirdPage";
import {ADMIN_FOURTH_PAGE_ROUTE, ADMIN_MAIN_PAGE_ROUTE, ADMIN_SECOND_PAGE_ROUTE, ADMIN_THIRD_PAGE_ROUTE, ADMIN_VACANCIES_ROUTE, APPEALS_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE, PERSONALACCOUNT_ROUTE, REGISTRATION_ROUTE, SERVICES_ROUTE, STRUCTURE_ROUTE, TEAMNEWS_ROUTE, VACANCIES_ROUTE } from "./utils/consts";
import AdminFourthPage from "./pages/AdminFourthPage";

export const authRoutes = [
    {
        path: ADMIN_MAIN_PAGE_ROUTE,
        Component: AdminMainPage
    },
    {
        path: ADMIN_SECOND_PAGE_ROUTE,
        Component: AdminSecondPage
    },
    {
        path: ADMIN_THIRD_PAGE_ROUTE,
        Component: AdminThirdPage
    },
    {
        path: PERSONALACCOUNT_ROUTE,
        Component: PersonalAccount
    },
    {
        path: ADMIN_VACANCIES_ROUTE,
        Component: AdminVacancies
    },
    {
        path: ADMIN_FOURTH_PAGE_ROUTE,
        Component: AdminFourthPage
    }
]

export const publicRoutes = [
    {
        path: APPEALS_ROUTE,
        Component: Appeals
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: MAINPAGE_ROUTE,
        Component: MainPage
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: SERVICES_ROUTE,
        Component: Services
    },
    {
        path: STRUCTURE_ROUTE,
        Component: Structure
    },
    {
        path: TEAMNEWS_ROUTE,
        Component: TeamNews
    },
    {
        path: VACANCIES_ROUTE,
        Component: Vacancies
    },

]