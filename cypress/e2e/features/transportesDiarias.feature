Feature: Consulta de diárias com transportes no portal da transparência

  Scenario: O usuário acessa o portal e consulta diárias com transportes
    Given que o usuário acessa o portal da transparência
    When o usuário clica no menu despesas
    When o usuário clica na opção de "TRANSPORTES"
    When o usuário clica no ícone de diárias
    Then os resultados de diárias são exibidos