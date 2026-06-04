# Defect Analysis Report

## Overview

During exploratory testing and automation development, multiple functional defects were identified in the Scientific Calculator application.

The defects were validated through automated Playwright regression tests and documented below with observed behavior, root cause analysis, impact assessment, and recommendations.

---

# BUG-001

## Title

Subtraction operation performs division

## Severity

High

## Priority

P1

## Steps to Reproduce

1. Enter `5`
2. Click `-`
3. Enter `2`
4. Click `=`

## Expected Result

```text
3
```

## Actual Result

```text
0.4
```

## Root Cause Analysis

The subtraction button is incorrectly mapped to division logic.

Observed behavior suggests:

```javascript
5 - 2
```

is executed as:

```javascript
2 / 5
```

indicating both:

- Incorrect operator mapping
- Reversed operand evaluation

## Impact

All subtraction calculations produce incorrect results.

## Recommendation

Verify operator mapping between UI controls and evaluation engine.

---

# BUG-002

## Title

Digit 3 appends 0

## Severity

Critical

## Priority

P1

## Steps to Reproduce

1. Click digit `3`

## Expected Result

```text
3
```

## Actual Result

```text
0
```

## Root Cause Analysis

Button configuration is incorrectly wired.

Observed implementation:

```html
<button onclick="append('0')">3</button>
```

The displayed label and appended value are inconsistent.

## Impact

Any expression containing digit 3 becomes invalid.

Examples:

```text
3 + 1
13 + 5
(2 + 3) * 4
```

## Recommendation

Update button binding to append correct value.

---

# BUG-003

## Title

Sin function returns incorrect value

## Severity

High

## Priority

P2

## Steps to Reproduce

1. Enter `0`
2. Click `sin`

## Expected Result

```text
0
```

## Actual Result

Unexpected constant value returned.

## Root Cause Analysis

Scientific function implementation does not evaluate current display value correctly.

Possible causes:

- Hardcoded return value
- Incorrect parameter handling
- Missing conversion to numeric type

## Impact

Scientific calculations cannot be trusted.

## Recommendation

Review trigonometric function implementation and input handling.

---

# BUG-004

## Title

Division evaluates operands in reverse order

## Severity

High

## Priority

P1

## Steps to Reproduce

1. Enter `8`
2. Click `÷`
3. Enter `2`
4. Click `=`

## Expected Result

```text
4
```

## Actual Result

```text
0.25
```

## Root Cause Analysis

Expression evaluator reverses operand order.

Observed behavior:

```text
8 ÷ 2
```

evaluated as:

```text
2 ÷ 8
```

## Impact

All division operations return incorrect results.

## Recommendation

Review stack processing and operand extraction logic.

---

# BUG-005

## Title

Empty expression returns undefined

## Severity

Medium

## Priority

P3

## Steps to Reproduce

1. Launch calculator
2. Click `=`

## Expected Result

```text
Error
```

or

```text
Please enter expression
```

## Actual Result

```text
undefined
```

## Root Cause Analysis

Input validation is missing before evaluation.

Application attempts to evaluate an empty expression.

## Impact

Poor user experience and unclear error handling.

## Recommendation

Validate input before execution.

---

# BUG-006

## Title

Operations following parenthesized expressions are ignored

## Severity

High

## Priority

P1

## Steps to Reproduce

1. Enter:

```text
(2+4)*5
```

2. Click `=`

## Expected Result

```text
30
```

## Actual Result

```text
6
```

## Root Cause Analysis

Parenthesized expression is evaluated correctly:

```text
(2+4) = 6
```

However, subsequent multiplication operation is ignored.

This suggests a parser/evaluation defect after bracket resolution.

## Impact

Complex expressions produce incorrect results.

Examples:

```text
(2+4)*5
(10-5)/2
(1+2)*(3+4)
```

## Recommendation

Review expression parser and post-parentheses operator evaluation.

---

# Defect Summary

| Bug ID | Title | Severity | Priority |
|----------|----------|----------|----------|
| BUG-001 | Subtraction performs division | High | P1 |
| BUG-002 | Digit 3 appends 0 | Critical | P1 |
| BUG-003 | Sin function incorrect | High | P2 |
| BUG-004 | Division operands reversed | High | P1 |
| BUG-005 | Empty expression returns undefined | Medium | P3 |
| BUG-006 | Parentheses evaluation incomplete | High | P1 |

---

# Testing Approach

Defects were identified through:

- Exploratory testing
- Risk-based analysis
- Boundary testing
- State transition testing
- Automated Playwright regression tests

Regression coverage has been implemented using:

```typescript
test.fail()
```

to preserve defect documentation while maintaining CI stability.