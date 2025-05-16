import React from 'react';
import Quiz from '../src/components/Quiz'; // Adjust path as needed

describe('Quiz Component', () => {
  it('renders the quiz component', () => {
    cy.mount(<Quiz />);
    cy.get('[data-testid="quiz-container"]').should('exist');
  });

  it('starts quiz when start button is clicked', () => {
    cy.mount(<Quiz />);
    cy.get('[data-testid="start-button"]').click();
    cy.get('[data-testid="question-container"]').should('exist');
  });
});