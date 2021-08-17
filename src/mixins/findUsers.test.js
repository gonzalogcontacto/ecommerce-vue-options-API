    

describe("As Administrator profile can ", () => {
    beforeEach(() => {
        cy.visit('admin/dashboard')
    })
    test("move to user dashboard", () => {
        cy.findByText(/user dashboard/i).click()

        cy.url().should('include', '/users')
    })
    test("search users", async () => {
        cy.findByText(/user dashboard/i).click()
        
        cy.findByLabelText(/search by name/i).clear().type('SEARCH CRITERIA');
        
        cy.findByText(/search/i).click()

        screen.getByText('Results').should('be.visible')

    })
})