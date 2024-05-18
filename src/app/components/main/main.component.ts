import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TestsService } from '../../services/tests.service';
import { Topic } from '../../models/topic';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {

  public topics: Topic[] = [];

  constructor(public testsServices: TestsService){
    this.getTopics();
  }

  public getTopics () {
    return this.testsServices.loadTopics().subscribe((data)=> {
        this.topics = data;
    });
    
  }

}
