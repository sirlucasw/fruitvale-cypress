// Login via API (mais rápido que pela UI)
Cypress.Commands.add('login', (perfil = 'admin') => {
  cy.fixture('usuarios').then((u) => {
    cy.request('POST', `${Cypress.env('apiUrl')}/auth/login`, u[perfil]).then(({ body }) => {
      window.localStorage.setItem('token', body.access_token);
    });
  });
});

// Login pela interface
Cypress.Commands.add('loginUI', (email, senha) => {
  cy.visit('/login');
  cy.get('[data-cy=email]').type(email);
  cy.get('[data-cy=senha]').type(senha, { log: false });
  cy.get('[data-cy=entrar]').click();
});
