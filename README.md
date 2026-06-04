# RBI Hub Code Challenge – Scientific Calculator Automation

## Overview

This repository contains a Playwright + TypeScript automation framework developed as part of the RBI Hub Code Challenge.

The objective was not only to automate the calculator but to demonstrate a Quality Engineering and Quality Architecture approach including:

- Risk-based testing
- Functional validation
- Boundary testing
- State management testing
- Accessibility assessment
- Visual regression testing
- CI/CD integration
- Defect identification and reporting

---

## Application Under Test

Scientific Calculator

Source:

```text
app/Scientific Calculator.html
```

For challenge execution, the application is executed locally to ensure deterministic and reproducible test runs.

---

## Tech Stack

| Tool | Purpose |
|--------|--------|
| Playwright | UI Automation |
| TypeScript | Test Development |
| Axe Core | Accessibility Validation |
| GitHub Actions | Continuous Integration |
| Playwright HTML Reporter | Reporting |

---

## Framework Architecture

```text
rbi-hub-code-challenge/

├── app/
│   └── Scientific Calculator.html
│
├── pages/
│   └── CalculatorPage.ts
│
├── fixtures/
│   └── testFixture.ts
│
├── test-data/
│   ├── buttons.ts
│   └── calculatorData.ts
│
├── tests/
│   ├── smoke/
│   ├── regression/
│   ├── boundary/
│   ├── state/
│   ├── accessibility/
│   └── visual/
│
├── utils/
│
├── docs/
│   ├── TEST_STRATEGY.md
│   └── DEFECT_ANALYSIS.md
│   └── COVERAGE_MATRIX.md|   
│
├── bug-reports/
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Test Strategy

### Smoke Tests

Purpose:

Validate core application functionality.

Coverage:

- Launch calculator
- Basic addition
- Clear functionality

---

### Regression Tests

Purpose:

Verify existing functionality and document known defects.

Coverage:

- Subtraction
- Division
- Digit entry
- Scientific functions
- Empty expression handling

---

### Boundary Tests

Purpose:

Validate edge cases and limits.

Coverage:

- Decimal values
- Large numbers
- Parentheses expressions
- Empty calculations

---

### State Tests

Purpose:

Validate application behavior across sequential operations.

Coverage:

- Clear after error
- Multiple calculations

---

### Accessibility Tests

Purpose:

Identify accessibility violations using Axe.

Coverage:

- Automated accessibility scan
- WCAG findings documentation

---

### Visual Tests

Purpose:

Detect unexpected UI changes.

Coverage:

- Full calculator screenshot comparison

---

## Known Defects

The following defects were identified during analysis:

| Bug ID | Description |
|----------|-------------|
| BUG-001 | Minus button performs division |
| BUG-002 | Digit 3 enters 0 |
| BUG-003 | Sin function returns constant value |
| BUG-004 | Division operands reversed |
| BUG-005 | Empty expression returns undefined |

Detailed reports are available in:

```text
bug-reports/
```

---

## Running Tests

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

### Execute All Tests

```bash
npm test
```

---

## Execute Specific Suites

Smoke

```bash
npm run test:smoke
```

Regression

```bash
npm run test:regression
```

Boundary

```bash
npm run test:boundary
```

State

```bash
npm run test:state
```

Accessibility

```bash
npm run test:a11y
```

Visual

```bash
npm run test:visual
```

---

## View Report

```bash
npm run report
```

---

## CI/CD

GitHub Actions pipeline executes:

1. Dependency Installation
2. TypeScript Validation
3. Playwright Test Execution
4. Report Artifact Upload

Workflow:

```text
.github/workflows/playwright.yml
```

---

## Quality Engineering Approach

This solution follows a Quality Architect mindset rather than a pure automation approach.

Focus areas:

- Risk-based prioritization
- Defect discovery
- Maintainable Page Object Model
- CI readiness
- Accessibility awareness
- Visual validation
- Reproducible execution

---

## Future Improvements

- Allure Reporting
- Cross-browser execution
- Performance testing
- API validation
- Dashboard reporting
- Test data generation framework

## Defect Documentation

Detailed defect investigation is available in:

```text
docs/DEFECT_ANALYSIS.md
