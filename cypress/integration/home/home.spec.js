describe('Home page', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })


    it('asks the user to login with their username and password',()=>{       
        const emailInput = cy.get('.email-Input')
        const passwordInput = cy.get('.password-Input')
        const loginButton = cy.get('.login-Button')

        expect(emailInput).toExist()
        expect(passwordInput).toExist()
        expect(loginButton).toExist()
        
    })

    it('after user clicks the Login button the user is displayed the movie browsing screen', ()=>{
        const loginButton = cy.get('.login-Button')
        loginButton.click()

        expect(cy.get('.browsing-movies-all')).toExist()
    })

})