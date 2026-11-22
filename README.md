# FruitVale — Testes E2E com Cypress

Estrutura baseada no Plano de Testes de Software (v1.0).

| Pasta | Seção do plano |
|---|---|
| 01-autenticacao | 2.1 Autenticação e Acesso |
| 02-funcionalidades | 2.1 Funcionalidades Principais / 3 Testes Funcionais |
| 03-api | 2.1 Integração de APIs / 3 Testes de API |
| 04-regressao | 3 Testes de Regressão (STG) |
| 05-usabilidade-ui | 2.1 Compatibilidade / 3 Usabilidade e UI |
| 06-nao-funcionais | 3 Testes Não Funcionais |
| 07-smoke | 4.1 Smoke Tests em PROD |

```bash
npm install
npm run cy:open                 # modo interativo
npm test                        # todos os testes (DEV)
npx cypress run --env ambiente=stg
```

Use atributos `data-cy` no frontend para os seletores.
