# T9 Keyboard

The project contains a simulation of the t9 old school keyboard using RN.

**this project is just demonstration, please don't use for real production.

### Component Structure
1. Keyboard/
  ``Keyboard`` (Main/Logic)
  `` .Cursor`` (Cursor Animation)
  ``.Key`` (Single Key Component)
  ``.TextArea`` (Text Wrap Component)
  ``.styles`` (Keyboard global styles)
-----
  2. Api 
  - ``fetchKeys()`` (Fetch Keyboard Keys - GET)
  - ``decodeWords()`` (Decode Words by key numbers - POST)

  ---

  3. Server
  - ``mockServer`` - Mockup for server-side. (JS)
  - ``keyMap`` - Keys database.
---

  ### How it works?

  The app will decode on real time as soon as the user start typing. The user should be able to write full phrases and delete them.
