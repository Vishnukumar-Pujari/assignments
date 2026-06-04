
Project Structure



rbi-caluclator/
│
├── app/
│   └── Scientific Calculator.html

│
├── tests/
├── pages/
├── fixtures/
├── utils/
├── test-data/
├── .github/workflows/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md





| Feature          | Category          | Risk     |
| ---------------- | ----------------- | -------- |
| Addition         | Arithmetic        | High     |
| Subtraction      | Arithmetic        | High     |
| Multiplication   | Arithmetic        | High     |
| Division         | Arithmetic        | Critical |
| Decimal Handling | Precision         | Critical |
| Negative Numbers | Boundary          | High     |
| Square Root      | Scientific        | High     |
| Exponent         | Scientific        | High     |
| Trigonometry     | Scientific        | High     |
| Logarithm        | Scientific        | Medium   |
| Parentheses      | Expression Engine | Critical |
| Invalid Input    | Validation        | Critical |
| Clear Function   | State Management  | Medium   |



HOW TO RUN
-----------

npm install
npx playwright install
npx playwright test
