---
title: "Avoiding long if-else statements in Python"
excerpt: "Long if-else statements are often not flexible and can lead to less readable and coupled code. Read how you can avoid them by using dictionaries ..."
date: 2023-10-21
---

# Avoiding long if-else statements in Python

When writing Python code you might end up with something like this:

```python
def get_device_os(device_name: str):
  if device_name == "iPhone 15 Pro":
    return "iOS"
  elif device_name == "iPhone 12 Pro Max":
    return "iOS"
  elif device_name == "Google Pixel 8 Pro":
    return "Android"
  elif device_name == "Samsung Galaxy S23":
    return "Android"
  else:
    return "Unknown"
```

So why is this problematic?

- When you want to add a new device name you need to stretch the if-else statement
- The if-else statement is static. You cannot fetch the names from a dynamic source such as a database
- You cannot re-use the translation from device name to operating system outside of the function

How can we make this more generic and re-usable? Since the given if-else statement is basically just a mapping from device name to operating system Python's `dict` data structure might come in handy here:

```python
# Can be stored in e.g. a central config file
DEVICE_OS_MAPPING: dict[str, str] = {
  "iPhone 15 Pro": "iOS",
  "iPhone 12 Pro Max", "iOS",
  "Google Pixel 8 Pro": "Android",
  "Samsung Galaxy S23": "Android"
}

def get_device_os(device_name: str) -> str:
  return DEVICE_OS_MAPPING.get(device_name, "Unknown")
```

In this example, we replaced the static if-else statement by a re-usable configurable dictionary.

## Bonus #1

We can also use the dictionary for more than just translating a device name to an operating system name.

```python
def get_all_known_devices() -> list[str]:
  return list(DEVICE_OS_MAPPING.keys())

def get_all_known_os() -> list[str]:
  return list(DEVICE_OS_MAPPING.values())
```

## Bonus #2

Since the operating system is a well-defined collection of constants we can be more explicit about this by using an `Enum`:

```python
from enum import Enum

class OS(Enum):
  IOS = "iOS"
  ANDROID = "Android"
  UNKNOWN = "Unknown"

DEVICE_OS_MAPPING: dict[str, OS] = {
  "iPhone 15 Pro": OS.IOS,
  "iPhone 12 Pro Max", OS.IOS,
  "Google Pixel 8 Pro": OS.ANDROID,
  "Samsung Galaxy S23": OS.ANDROID
}

def get_device_os(device_name: str) -> OS:
  return DEVICE_OS_MAPPING.get(device_name, OS.UNKNOWN)

def get_all_known_os() -> list[OS]:
  return list(DEVICE_OS_MAPPING.values())
```

Note how the type hints clearly indicate what kind of string is returned here. A user of these functions can now easily identify what kind of values can be returned.
