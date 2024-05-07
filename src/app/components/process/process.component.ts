import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent {
  constructor(private router: Router){}

}


document.addEventListener('DOMContentLoaded', () => {
  const overviewButtons = document.querySelectorAll('.overviewButton');

  overviewButtons.forEach(button => {
      button.addEventListener('click', () => {
          const targetId = button.getAttribute('data-target');
          const targetSection = document.getElementById('overviewSection');
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });

//

const approachButtons = document.querySelectorAll('.researchButton');

approachButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById('researchSection');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//

const researchButtons = document.querySelectorAll('.triviaButton');

researchButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById('triviaSection');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//

const personButtons = document.querySelectorAll('.reactionButton');

personButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById('reactionSection');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//

const interviewButtons = document.querySelectorAll('.bookButton');

interviewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById('bookSection');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//

const processButtons = document.querySelectorAll('.webButton');

processButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById('webSection');
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//


});
