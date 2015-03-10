# JasmineDiff

[Jasmine](http://jasmine.github.io/) is a great JavaScript testing framework, but sometimes it's hard to see the subtle differences between the expected value and the actual value in failing specs. This is a tiny Chrome/Chromium extension that stays out of the way 99.99% of the time, and displays diffs under failing tests in Jasmine. Absolutely no configuration whatsoever.

# Installation
* Download the latest release from https://github.com/Nateowami/Backloader/releases/latest.
* Open chrome://extensions/.
* Open your downloads folder.
* Drag the file (Backloader.crx) from its folder to Chrome on the extensions page.
* Chrome will ask you to confirm that you want to install the file. Click "Add."
That's it! If you experience any issues try disabling Backloader by clicking on the extension's icon and unselecting "Enable redirects and blocking."

NOTE: This is licensed under the MIT license (see LICENSE.md). The file `diff.js` is licensed with the BSD, so of course that license applies to that code. For reference, the original project is hosted at https://github.com/kpdecker/jsdiff.
