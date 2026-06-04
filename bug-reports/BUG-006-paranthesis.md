# BUG-006

## Title

Operations following parenthesized expression are ignored

## Severity

High

## Priority

P1

## Steps

1. Enter (2+4)*5
2. Click =

## Expected

30

## Actual

6

## Impact

Complex mathematical expressions produce incorrect results.

## Notes

Calculator evaluates the parenthesized expression but ignores the subsequent multiplication operation.