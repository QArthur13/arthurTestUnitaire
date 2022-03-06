describe('Test Front', () => {

    it('Too much quantity', () => {

        cy.visit("http://localhost:3000");
        cy.wait(8000);
        cy.get(':nth-child(1) > img').click();
        cy.wait(3000);
        cy.get('input').type('15').trigger('change');
        cy.wait(2000);
        cy.get('button').click();
        cy.wait(10000);
        //cy.get('.App > :nth-child(1) > :nth-child(1)').contains("Trop de quantité");
        cy.get('.App > :nth-child(1) > :nth-child(1)').invoke('text').then(el => {

            expect(el).to.equal('Trop de quantité');

        });
        cy.wait(3000);

    });

    it('Add product', () => {

        cy.visit("http://localhost:3000");
        cy.wait(4000);
        cy.get(':nth-child(5) > img').click();
        cy.wait(3000);
        cy.get('input').type('5').trigger('change');
        cy.wait(2000);
        cy.get('button').click();
        cy.wait(8000);
        cy.get('.App > :nth-child(1) > :nth-child(1)').invoke('text').then(el => {

            expect(el).to.equal('Enregistré dans le panier');

        });
        cy.wait(3000);

    });

    it('Go to Cart and delete product', () => {

        cy.visit("http://localhost:3000");
        cy.wait(4000);
        cy.get('.App > :nth-child(1) > :nth-child(1)').click();
        cy.wait(6000);
        cy.get('button').click();
        cy.wait(10000);
        cy.get('.App > :nth-child(1) > :nth-child(2)').invoke('text').then(el => {

            expect(el).to.equal("Produit bien supprimé");

        });
        //cy.get('p').contains('Produit bien supprimé');
        cy.wait(3000);

    })

});
