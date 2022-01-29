describe('my first test suite', function()
{
it('my first tc', function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.products:visible').should('have.lenth',4);
})
it('my second tc', function(){
    
})



}

)