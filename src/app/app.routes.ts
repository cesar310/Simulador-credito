import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Página principal',
        component: MainPageComponent
    },
    {
        path: 'tutorial',
        title: 'Tutorial',
        component: TutorialComponent
    }
];
