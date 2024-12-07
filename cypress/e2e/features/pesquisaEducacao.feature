Feature: Pesquisa no Portal da Transparência

  Scenario: O usuário busca por "educação" no site
    Given que o usuário está no portal da transparência
    When o usuário digita "educação" no campo de busca
    And o usuário clica no botão de busca
    Then os resultados da busca contêm "EDUCAÇÃO"