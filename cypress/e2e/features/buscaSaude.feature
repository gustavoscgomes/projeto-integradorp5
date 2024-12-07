# Feature: Busca no Portal da Transparência

#   Scenario: O usuário busca por "saúde" no site
#     Given que o usuário está no portal da transparência
#     When o usuário digita "saúde" no campo de busca
#     And o usuário clica no botão de busca
#     Then os resultados da busca contêm palavra saúde

Feature: Busca no Portal da Transparência

  Scenario: O usuário busca por "saúde" no site
    Given que o usuário está no portal da transparência
    When o usuário digita "saúde" no campo de busca
    And o usuário clica no botão de busca
    Then os resultados da busca contêm "SAÚDE"