Feature: Pesquisa no Portal da Transparência

  Scenario: O usuário busca por "terceirizados" no site
    Given que o usuário está no portal da transparência
    When o usuário digita "terceirizados" no campo de busca
    And o usuário clica no botão de busca
    Then os resultados da busca contêm "Terceirizados"
