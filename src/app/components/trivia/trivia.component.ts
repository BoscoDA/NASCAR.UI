import { Component, OnInit } from '@angular/core';
import { TriviaRecord } from '../../models/trivia-game';
import { Question } from '../../models/question';
import { TriviaService } from '../../services/trivia.service';
import { interval } from 'rxjs';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrl: './trivia.component.css'
})
export class TriviaComponent implements OnInit{

  started: boolean = false;
  levelSelect: boolean = false;
  triviaCompleted: Boolean = false;
  questionDisplay: Boolean = false;
  answerDisplay: Boolean = false;

  difficulty: number = 0;
  questionNum: number = 0;
  score: number = 0;
  questions: any = [];

  timer = 5;
  interval$: any;

  scoreRound1: number = 0;
  scoreRound2: number = 0;
  scoreRound3: number = 0;

  completedRound1: boolean = false;
  completedRound2: boolean = false;
  completedRound3: boolean = false;

  ngOnInit(): void {
    this.ResetQuiz();
    this.levelSelect = false;
  } 

  constructor(private triviaSerivce: TriviaService){}

  StartGame():void {
    this.levelSelect = true;
  }

  LevelSelect(difficulty: number): void{
    this.difficulty = difficulty;
    this.started = true;
    this.levelSelect = false;
    if(difficulty === 1){
      this.triviaSerivce.GetLevelOneQuestions()
          .subscribe(res => {
            this.questions = res.questions;
          });
    }
    else if(difficulty === 2){
      this.triviaSerivce.GetLevelTwoQuestions()
          .subscribe(res => {
            this.questions = res.questions;
          });
    }
    else if(difficulty === 3){
      this.triviaSerivce.GetLevelThreeQuestions()
          .subscribe(res => {
            this.questions = res.questions;
          });
    }

    this.DisplayQuestion();
    
  }

  DisplayQuestion(){
    this.questionDisplay = true;
    setTimeout(()=>{
      this.StartTimer();
    }, 500);
    

  }

  Answer(questionNumber: number, option: any){
    this.StopQuestionTimer();

    option.chosen = true;

    //if correct
    if(option.correct){
      this.score += (this.difficulty * 100);
      this.questions[this.questionNum].correct = true;
    }

    //if last question go to end screen
    if(questionNumber === this.questions.length){
      setTimeout(() => {
        this.triviaCompleted = true;
        if(this.difficulty === 1){
          this.completedRound1 = true;
          this.scoreRound1 = this.score;
        }
        else if(this.difficulty === 2){
          this.completedRound2 = true;
          this.scoreRound2 = this.score;
        }
        else if(this.difficulty === 3){
          this.completedRound3 = true;
          this.scoreRound3 = this.score;
        }

        console.log(this.questions);
      },500);
    }
    else{
      setTimeout(() => {
        this.questionNum++;
        this.answerDisplay = false;
        this.timer = 2;
        this.DisplayQuestion();
      },500);
    }
  }

  ResetQuiz(){
    this.triviaCompleted = false;
    this.levelSelect = false;
    this.started = false;
    this.questionDisplay = false;
    this.answerDisplay = false;
    this.questionNum = 0;
    this.score = 0;
    this.timer = 2;
  }

  NextLevel(){
    this.triviaCompleted = false;
    this.levelSelect = true;
    this.started = false;
    this.questionDisplay = false;
    this.answerDisplay = false;
    this.questionNum = 0;
    this.score = 0;
    this.StopQuestionTimer();
    this.timer = 2;
    
  }

  StartQuestionTimer(){
    this.interval$ = interval(1000)
        .subscribe(val => {
          this.timer--;
          if(this.timer === 0){
            let option = {text: ""}
            this.Answer(this.questionNum+1, option);
          }
        });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },800000);
  }

  StopQuestionTimer(){
    this.interval$.unsubscribe();
  }

  ResetQuestionTimer(){
    this.StopQuestionTimer();
    this.timer = 30;
  }
  
  StartTimer(){
    this.interval$ = interval(1000)
        .subscribe(val => {
          this.timer--;
          if(this.timer === 0){
            this.answerDisplay = true;
            this.ResetQuestionTimer();
            this.StartQuestionTimer();
          }
        });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },800000);
  }
}
