# Bank tech test

## Purpose of the program

~~~~
The program deducts (withdraws) or adds (deposits) money from / into a bank account and displays 
these transactions with the date of when they have taken place in a statement format.
~~~~

----------------------------

## User Stories

~~~~
As a user of my bank account
So that I can increase my account balance
I want to make a deposit of 1000
~~~~

~~~~
As a user of my bank account
So that I can increase my account balance
I want to make a deposit of 2000
~~~~

~~~~
As a user of my bank account
So that I can decrease my account balance
I want to make a withdrawal of 500
~~~~

~~~~
As a user of my bank account
So that I can keep track of the date of my transactions
I want the date of each transaction recorded
~~~~

~~~~
As a user of my bank account
So that I can see my date specified transactions and final balance
I want to print my bank statement
~~~~

-------------------------------

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Technical Specifications / Set up instructions

1. Clone this repo to your local machine.  Within this cloned project directory install the below.

2. Install Node.js

* Install Node Version Manager (NVM)
  ```
  brew install nvm
  ```
  Then follow the instructions to update your `~/.bash_profile`.
* Open a new terminal
* Install the latest long term support (LTS) version of [Node.js](https://nodejs.org/en/), currently `16.14.0` (version 17 will be available with a maintenance LTS Start date of 2022-04-01).
  ```
  nvm install 16
  ```

3. Install Node.js dependencies
   ```
   * npm init -y
   * npm install
   ```
4. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.

5. For testing through test driven development install Jest
   ```
   * npm install -g jest
   * npm install jest
   ```

6. For the purpose of commiting this project, add the `node_modules` file to your `.gitignore` file.

### Test

- To run all tests on the entire directory, run the following from the top parent directory
  ```
  jest
  ```
- To run tests on a specifi file, run the following
  ```
  `jest<file name>`
  ```

  ```bash
  npm run lint              # linter only
  ```

## Self-assessment

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy/course&prefill_File=individual_challenges/bank_tech_test.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
