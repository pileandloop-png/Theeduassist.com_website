# Tawk.to Sales Chat Setup

**Widget Settings:**
* Widget Color: `#77BA55`
* Widget Name: TheEduAssist Sales Chat
* Welcome Message: "Hi! Need help choosing the right package or have a question about pricing?"

**Suggested Messages (Pre-filled):**
* I want to start a package
* Help me choose the right service
* I need pricing and payment details

**Pre-Chat Form Fields:**
* Name
* Email
* What do you need help with?

**Team Setup:**
* Install Tawk mobile app for agents
* Enable browser notifications
* Enable missed chat email notifications
* Add team members as agents
* Set business hours/timezone

**Note:** Use Google Form (via `/book-free-audit/`) for full project details collection. Tawk is for quick sales conversions and payment queries.

Tawk.to can notify the team through:
* Tawk dashboard
* Tawk mobile app
* browser notifications
* missed chat email notifications
* Tawk webhooks later

For Discord/email automation later:
Use Tawk Webhooks → Firebase Function or Make/Zapier → Discord/email.

Security rule:
Never expose Discord webhook URL in frontend.
Never expose Tawk webhook secret in frontend.
Validate webhooks server-side if implemented.
