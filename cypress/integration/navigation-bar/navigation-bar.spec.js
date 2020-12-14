describe('Navigation bar', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('should have a navigation bar that contains a "GMBD", "HOME", "LOGIN" buttons and search field with search button',()=>{
        const gmbdIcon = cy.get('#navbar-gmbd-icon')
        const homeButton = cy.get('#navbar-home-button')
        const loginButton = cy.get('#navbar-login-button')
        const searchField = cy.get('#navbar-search-field')
        const searchButton = cy.get('#navbar-search-button')
    
        expect(gmbdIcon).toExist()
        expect(homeButton).toExist()
        expect(loginButton).toExist()
        expect(searchField).toExist()
        expect(searchButton).toExist()
    } )
        
        
})
