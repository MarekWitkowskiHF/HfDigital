export class Login {
    public static login(userName: string, password: string) {
        cy.wait(5000)
        cy.get('body').then(($body) => {
            if ($body.text().includes('Logout')) {
                cy.contains('Logout').click();
                cy.get('#username').type(userName + '{enter}')
                cy.get('#password').type(password + '{enter}')
            } else {
                cy.get('body').then(($body2) => {
                    if ($body2.find('[data-id="reset-button"]').length > 0) {
                        cy.contains('Not you?').click();
                        cy.wait(1000)
                        cy.get('#username').type(userName + '{enter}')
                        cy.get('#password').type(password + '{enter}')
                    } else {
                        cy.get('#username').type(userName + '{enter}')
                        cy.get('#password').type(password + '{enter}')

                    }
                })
            }

        });
    }
}