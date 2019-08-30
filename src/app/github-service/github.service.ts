import { Injectable } from '@angular/core';
import { Github } from '../github';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Github
  }

  constructor() { }
}