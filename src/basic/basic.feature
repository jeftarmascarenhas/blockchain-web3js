Feature: User connects with blockchain network

    Scenario: User see your balance in Ether

        Given I have a user account

        When I ask to get balance of user account I transform balance in two format ether and wei

        Then I should the screen showing with user account with ether and wei
