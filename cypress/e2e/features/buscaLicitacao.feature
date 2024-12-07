Feature: Buscar uma licitação no portal da transparência

  Scenario: O usuário busca por uma licitação."
    Given que o usuário está no portal da transparência
    When o usuário clica no ícone de compras
    When o usuário clica na opção de "Licitações"
    When o usuário digita "34.000.000364.2024" no campo de processo
    When o usuário clica no botão exibir relatorio
    Then a licitação é encontrada
