# Accessibility Report

## Why I did this
I wanted my portfolio to work for everyone, including people who use a keyboard instead of a mouse, people who use screen readers, and people with low vision or color blindness. I checked the site against WCAG 2.1 Level AA. WCAG (Web Content Accessibility Guidelines) is the main standard for web accessibility, and Level AA is the level most organizations aim for. It builds on WCAG 2.0 Level AA, which Section 508 incorporates for federal websites.

## How I tested it
I used three kinds of testing, because each one catches different problems.

**Automated scans.** I ran two scanning tools on every page:
- axe-core, which I ran in both light and dark mode on desktop and phone-sized screens
- WAVE, a free tool from WebAIM, which I ran on the live site

These tools catch problems like text that's too faint to read or form fields with no label.

**Keyboard only.** I went through every page using only the Tab, Shift+Tab, and Enter keys. Some people can't use a mouse, so everything on the site has to work without one.

**Screen reader.** I used VoiceOver, the screen reader built into macOS, with Safari. A screen reader reads the page out loud for people who are blind or have low vision. I listened to the headings, links, and contact form to make sure everything made sense when heard instead of seen.

One thing I noticed: the online version of WAVE always showed my site in dark mode, no matter which theme I picked. That's because my site picks its theme with a script, and WAVE loads the page inside its own window. I covered light mode with the axe-core scans instead.

## What I found and fixed
My first round of testing found 7 problems. I fixed all 7 and tested each fix.

A few of these are about **contrast ratio**, which compares how dark the text is to how light the background is. WCAG asks for at least 4.5 to 1 for normal text. Anything lower can be hard to read, especially for people with low vision.

| # | Problem | WCAG rule | Before | After | Commit |
|---|---|---|---|---|---|
| 1 | Sidebar headings were too faint in light mode | 1.4.3 Contrast | 4.39 to 1 | 6.87 to 1 | fb7751e |
| 2 | Red accent text was too faint in dark mode | 1.4.3 Contrast | 3.73 to 1 | 5.43 to 1 | ed6a6e7 |
| 3 | Dates and small gray text on cards were too faint in dark mode | 1.4.3 Contrast | 4.06 to 1 | 7.0 to 1 | 6df9199 |
| 4 | Contact form error messages and required-field stars were too faint | 1.4.3 Contrast | 3.76 to 1 light, 2.74 to 1 dark | 6.47 to 1 light, 5.43 to 1 dark | f4cf6db |
| 5 | Contact links had hidden labels that didn't match the text people see | 2.5.3 Label in Name | Fail | Pass | 5a40d67 |
| 6 | Screen readers didn't connect form errors to the right field or announce when a message was sent | 1.3.1, 3.3.1, 4.1.2, 4.1.3 | Fail | Pass | ea10699 |
| 7 | Keyboard users had to tab through every header and sidebar link on every page | 2.4.1 Bypass Blocks | Fail | Pass | 9015a99 |

Some notes on the bigger fixes:

- **#5:** Each contact link had a hidden label like "GitHub," but the visible text said "github.com/MikeEasyMac." People who use voice control say what they see on screen, so the link wouldn't respond. I removed the hidden labels so the visible text is used.
- **#6:** I linked each error message to its field, marked the fields as required in the code, and made the "Message Sent!" confirmation get read out loud. When the form has a mistake, the cursor now jumps straight to the first field that needs fixing.
- **#7:** I added a "Skip to main content" link. It stays hidden until you press Tab, then lets you jump past the menus with one key press.

## Results after the fixes
Every page on the live site now has 0 errors and 0 contrast errors in WAVE, with a score of 10 out of 10.

| Page | Errors | Contrast errors | Alerts | WAVE score |
|---|---|---|---|---|
| Home | 0 | 0 | 2 | 10/10 |
| About | 0 | 0 | 3 | 10/10 |
| Experience | 0 | 0 | 1 | 10/10 |
| Projects | 0 | 0 | 1 | 10/10 |
| Contact | 0 | 0 | 2 | 10/10 |

My manual tests all passed too:

| What I tested | Result |
|---|---|
| Pressing Tab on a new page shows the "Skip to main content" link, and Enter jumps into the page | Pass |
| You can always see which item is selected, and Tab moves through the page in a sensible order | Pass |
| The light/dark mode button and the mobile menu work with just the keyboard | Pass |
| Sending the contact form empty moves the cursor to the first field with an error | Pass |
| VoiceOver reads each form field's name and says it's required, without reading the star | Pass |
| VoiceOver reads the error message when you land on a field that has one | Pass |
| VoiceOver's heading list shows a clear page structure | Pass |

## WAVE alerts I reviewed
WAVE also shows "alerts." These aren't failures, just things worth a second look. I checked each one:

- **Redundant link:** my name in the header and the Home link both go to the homepage. Almost every website does this, and it doesn't break any rule.
- **Link to PDF:** the Resume buttons open a PDF. WAVE suggests telling people that before they click. I may add "(PDF)" to the button text later.
- **Redundant alt text:** the alt text on my About page photo (the description a screen reader reads for an image) is the same as the heading next to it. Nothing is missing, so it doesn't fail, but I could make the description more specific.

## Known issue
If a visitor's device is set to dark mode and they haven't clicked the theme button yet, the button is labeled "Switch to dark mode" even though the site is already dark. After they click it once, the label is correct from then on. I plan to fix this by having the button check which theme is actually showing instead of only the saved setting. (WCAG 4.1.2)

## Keeping it accessible
Whenever I make changes, I'll re-run the scans and do a quick keyboard and VoiceOver check on the pages I touched. I'll also check any new page against WCAG 2.1 AA before it goes live.

## Report a problem
If something on this site doesn't work for you, email me at MichaelJohnson.USN@gmail.com and I'll work on fixing it.