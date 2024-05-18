import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAtemptComponent } from './quiz-atempt.component';

describe('QuizAtemptComponent', () => {
  let component: QuizAtemptComponent;
  let fixture: ComponentFixture<QuizAtemptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizAtemptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizAtemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
