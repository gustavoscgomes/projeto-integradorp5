Feature: Pesquisa no Portal da Transparência
Scenario: O usuário busca por "Segurança" no site
  Given que o usuário está no portal da transparência
  When o usuário digita "Segurança" no campo de busca
  And o usuário clica no botão de busca
  Then os resultados da busca contêm "SEGURANÇA"