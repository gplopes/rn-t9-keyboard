# T9 Keyboard

The project contains a simulation of the t9 old school keyboard using RN.

**this project is just demonstration, please don't use for real production.

### Component Structure
1. **Keyboard/**
  ``Keyboard`` (Main/Logic)
  ``.Key`` (Single Key Component)
  ``.styles`` (Keyboard global styles)

2. **Textarea/**
  ``.Textarea`` (Textarea Wrap Component)
  ``.Item`` (Textarea Component)
  ``.Cursor`` (Cursor Animation)
  ``.styles`` (Textarea global styles)

3. **Predict/**
  ``.Predict`` (Main/List)
  ``.Item`` (List Item)
  ``.styles`` (Predict global styles)

4. **shared/**
  ``CText`` (Custom Global Text Component)

5. **T9/**
  ``T9`` (Logic-Decode/Encode)
  ``.mapKeys`` (Keys & Letters)
  ``.helpers`` (shared functions)

6. **Api/**
``fetchPredictWords()`` (Fetch Predict Words)


  ---
  7. **Server/**
  - ``1000words`` (Words array)
  - ``getWordsByNumber()`` (MockServer)
---

  ### How it works?

  The app will decode on real time as soon as the user start typing. The user should be able to write full phrases and delete them.
