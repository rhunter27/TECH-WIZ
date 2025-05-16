describe('Tech Quiz E2E', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should start the quiz when start button is clicked', () => {
      cy.get('[data-testid="start-button"]').click();
      cy.get('[data-testid="question-container"]').should('exist');
    });
  
    it('should navigate through all questions and show score', () => {
      cy.get('[data-testid="start-button"]').click();
      
      // Answer all questions
      for (let i = 0; i < 10; i++) {
        cy.get('[data-testid="answer-option"]').first().click();
        cy.get('[data-testid="next-button"]').click();
      }
      
      // Verify score is displayed
      cy.get('[data-testid="score-container"]').should('exist');
      
      // Start new quiz
      cy.get('[data-testid="new-quiz-button"]').click();
      cy.get('[data-testid="start-button"]').should('exist');
    });
  });