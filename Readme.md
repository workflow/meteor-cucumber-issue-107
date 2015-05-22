# Reproduction

1. Run with `SELENIUM_BROWSER=chrome meteor`

2. Watch tests fail with the following output:

```
  Scenario: Crash and Burn                # features/crash.feature:8
    Given I am an admin                   # features/crash.feature:9
      RuntimeError: RuntimeError
           (ScriptTimeout:28) A script did not complete before its timeout expired.
           Problem: asynchronous script timeout: result was not received in 0 seconds
```