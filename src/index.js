import React, { createContext } from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import UserStore from './store/UserStore';
import NewsStore from './store/NewsStore';
import ServicesStore from './store/ServicesStore';
import PartnersStore from './store/PartnersStore';
import GalleryStore from './store/GalleryStore';
import DocumentsStore from './store/DocumentsStore';
import AdministratorsStore from './store/AdministratorsStore';
import DepartmentsStore from './store/DepartmentsStore';
import MassMediaStore from './store/MassMediaStore';
import VacanciesStore from './store/VacanciesStore';
import HallOfFameStore from './store/HallOfFameStore';
import LineStore from './store/LineStore';
import ServicesRBStore from './store/ServicesRBStore';
import ForeignServicesStore from './store/ForeignServicesStore';
import OtherServicesStore from './store/OtherServicesStore';

export const Context = createContext(null)
const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

root.render(
  <Context.Provider value={{
    user: new UserStore(),
    news: new NewsStore(),
    services: new ServicesStore(),
    servicesRB: new ServicesRBStore(),
    foreignservices: new ForeignServicesStore(),
    otherservices: new OtherServicesStore(),
    partners: new PartnersStore(),
    gallery: new GalleryStore(),
    documents: new DocumentsStore(),
    administrators: new AdministratorsStore(),
    departments: new DepartmentsStore(),
    massmedia: new MassMediaStore(),
    vacancies: new VacanciesStore(),
    halloffame: new HallOfFameStore(),
    line: new LineStore()
  }}>
    <App />
  </Context.Provider>
);
