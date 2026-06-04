# BUG-001

## Title

Minus button performs division instead of subtraction

## Severity

Critical

## Priority

P0

## Environment

Scientific Calculator

## Steps

1. Click 5
2. Click −
3. Click 2
4. Click =

## Expected

3

## Actual

2.5

## Root Cause

HTML maps minus button to:

append('/')

instead of

append('-')