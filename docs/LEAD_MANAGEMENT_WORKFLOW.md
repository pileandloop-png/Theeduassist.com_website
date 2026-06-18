# Lead Management Workflow

This is the standard operating procedure for handling new inquiries.

## 1. New Lead Received
- A form is submitted via the website.
- Backend validates Turnstile, saves lead to Firestore `leads` collection.
- Status is automatically set to `new`.
- Notification email is sent to `info@theeduassist.com`.

## 2. Review and Triage
- Project Manager (PM) logs in/reviews the email.
- PM updates status to `reviewed`.

## 3. Contact Client
- PM reaches out to the client via email or books the requested session.
- Status is updated to `contacted`.

## 4. Qualification
- After initial contact, the lead is either:
  - `qualified`: Moving forward to a proposal or project.
  - `notFit`: Not a match for our services at this time.

## 5. Archive / Export
- Leads should not stay active forever. Old or completed leads can be marked `archived`.
- Weekly/Monthly export to CSV for tracking and analytics (optional).
