import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { QuizAtemptComponent } from './components/quiz-atempt/quiz-atempt.component';
import { ResultsComponent } from './components/results/results.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'quiz-atempt', component: QuizAtemptComponent},
    {path: 'results', component: ResultsComponent},
    {path: 'leaderboard', component: LeaderboardComponent},
];