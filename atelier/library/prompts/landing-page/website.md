# website

> cad/cam designing web site


---

MASTER PROMPT — PREMIUM DENTAL CAD DESIGN & CASE MANAGEMENT PLATFORM

ROLE

Act as an award-winning UI/UX designer, senior product architect, elite full-stack web developer, database architect, security engineer, and motion-design specialist.

Your task is to design and build a production-ready premium dental CAD design service platform from scratch.

This is NOT merely a marketing website.

The final product must combine:

 1. A premium modern dental CAD company website.
 2. A customer registration/login system.
 3. A customer credit/wallet system.
 4. A complete dental case/order creation system.
 5. A tooth-by-tooth treatment/order configuration interface.
 6. Dental scan file upload and secure storage.
 7. Individual case tracking.
 8. Case-specific communication/chat.
 9. HTML preview delivery.
10. Final PDF/design-file delivery.
11. Email notifications.
12. Customer dashboard.
13. Administrative dashboard.
14. Pricing and credit management.
15. Payment management.
16. Cryptocurrency payment support.
17. Responsive mobile/tablet/desktop UI.
18. Advanced but performance-conscious animations.
19. Premium glassmorphism / futuristic dental-CAD visual language.

The company provides professional remote dental CAD design services.

The workflow is:

Doctor / Dentist / Dental Laboratory → Upload Scan → Configure Case → Submit Order → CAD Team Reviews → Case Enters Design Queue → Designer Works on Case → HTML Preview → Client Feedback / Approval → Revisions if necessary → Final Design File → Case Completed

The platform must be designed around this workflow.

The company primarily works with exocad and 3Shape, with a strong visual focus on digital dentistry, exocad workflows, CAD/CAM, dental milling, implant restorations, crowns, bridges, orthodontics and clear aligner workflows.

The brand can be configured as:

Digident Studio

Do not hard-code the company name throughout the application. Create a centralized configuration/content system so the administrator can change the company name, logo, contact information, pricing and other business information later.

---

1. CORE PRODUCT PRINCIPLE

The website must feel like a combination of:

- A premium international dental technology company
- A modern digital CAD studio
- A high-end SaaS platform
- A professional dental laboratory portal
- A futuristic AI/digital-design company

It must NOT look like:

- A generic WordPress dental clinic website
- An old-fashioned dental laboratory website
- A generic SaaS dashboard
- An amateur freelancer portfolio
- A template with excessive gradients
- A website overloaded with animations

The design must communicate:

Precision + Technology + Dentistry + Professionalism + Speed + Trust

The visual experience should immediately communicate that the company works with professional dentists, dental laboratories and digital dentistry workflows.

---

2. IMPORTANT IMPLEMENTATION RULE

Do NOT create a fake frontend-only prototype.

The application must be architected as a real application.

Every major feature must have an appropriate backend/data model.

For example:

- User registration must create a real user.
- User ID must be generated and stored.
- Wallet balance must be stored in the database.
- Orders must be stored in the database.
- Order numbers must be generated automatically.
- Uploaded files must be stored securely.
- Order statuses must be persisted.
- Messages must be stored per order.
- Admin status changes must be persisted.
- Payment transactions must be recorded.
- Credit deductions must be recorded.
- Notifications must be recorded.
- Files must be associated with the correct order.
- Customers must never see another customer's files or conversations.

Do not simulate these functions using hardcoded JSON.

---

3. RECOMMENDED TECH STACK

Use a modern production-ready architecture.

Preferred stack:

Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

Backend

Use Next.js server-side functionality / API routes or an equivalent secure backend architecture.

Database

Prefer:

- PostgreSQL

Authentication

Use a secure authentication system with:

- Email/password
- Email verification
- Password reset
- Secure sessions
- Optional future OAuth support

File Storage

Use secure object storage for:

- ZIP files
- STL files
- PLY files
- OBJ files
- PDF files
- HTML preview files
- Images
- Other dental CAD files

Do NOT store large files directly inside ordinary database fields.

Realtime

Where appropriate, use realtime functionality for:

- Case chat
- Order status changes
- Notifications

Payments

Create a payment abstraction layer so payment providers can be changed later.

Support architecture for:

- Credit/debit cards
- PayPal
- Cryptocurrency

Never store raw card numbers or CVV information.

Use official hosted checkout/payment-provider mechanisms whenever applicable.

---

4. BRAND / VISUAL IDENTITY

The visual identity should be futuristic and premium.

Primary visual direction:

Background

"#0c1128"

Deep midnight navy.

Main text

"#ffffff"

Secondary text

"#9ca3af"

Additional text

"#d1d5db"

Muted

"#4b5563"

Neon Blue

"#00f0ff"

Neon Purple

"#b026ff"

Gradients

Use combinations similar to:

"from-blue-400 to-purple-500"

and subtle:

"from-blue-200 to-purple-200"

Borders

Use:

- "white/5"
- "white/10"
- "white/20"
- "white/30"

Shadows

Use subtle:

- "black/40"
- "black/60"
- "black/90"

Do not make every component glow.

Glow should be used strategically.

---

5. TYPOGRAPHY

Primary font:

Outfit

Weights:

- 300
- 400
- 500
- 600
- 700
- 800
- 900

Headings:

- Very bold
- Weight 800–900
- Tight tracking
- Tight line height

Body:

- 300–500
- Relaxed line height

Labels:

- Small
- Uppercase when appropriate
- Bold
- Wide letter spacing

Typography should feel similar to a premium technology company rather than a traditional medical website.

---

6. GENERAL DESIGN LANGUAGE

Use:

- Glassmorphism
- Soft transparent panels
- Thin borders
- Subtle gradients
- Large typography
- Dark surfaces
- Neon blue/purple accents
- Soft shadows
- Layered backgrounds
- Subtle grid patterns
- Abstract dental/CAD geometry
- 3D-looking tooth silhouettes
- CAD wireframe visual elements
- Scanning effects
- Technical UI details

Avoid excessive:

- Rounded cards everywhere
- Giant gradients
- Excessive blur
- Excessive animation
- Random floating objects
- Unnecessary loading effects

The website must remain fast.

---

7. MAIN PUBLIC PAGES

Create at least:

 1. Home
 2. About Us
 3. Contact Us
 4. Pricing
 5. Sign In
 6. Sign Up
 7. Customer Dashboard
 8. New Order
 9. Order Details
10. Wallet / Credits
11. Profile / Account Settings

The application must also have a secure:

Admin Dashboard

---

8. NAVIGATION

Desktop navigation should be a premium floating glass navigation bar.

Suggested navigation:

- Home
- Services
- Pricing
- About Us
- Contact Us

Right side:

- Sign In
- Create Account

After login:

- Dashboard
- New Case
- My Cases
- Balance
- Profile

Primary CTA:

Start a Case

The navbar should be fixed/sticky and react subtly to scrolling.

Use:

- glass background
- backdrop blur
- thin border
- subtle shadow

On mobile:

Use a clean animated menu.

---

9. HOME PAGE

The Home page must be highly visual.

It should feel like an award-winning digital technology website.

Do NOT make the Home page a wall of text.

Use:

- Large hero
- Dental CAD imagery
- Dental scan imagery
- exocad-inspired visual concepts
- CAD wireframes
- Tooth models
- Milling visuals
- Team imagery
- Portfolio/work imagery
- Service cards
- Process visualization
- Pricing teaser
- CTA sections

---

10. HERO SECTION

Create a cinematic hero section.

Possible headline:

Digital Dentistry, Designed With Precision.

Supporting text should communicate:

Professional remote dental CAD design services for dentists, dental laboratories and dental professionals.

CTA buttons:

Start a Case

and

Explore Our Services

Hero visual:

A premium dental CAD scene.

Potential visual elements:

- 3D tooth
- CAD wireframe
- digital scan
- milling preview
- subtle rotating dental model
- technical grid
- glowing scan line

Do not overload the hero with animations.

Animation should be smooth and professional.

---

11. HOME PAGE — PROMOTIONAL BROCHURE / ANNOUNCEMENT STRIP

Near the top of the Home page, create a horizontally scrolling promotional/announcement area.

It should work similarly to a premium digital agency marquee.

Use it for:

- New services
- Promotions
- Pricing announcements
- Recent work
- Special offers
- Important notices
- New CAD services

Each item can contain:

- image
- title
- short description
- CTA

Images can be uploaded by the admin.

The system must allow the administrator to create/edit/delete promotional slides.

---

12. HOME PAGE — OUR SERVICES

Display major services.

Examples:

Anatomical Crown

CAD design for full-contour anatomical crowns.

Reduced Crown

Reduced anatomical design for layered restorations.

Pontic

Different pontic design configurations.

Bridge

Multi-unit bridge design.

Implant Restoration

Implant-supported restorations.

Custom Abutment

Custom abutment design.

Screw-Retained Restoration

Screw-retained implant restorations.

Veneer

Digital veneer design.

Inlay / Onlay

CAD design for indirect restorations.

Wax-Up

Anatomical, reduced or pontic wax-up.

Orthodontic / Clear Aligner

Digital orthodontic and clear-aligner-related CAD workflows.

Other Custom CAD

Custom dental CAD requests.

Each service should have:

- Name
- Image
- Short explanation
- Optional animation
- Optional video
- CTA

The administrator must be able to edit these services.

Do not hard-code the services permanently.

---

13. VISUAL CONTENT

The website should contain many high-quality visual elements.

Priority:

 1. exocad-related dental CAD visuals
 2. Dental CAD/CAM
 3. 3D tooth design
 4. Dental scanning
 5. Milling
 6. Implant restoration
 7. Orthodontics
 8. Clear aligners
 9. 3Shape-related workflows
10. Team/workspace imagery

Images can be generated using AI when appropriate.

However:

If the administrator uploads real company images, use those images instead.

Create an asset-management system where the admin can replace images.

---

14. ABOUT US PAGE

This page is specifically for:

The Team

Explain that the company is a professional team with:

- More than 10 years of professional experience
- Experience in digital dental design
- Experience with exocad
- Experience with 3Shape
- Experience with dental CAD/CAM workflows
- Experience working with dentists and dental laboratories
- Recently expanding into online remote services

Do not make unsupported medical claims.

---

15. TEAM SECTION

The About Us page must have a premium team section.

Each member should have:

- Profile image
- Name
- Job title
- Short biography
- Areas of expertise

Example roles:

- Founder
- CAD Designer
- Senior Dental CAD Designer
- Implant CAD Specialist
- Orthodontic CAD Designer
- Digital Workflow Specialist

Do not hard-code names.

The admin must be able to:

- Add team member
- Edit team member
- Delete team member
- Upload photo
- Change title
- Change biography
- Change ordering

---

16. CONTACT US PAGE

Keep Contact Us completely separate from About Us.

Contact Us should contain:

- Company name
- Company address
- Phone number
- Email
- Business information
- Year founded
- Working hours
- Contact form
- Social links if available

All information must be editable from the admin panel.

Create placeholders initially.

Do not invent actual company information.

---

17. PRICING PAGE

Pricing is one of the most important pages.

The pricing system must be dynamic.

Prices should be stored in the database.

The administrator must be able to modify:

- service
- price
- description
- category
- active/inactive state
- promotional price
- discount
- currency display

Do not hard-code prices.

---

18. CREDIT / WALLET SYSTEM

The platform does NOT primarily use conventional one-time checkout for every dental case.

Customers purchase account credits.

Example:

A customer deposits:

$10

Their account balance becomes:

$10 USD credit

When they purchase a case:

The corresponding amount is deducted from their credit balance.

Example:

Balance:

"$100"

Case price:

"$25"

After order submission:

"$75"

The system must maintain a complete transaction history.

Every wallet operation should have:

- transaction ID
- user ID
- amount
- currency
- type
- description
- related order if applicable
- payment method
- timestamp
- status

Transaction types:

- Deposit
- Case Charge
- Bonus Credit
- Refund
- Manual Adjustment
- Promotional Credit

---

19. WALLET SECURITY

Never simply modify the balance without a transaction record.

Use a ledger-based approach.

Every balance-changing action must create an immutable transaction record.

The displayed balance should be derived from valid ledger transactions or maintained using a secure transactional mechanism.

Prevent:

- double charging
- duplicate payment processing
- race conditions
- negative balances
- unauthorized balance modification

---

20. CRYPTOCURRENCY PAYMENT

Cryptocurrency must have strong visual emphasis on the Pricing and Wallet pages.

Create a dedicated:

Pay with Crypto

section.

It should clearly explain:

- Cryptocurrency payments
- Available cryptocurrencies
- Payment process
- Discount
- Transaction confirmation

The exact cryptocurrency list must be configurable by the administrator.

Do not hard-code unsupported currencies.

Do not store private keys.

Do not create a custom cryptocurrency wallet system.

Use a secure payment provider or controlled payment verification workflow.

---

21. CRYPTO DISCOUNT

The business wants to offer a:

15% discount for cryptocurrency payments

This must be configurable from the admin panel.

Admin settings:

- Crypto discount percentage
- Active/inactive
- Eligible currencies
- Minimum deposit
- Start date
- End date

The system should calculate:

Regular deposit:

"$100"

Crypto discount:

"15%"

Customer payment:

"$85"

But wallet credit:

"$100"

This exact logic must be configurable.

IMPORTANT:

Do not hard-code the 15% forever.

---

22. OTHER PAYMENT METHODS

Support architecture for:

- Credit/Debit Card
- PayPal
- Cryptocurrency
- Other future payment methods

Each payment method must be independently enabled/disabled from the admin panel.

The payment system should have a provider abstraction so another payment provider can be added later without rewriting the wallet system.

---

23. FIRST-DEPOSIT BONUSES

Create a configurable first-deposit bonus system.

Initial business rules:

$100 deposit

Customer receives:

3 free design units

$200 deposit

Customer receives:

8 free design units

$500 deposit

Customer receives:

20 free design units

These bonus units are separate from cash balance.

Create:

- cash balance
- bonus/free units

as separate concepts.

The admin must be able to edit:

- deposit threshold
- bonus amount
- eligibility
- active/inactive
- expiration if desired

Only apply the first-deposit promotion according to the configured rules.

Do not allow customers to repeatedly claim the first-deposit bonus.

---

24. CURRENCY DISPLAY

The platform's accounting currency is:

USD

The wallet balance must be fundamentally stored in USD.

Customers may optionally view prices in:

- USD
- EUR
- GBP

Create a currency selector.

Converted amounts are for display/reference unless a payment provider explicitly supports the selected currency.

Do not silently change the actual account balance currency.

---

25. AUTHENTICATION

Create:

Sign Up

Fields:

- First name
- Last name
- Company / Laboratory name
- Email
- Phone
- Country
- Password
- Confirm password
- Account type

Account type:

- Dentist
- Doctor
- Dental Laboratory
- Other Professional

Include:

- Terms acceptance
- Privacy acceptance

---

26. CUSTOMER ID SYSTEM

Every registered professional must receive a unique permanent customer ID.

The ID must follow this concept:

"YY-0-CUSTOMER_ID"

Example:

"26-0-36"

Meaning:

- "26" = registration year 2026
- "0" = separator/type marker
- "36" = unique customer number

The customer number must be unique.

Do not generate IDs based only on the number of current users.

Use a database sequence or safe unique-number mechanism.

---

27. ORDER / CASE NUMBER SYSTEM

Every order must have a unique case number.

Format:

"YY-0-CUSTOMER_ID-CASE_NUMBER"

Example:

"26-0-36-12"

Meaning:

- "26" = year
- "0" = separator/type marker
- "36" = customer ID
- "12" = 12th case of that customer

Case number must automatically increment per customer.

Example:

Customer 36:

Case 1:

"26-0-36-1"

Case 2:

"26-0-36-2"

Case 12:

"26-0-36-12"

Case numbering must remain consistent and must never accidentally duplicate.

---

28. CUSTOMER DASHBOARD

After login, the customer should see a premium dashboard.

Top area:

- Welcome message
- Customer ID
- Current balance
- Bonus/free units
- Currency selector
- Start New Case button

Example small welcome notification:

Welcome back, Doctor. Your workspace is ready.

This must be subtle.

Do NOT use a huge full-screen welcome popup.

---

29. DASHBOARD CASE LIST

Display:

- Case number
- Date
- Number of units
- Case type
- Current status
- Amount
- Last update
- Action button

Statuses should have visually distinct states.

Examples:

- Submitted
- Under Review
- Files Received
- In Design Queue
- In Design
- Preview Ready
- Awaiting Client Feedback
- Revision Requested
- Finalizing
- Final File Ready
- Completed
- Cancelled

---

30. NEW ORDER / CASE CREATION

This is one of the most important parts of the entire application.

The interface should be inspired by professional dental CAD software workflows.

However:

DO NOT COPY EXOCAD'S INTERFACE PIXEL-FOR-PIXEL.

Use the workflow concepts and information architecture as inspiration, but create an original interface.

Do not copy:

- proprietary artwork
- exact screenshots
- logos
- proprietary icons
- exact layout
- copyrighted UI assets

The result should feel familiar to professional exocad users while being clearly an original design.

---

31. ORDER BUILDER STRUCTURE

The order builder should be divided into logical sections:

Step 1 — Patient / Case Information

Step 2 — Tooth Selection

Step 3 — Restoration Type

Step 4 — Implant / Abutment Configuration

Step 5 — Bridge / Connection Configuration

Step 6 — Milling Parameters

Step 7 — Notes

Step 8 — Scan File Upload

Step 9 — Review & Submit

However, the interface should preferably allow the user to see the main configuration in one professional workspace rather than forcing excessive page reloads.

---

32. TOOTH NUMBERING

Use:

FDI / World Dental Federation tooth numbering

Do NOT use random tooth numbering.

The tooth selector must represent the complete permanent dentition.

Examples:

- 11
- 12
- 13
- 14
- ...
- 21
- 22
- ...
- 31
- ...
- 41
- ...

The interface must visually distinguish:

- upper right
- upper left
- lower left
- lower right

The numbering must be correct.

---

33. TOOTH SELECTION UI

Create an interactive dental arch/tooth selector.

The user should be able to click a tooth.

When selected:

- Highlight tooth
- Show configuration panel
- Display tooth number
- Display restoration type
- Display relevant options

Allow selecting multiple teeth.

The UI should look like professional dental CAD software but must be an original design.

---

34. RESTORATION TYPES

When a tooth is selected, provide restoration types including:

- Anatomical Crown
- Capping
- Pressed Crown
- Mockup
- Offset Capping
- Anatomic Crown
- Reduced Pontic
- Pressed Pontic
- Offset Inlay
- Veneer
- Anatomic Wax-up
- Reduced Wax-up
- Pontic Wax-up

The exact service list must be configurable.

Use clean searchable/selectable cards rather than an enormous dropdown where appropriate.

---

35. PONTIC / PREPARATION / IMPLANT STATUS

For each selected tooth, allow the professional to define the tooth role/type.

Examples:

- Prepared Tooth
- Pontic
- Implant
- Laminate / Veneer
- Other

If:

Implant

is selected, reveal implant-related configuration.

---

36. CUSTOM ABUTMENT

Allow:

Custom Abutment

configuration.

Options should include:

- Custom Abutment
- Screw-Retained
- Other supported configuration

The exact options must be configurable by admin.

---

37. SCREW RETAINER

Allow:

Screw Retainer / Screw-Retained

configuration where applicable.

Do not show irrelevant options when the selected restoration does not support them.

The form must be context-aware.

---

38. OTHER CAD PARAMETERS

The interface should support configurable dental CAD parameters such as:

- Margin-related options
- Scanbody-related information
- Scan settings
- Implant configuration
- Abutment configuration
- Other restoration-specific parameters

The administrator should be able to define which parameters appear for each service.

---

39. BRIDGE / SPLINT CONNECTION

One very important feature:

Between adjacent selected teeth, display a visual connection control.

The control should clearly show whether two adjacent units are:

Connected

or

Separate

Use a visual indicator inspired by the concept of the green connection marker used in professional dental CAD workflows.

However, create an original UI.

Example:

"11 [CONNECTED] 12"

or

"11 [SEPARATE] 12"

The user should be able to toggle this.

This determines whether the selected units are intended as:

- Bridge / splinted
- Separate restorations

The connection state must be stored with the order.

---

40. MILLING PARAMETERS

This is a critical requirement.

The doctor must specify the milling-related parameters required by the production workflow.

At minimum provide fields for:

Gap

Frame Margin

These values should be entered explicitly.

Use appropriate numeric fields.

Allow unit configuration such as:

mm

The system must validate the values.

---

41. IMPORTANT SUBMISSION RULE

NEVER silently insert a default value for:

- Gap
- Frame Margin

if the customer has not supplied the required values.

If these values are required for the selected order:

The order must NOT be submitted until the customer enters them.

Display a clear warning:

Gap and Frame Margin are required before this case can be submitted.

This requirement is critical.

Do not invent values.

Do not assume standard milling parameters.

Do not automatically use a hidden default.

---

42. NOTES

The order builder must include a large professional:

Doctor's Notes

field.

It should be easy to find.

Allow the doctor to write:

- special instructions
- design preferences
- patient-specific information
- milling instructions
- aesthetic requirements
- communication notes

Show a character counter.

Store notes securely with the case.

---

43. ORDER SUMMARY

Before submission, show a complete review screen.

Display:

- Customer ID
- Case number
- Selected teeth
- Restoration types
- Pontics
- Implants
- Abutments
- Screw-retained configuration
- Bridge connections
- Gap
- Frame Margin
- Notes
- Uploaded file
- Estimated price
- Available balance
- Bonus units if applicable

Then show:

Submit Case

---

44. PRICE CALCULATION

The system must calculate the price dynamically.

Example:

Tooth 11 — Crown — "$X"

Tooth 12 — Crown — "$X"

Tooth 13 — Pontic — "$X"

Total:

"$XXX"

The actual prices must come from the database.

The admin must be able to configure the pricing rules.

---

45. BALANCE CHECK

Before submitting:

Check whether:

Available credit >= order price

If sufficient:

Allow submission.

If insufficient:

Show:

Insufficient balance

with a button:

Add Credit

Do not allow the case to be submitted without sufficient available credit unless the administrator explicitly enables another payment/approval workflow.

---

46. WHEN TO DEDUCT CREDIT

When the order is successfully submitted and accepted by the system:

Deduct the required amount from the customer's wallet.

Create a transaction record.

Do not deduct twice if the page is refreshed.

Use idempotency protection.

---

47. FILE UPLOAD

After completing the case configuration, the customer must upload the dental scan.

The primary expected format is:

ZIP

The ZIP may contain files generated by an intraoral scanner or dental scanning workflow.

Potential file types inside ZIP:

- STL
- PLY
- OBJ
- scanner-specific files
- supporting files

Do not assume the ZIP structure.

Store the original uploaded ZIP unchanged.

---

48. SECURE FILE STORAGE

Customer files are highly sensitive business/patient-related data.

Use:

- Private storage
- Signed temporary download URLs
- Access control
- User-specific authorization
- Order-specific authorization

A customer must NEVER be able to access another customer's file by modifying an URL.

Do not expose raw storage paths publicly.

---

49. UPLOAD EXPERIENCE

The upload area should be premium.

Support:

- drag & drop
- browse files
- upload progress
- file size validation
- format validation
- success state
- error state

Display:

Your scan file has been securely uploaded.

Allow removal/replacement before final submission.

---

50. ORDER STATUS SYSTEM

Every case needs a status workflow.

Initial suggested statuses:

 1. Draft
 2. Submitted
 3. Under Review
 4. Files Received
 5. In Design Queue
 6. In Design
 7. Preview Ready
 8. Awaiting Client Feedback
 9. Revision Requested
10. Revision In Progress
11. Finalizing
12. Final File Ready
13. Completed
14. Cancelled

The admin must be able to advance the case.

---

51. ADMIN STATUS CONTROL

For every case, the admin should see a timeline.

Example:

"✓ Submitted"

"✓ Under Review"

"✓ Files Received"

"✓ In Design Queue"

"● In Design"

"○ Preview Ready"

"○ Completed"

Admin can click:

Mark as In Design

or

Mark Preview Ready

etc.

The customer sees the same timeline, but only customer-appropriate information.

---

52. DESIGN QUEUE

Create an internal admin/design-team queue.

Display:

- Case number
- Customer
- Order date
- Priority
- Services
- Tooth count
- Current designer
- Status
- Deadline
- Last update

Allow admin to assign cases to designers.

---

53. CASE ASSIGNMENT

Allow internal administrators to assign a case to:

- Designer
- Team member

Store:

- Assigned designer
- Assignment date
- Internal notes

Customer should not see internal notes.

---

54. HTML PREVIEW DELIVERY

The design team will initially provide an:

HTML preview/design file

to the customer.

The admin must be able to upload an HTML preview file/package to the case.

The customer should receive:

- in-dashboard notification
- email notification

The case status changes to:

Preview Ready / Awaiting Client Feedback

---

55. CUSTOMER PREVIEW RESPONSE

Customer should have two primary actions:

Approve

Request Revision

If approved:

Move case toward finalization.

If revision requested:

Allow customer to enter a message describing requested changes.

The revision request becomes part of the case history.

---

56. FINAL FILE DELIVERY

After the design is completed, admin can upload:

- PDF
- STL
- ZIP
- other supported CAD files

The customer can download the final file securely.

The case becomes:

Completed

or:

Final File Ready

depending on the workflow.

---

57. CASE-SPECIFIC CHAT

Every case must have its own independent chat.

This is extremely important.

Example:

Case:

"26-0-36-12"

has:

Chat: Case 12

Case:

"26-0-36-13"

has:

Chat: Case 13

Messages must NEVER mix between cases.

---

58. CHAT FEATURES

Each case chat should support:

- Customer messages
- Admin/designer messages
- Timestamp
- Read/unread status
- File attachment
- Message notifications
- Optional internal/admin-only notes

The customer must only see customer-visible messages.

Admin can see:

- Customer messages
- Internal notes

Internal notes must NEVER be visible to the customer.

---

59. CHAT UI

Design the chat as a premium modern conversation panel.

Use:

- glass surfaces
- subtle borders
- message bubbles
- timestamps
- attachment cards
- unread indicator
- typing/loading state if realtime is implemented

Do not make it look like an old support-ticket system.

---

60. EMAIL NOTIFICATIONS

Whenever an important case event occurs, send an email.

Examples:

New Preview

"Your CAD preview is ready."

New Message

"You have a new message regarding Case 26-0-36-12."

Final File

"Your final design file is ready."

Status Change

"Your case has entered the design queue."

The emails should be professional and branded.

Do not send unnecessary emails for every tiny event.

Allow notification preferences.

---

61. EMAIL NOTIFICATION ARCHITECTURE

Create a reusable notification service.

Events:

- Account Created
- Email Verification
- Password Reset
- Deposit Confirmed
- Bonus Received
- Case Submitted
- Case Status Changed
- New Case Message
- Preview Uploaded
- Revision Requested
- Final File Uploaded
- Case Completed

Use a proper transactional email provider.

Keep provider credentials in environment variables.

---

62. CUSTOMER NOTIFICATION CENTER

In addition to email, create an in-app notification center.

Display:

- unread count
- notification list
- timestamp
- related case
- mark as read
- mark all as read

---

63. ADMIN DASHBOARD

The admin panel is essential.

It should contain:

Overview

- Total customers
- Active cases
- Cases in design
- Completed cases
- Revenue
- Wallet deposits
- Pending payments
- Unread messages

Customers

- Customer list
- Search
- Filters
- Customer details
- Balance
- Transaction history
- Cases

Cases

- All cases
- Search
- Filter
- Status
- Designer
- Customer
- Date

Payments

- Deposits
- Payment status
- Provider
- Transaction ID
- Amount

Pricing

- Services
- Prices
- Discounts
- Promotions

Team

- Team members
- Roles
- Profiles

Content

- Homepage
- Services
- Promotional banners
- Images
- Videos

Settings

- Company information
- Payment settings
- Crypto discount
- Bonus system
- Currency
- Email settings
- Notification settings

---

64. ADMIN CUSTOMER VIEW

When an admin opens a customer:

Show:

- Customer ID
- Name
- Company
- Email
- Phone
- Country
- Account creation date
- Wallet balance
- Bonus units
- Total deposits
- Total orders
- Active orders
- Completed orders

Allow authorized admins to:

- Add manual credit
- Remove credit
- Add bonus units
- Disable account
- View transactions
- View cases

Every manual financial adjustment must create an audit record.

---

65. ADMIN CASE VIEW

A case detail page should contain:

Customer information

Case configuration

Tooth chart

Restoration information

Implant information

Bridge connections

Gap

Frame Margin

Doctor notes

Uploaded files

Chat

Status timeline

Assigned designer

Internal notes

Billing information

Preview files

Final files

Everything should be accessible from one professional workspace.

---

66. AUDIT LOG

Create an audit log.

Track important actions such as:

- Login
- Account creation
- Wallet adjustment
- Payment confirmation
- Case creation
- Case status change
- File upload
- File deletion
- File download
- Admin changes
- Pricing changes

Store:

- user/admin
- action
- timestamp
- relevant object
- metadata

---

67. RESPONSIVE DESIGN

The entire platform must work on:

- Desktop
- Laptop
- Tablet
- Mobile

The order builder is especially important.

On desktop:

Use a sophisticated multi-panel workspace.

Possible layout:

LEFT:

Tooth chart / case navigation

CENTER:

Selected tooth / configuration

RIGHT:

Order summary / parameters

On mobile:

Convert this into stacked sections or drawers.

Do not simply shrink the desktop interface.

---

68. ORDER BUILDER DESKTOP UX

Recommended layout:

Left Panel

Patient/case navigation and tooth chart.

Center Panel

Selected tooth configuration.

Right Panel

Case summary + price + required parameters.

Bottom/Side

Doctor Notes and file upload.

Use sticky panels where appropriate.

---

69. TOOTH VISUALIZATION

Create an original interactive dental arch.

It should visually resemble a professional dental CAD tooth map.

Use CSS/SVG/custom vector shapes.

Do NOT copy proprietary exocad graphics.

Tooth numbers should be clearly displayed.

Selected teeth glow subtly.

Connected teeth display a bridge connection indicator.

---

70. EXOCAD-INSPIRED DESIGN PRINCIPLE

The customer experience should feel familiar to professionals who use exocad.

However:

This platform is NOT exocad.

Do not claim affiliation with exocad.

Do not use exocad's logo unless properly authorized.

Do not copy proprietary UI.

Use an original design inspired by professional CAD software workflows.

---

71. MOTION DESIGN

Use Framer Motion.

Animations should include:

- page transitions
- fade-in
- slide-up
- subtle scale
- hover interactions
- navbar blur
- card hover
- gallery expansion
- tooth selection animation
- progress timeline animation
- upload progress
- modal transitions

Do not animate every element.

---

72. HERO SCROLL EFFECT

Use a sophisticated scroll-based effect.

Possible structure:

A large dental CAD visual begins as a wireframe/scanned model.

As the user scrolls:

- scan lines move
- wireframe transitions toward realistic rendering
- technical labels appear
- CAD geometry becomes more detailed

This replaces the generic city example from the original inspiration.

The original inspiration used:

- outline city
- realistic city reveal

For this website, reinterpret that concept as:

Dental CAD wireframe → realistic dental restoration

Do NOT copy the original website.

---

73. INFINITE TICKER

Create a subtle horizontal ticker for:

- Digital Dentistry
- Dental CAD
- exocad Workflow
- 3Shape Workflow
- CAD/CAM
- Implant Design
- Crown Design
- Bridge Design
- Orthodontics
- Clear Aligners

Use smooth infinite animation.

---

74. WORK / PORTFOLIO SECTION

Create an interactive expanding gallery.

Instead of the generic agency examples, use:

- Crown
- Bridge
- Implant
- Veneer
- Clear Aligner
- Orthodontic CAD
- Digital Wax-Up

Each item can contain:

- image
- title
- short description

On hover:

- image subtly scales
- information appears
- panel expands

---

75. IMAGE GENERATION

Where no real company image exists, the system/design should allow AI-generated placeholder imagery.

Preferred image style:

- premium dental photography
- realistic 3D dental CAD
- dark studio
- blue/purple technical lighting
- clean professional dental models
- high detail
- no fake patient identity
- no unnecessary people

Admin must be able to replace generated images with real company images.

---

76. VIDEO / ANIMATION

Use short animations where they improve understanding.

Possible videos:

- CAD design process
- Digital scan
- Tooth modeling
- Milling preparation
- Orthodontic/aligner workflow

Keep video usage limited.

Use lazy loading.

Do not make the website heavy.

---

77. ORTHODONTIC / ALIGNER EMPHASIS

The website should prominently communicate that the team can work with orthodontic and clear-aligner-related digital workflows.

Create a dedicated visual area for:

Orthodontics & Clear Aligners

Use:

- digital dental arches
- transparent aligner visuals
- scan-to-design animation
- tooth movement visualization

This should be one of the strongest visual sections of the website.

---

78. SERVICES PAGE

Create a detailed services page.

Each service should include:

- visual
- description
- workflow
- typical input
- expected output
- CTA

Do not make unsupported claims about turnaround times unless configured by admin.

---

79. PRICING UX

The pricing page should have:

Service Pricing

Credit Packages

Payment Methods

Crypto Promotion

First Deposit Bonus

FAQ

Make Crypto visually prominent but professional.

Do not make the page look like a cryptocurrency website.

The primary identity remains:

Dental CAD

---

80. CREDIT PACKAGE UI

Example visual:

Add Credit

$50

$100

$200

$500

Custom Amount

Show applicable first-deposit bonus.

Do not hard-code these amounts.

Allow admin to configure packages.

---

81. CHECKOUT

Checkout must clearly display:

- Amount
- Payment method
- Crypto discount if applicable
- Final payment amount
- Account credit received
- Bonus units
- Terms

Example:

Deposit:

"$100"

Crypto discount:

"15%"

Payment:

"$85"

Wallet credit:

"$100"

Bonus:

"3 free units"

Make this logic transparent to the customer.

---

82. PAYMENT SAFETY

Do not collect raw card information in your own database.

Use:

- Stripe or another appropriate PCI-compliant provider
- PayPal official checkout
- Secure crypto provider

Never store:

- card number
- CVV
- private crypto keys

Use webhook verification for payment confirmation.

Never trust a client-side "payment successful" message.

---

83. DATABASE MODEL

Create a proper relational database.

Suggested tables/entities:

users

- id
- customer_id
- first_name
- last_name
- company_name
- email
- phone
- country
- account_type
- password/auth reference
- created_at
- updated_at
- status

customer_sequences

For safe customer numbering.

orders

- id
- order_number
- customer_id
- status
- total_price
- currency
- assigned_designer
- notes
- created_at
- updated_at

order_teeth

- id
- order_id
- tooth_number
- restoration_type
- tooth_role
- implant_status
- abutment_type
- screw_retained
- pontic
- connection_group

bridge_connections

- id
- order_id
- tooth_a
- tooth_b
- connected

milling_parameters

- id
- order_id
- gap
- frame_margin
- unit

order_files

- id
- order_id
- file_type
- original_name
- storage_key
- size
- uploaded_by
- created_at

messages

- id
- order_id
- sender_id
- message
- visibility
- created_at

transactions

- id
- user_id
- type
- amount
- currency
- payment_method
- payment_reference
- order_id
- status
- created_at

bonus_units

- id
- user_id
- amount
- source
- expiration
- created_at

notifications

- id
- user_id
- order_id
- type
- title
- body
- read
- created_at

team_members

services

pricing

promotional_banners

payment_methods

settings

audit_logs

Use appropriate foreign keys and indexes.

---

84. SECURITY

Security is extremely important.

Implement:

- authentication
- authorization
- role-based access control
- secure sessions
- CSRF protection where applicable
- input validation
- server-side validation
- rate limiting
- file type validation
- file size limits
- private storage
- signed URLs
- secure headers
- SQL injection prevention
- XSS protection
- webhook signature verification
- audit logs

Roles:

Customer

Can only access their own:

- profile
- wallet
- orders
- files
- messages
- notifications

Designer

Can access assigned cases and permitted design functions.

Admin

Can manage the platform.

Super Admin

Can manage administrators and critical settings.

---

85. PATIENT DATA / PRIVACY

Because dental scan files can potentially contain patient-related information, treat uploaded files as sensitive.

The platform should:

- minimize exposed patient information
- restrict access
- use private storage
- use secure transfers
- avoid displaying files publicly
- avoid putting sensitive information into URLs
- maintain access logs

Do not claim HIPAA/GDPR compliance automatically.

Instead, architect the system with privacy/security best practices and leave legal compliance configuration/documentation to the company.

---

86. SEO

Every public page must have:

- title
- description
- Open Graph metadata
- appropriate canonical URL
- semantic HTML

Use only one H1 per page.

Use:

- H1
- H2
- H3

appropriately.

Add meaningful image alt text.

---

87. ACCESSIBILITY

Support:

- keyboard navigation
- focus states
- sufficient contrast
- accessible form labels
- accessible dialogs
- aria labels
- accessible buttons
- screen-reader-friendly status information

Do not rely exclusively on color to communicate status.

---

88. PERFORMANCE

The site must be visually advanced but fast.

Use:

- lazy loading
- optimized images
- WebP/AVIF
- dynamic imports
- code splitting
- optimized animations
- reduced-motion support
- compressed assets
- efficient database queries

Do not load huge videos automatically.

Do not animate off-screen components unnecessarily.

---

89. REDUCED MOTION

Respect:

"prefers-reduced-motion"

When enabled:

- reduce parallax
- reduce scroll animation
- disable excessive transitions
- keep functional interactions intact

---

90. ERROR HANDLING

Every important operation needs clear states:

- Loading
- Success
- Error
- Empty
- Unauthorized
- Forbidden
- Not Found

Example:

Upload error:

We couldn't upload this file. Please check the file format and try again.

Do not expose raw server errors to customers.

---

91. FORM VALIDATION

Use both:

Client-side validation

for immediate UX.

and

Server-side validation

for security.

Never trust client-side validation.

---

92. CASE SUBMISSION VALIDATION

Before submission verify:

- Customer authenticated
- Required tooth configuration complete
- Required restoration type selected
- Required bridge connections configured
- Required implant options configured
- Gap entered
- Frame Margin entered
- Notes processed
- Required scan uploaded
- Sufficient balance
- Case price calculated server-side

Only then create the order.

---

93. PRICE CALCULATION SECURITY

The frontend must NEVER be trusted for final pricing.

The server must recalculate the order price based on:

- services
- teeth
- restoration types
- options
- pricing rules

Then compare with displayed client price.

The final charge must always come from server-side calculation.

---

94. ADMIN CONTENT MANAGEMENT

The admin must be able to modify:

- Logo
- Company name
- Hero text
- About text
- Contact information
- Team members
- Services
- Service images
- Prices
- Promotions
- Payment methods
- Crypto discount
- Bonus rules
- Homepage announcements
- Footer information
- Social links

Avoid requiring code changes for normal content editing.

---

95. HOME PAGE STRUCTURE

Recommended final Home structure:

 1. Floating Navbar
 2. Hero
 3. Announcement / Promotional Ticker
 4. Digital Dentistry Introduction
 5. Services
 6. Interactive CAD Work Gallery
 7. Our Workflow
 8. Orthodontics / Clear Aligners
 9. Why Work With Us
10. Team Preview
11. Pricing / Credit CTA
12. Final CTA
13. Footer

---

96. WORKFLOW SECTION

Create a visually impressive four/five-step workflow:

01

Upload Scan

02

Configure Case

03

CAD Design

04

Review & Revision

05

Receive Final File

Use a visual timeline.

---

97. TEAM SECTION ON HOME

Show a small preview of the team.

Example:

- Team member image
- Name
- Role

CTA:

Meet the Team

which links to About Us.

The admin can upload/change these images.

---

98. FINAL CTA

Use a strong final section.

Example:

Ready to send your next case?

Subtext:

Upload your scan, configure the restoration and let our CAD team handle the design.

Button:

Start a Case

Secondary:

View Pricing

---

99. FOOTER

Footer should contain:

Brand

Company description.

Navigation

- Home
- Services
- Pricing
- About
- Contact

Customer

- Sign In
- Create Account
- Dashboard
- Start a Case

Legal

- Privacy Policy
- Terms of Service

Contact

Editable company information.

---

100. VISUAL STYLE OF DASHBOARD

The public website and dashboard must feel like the same product.

Do not create:

"beautiful homepage + ugly generic dashboard"

The dashboard should maintain:

- midnight background
- glass cards
- neon accents
- premium typography
- subtle animations

But dashboard UI should prioritize usability over decorative animation.

---

101. ORDER DASHBOARD UX

When customer opens a case:

Top:

"Case 26-0-36-12"

Status:

In Design

Then:

Progress Timeline

Submitted ✓

Review ✓

Design Queue ✓

In Design ●

Preview ○

Final ○

Below:

Two-column layout:

Left:

Case configuration

Right:

Chat

Bottom:

Files

---

102. FILE SECTION

Show files as professional cards.

Example:

[DentalScan.zip](http://DentalScan.zip)

Type: Scan

Size: 48 MB

Uploaded: Sep 28, 2026

Status: Secure

Button:

Download

For preview:

CAD Preview.html

For final:

Final [Design.zip](http://Design.zip)

Do not expose raw storage URLs.

---

103. CASE CHAT + FILES

The customer should be able to communicate without leaving the case.

Example:

CASE 26-0-36-12

[Progress]

[Case Details]

[Files]

[Conversation]

Doctor:\
Please reduce the incisal edge slightly.

Designer:\
Understood. We will revise the design.

[Attach File]\
[Type Message...]\
[Send]

---

104. ADMIN DESIGN WORKSPACE

The admin/designer workspace should allow:

- Open case
- Download scan
- View order configuration
- Chat with customer
- Upload preview
- Request clarification
- Change status
- Upload final
- Add internal notes

---

105. CUSTOMER EXPERIENCE

The customer should never need to understand the technical backend.

The UI should always clearly answer:

1. What did I order?
2. What is the status?
3. What do you need from me?
4. What do I need to download?
5. How much credit do I have?
6. What should I do next?

---

106. EMPTY STATES

Examples:

No cases:

No cases yet.

Your next case starts here.

Button:

Start a Case

No messages:

No messages yet.

No files:

No files have been uploaded yet.

---

107. NOTIFICATION STYLE

Notifications should be subtle.

Do not cover the whole screen.

For example:

Top-right:

Preview Ready

Your CAD preview for Case 26-0-36-12 is ready for review.

[Open Case]

---

108. ORIGINALITY / COPYRIGHT

This requirement is extremely important.

The visual inspiration may come from:

- modern digital agency websites
- premium SaaS websites
- professional CAD software
- modern healthcare technology websites

But do not directly copy any website.

Do not copy:

- proprietary images
- proprietary logos
- exact layouts
- exact UI
- proprietary icons
- source code
- brand-specific artwork

Create an original design system.

For exocad-inspired functionality, reproduce the general professional workflow and concepts but create an independent interface.

---

109. ANIMATION PERFORMANCE

Animations should use:

- transform
- opacity
- clip-path where appropriate

Avoid excessive:

- layout thrashing
- huge blur effects
- continuous expensive DOM calculations

Use Framer Motion responsibly.

Use:

"viewport={{ once: true }}"

for normal entrance animations.

---

110. SAMPLE HERO ANIMATION

Create a dental CAD model with:

- wireframe layer
- realistic layer
- scanning line
- technical coordinates
- subtle floating labels

On scroll:

wireframe gradually transitions to finished restoration.

This should communicate:

Scan → Design → Final

without requiring text to explain everything.

---

111. INTERACTIVE TOOTH CONFIGURATION VISUAL

The order builder should feel like a serious professional tool.

Example:

~~~
      UPPER ARCH

   11 12 13 14 15 16 17 18
   21 22 23 24 25 26 27 28

   -------------------------

   48 47 46 45 44 43 42 41
   38 37 36 35 34 33 32 31

      LOWER ARCH
~~~

However, implement a visually accurate FDI dental arrangement rather than this simple text representation.

The UI must visually resemble dental arches.

---

112. CASE BUILDER INTERACTION EXAMPLE

When doctor clicks:

11

Display:

TOOTH 11

Restoration\
[ Anatomical Crown ]

Role\
[ Prepared Tooth ]

Implant\
[ No ]

Abutment\
[ None ]

Connection\
[ Separate ]

Gap\
[ Required ]

Frame Margin\
[ Required ]

When doctor selects:

Implant

reveal implant-specific options.

When doctor selects:

Bridge

show connection controls.

The interface must be context-sensitive.

---

113. MULTIPLE TOOTH SELECTION

If multiple teeth are selected:

Show:

3 Units Selected

Then allow:

- apply same restoration type to all
- edit individually

Do not overwrite individual configurations accidentally.

Provide confirmation when bulk-editing could destroy existing settings.

---

114. ORDER DRAFTS

Allow customers to save an incomplete order as:

Draft

A draft should NOT:

- charge credit
- become visible as submitted
- start the production workflow

Customer can return later and continue.

---

115. CASE REVISION SYSTEM

When customer requests revision:

Create a revision event.

Example:

Revision #1

Customer request:

"Please modify..."

Designer uploads new preview.

Customer approves.

Maintain revision history.

Do not overwrite old files without preserving the history.

---

116. VERSIONED FILES

Files should support versions.

Example:

Preview v1

Preview v2

Final v1

Final v2

Store timestamps and uploader.

The customer can see the relevant versions.

---

117. SEARCH

Admin should be able to search:

- customer ID
- order number
- customer name
- email
- company
- status

Customer should be able to search their own cases.

---

118. FILTERS

Admin filters:

- status
- date
- designer
- customer
- service
- payment status

Customer filters:

- active
- completed
- cancelled
- date

---

119. MOBILE ORDER BUILDER

On mobile:

Use:

Step indicator

1. Teeth
2. Restoration
3. Parameters
4. Notes
5. Upload
6. Review

Allow users to move backward and forward.

Do not make the mobile experience impossible because of the complex tooth selector.

---

120. MOBILE CHAT

Chat should behave like a modern messaging application.

Attachments must work.

Messages should update without requiring a full page reload when realtime is available.

---

121. RESPONSIVE ADMIN PANEL

Admin panel should work on desktop first but remain usable on tablet/mobile.

Complex data tables should become:

- cards
- horizontal scrolling
- responsive stacked layouts

on smaller screens.

---

122. DESIGN SYSTEM COMPONENTS

Create reusable components such as:

- Button
- Input
- Select
- Modal
- Drawer
- Toast
- Badge
- Card
- Tabs
- Tooltip
- Dropdown
- FileUploader
- ProgressBar
- Timeline
- ToothSelector
- StatusBadge
- CurrencySelector
- WalletCard
- TransactionList
- ChatPanel
- FileCard
- ServiceCard

Do not duplicate UI code unnecessarily.

---

123. PROJECT STRUCTURE

Use a clean structure similar to:

src/\
app/\
page.tsx\
about/\
contact/\
pricing/\
signin/\
signup/\
dashboard/\
cases/\
wallet/\
profile/\
admin/

components/\
navigation/\
hero/\
marketing/\
dental/\
order/\
dashboard/\
chat/\
wallet/\
payments/\
admin/\
common/

lib/\
auth/\
database/\
payments/\
storage/\
email/\
pricing/\
orders/\
notifications/

types/\
hooks/\
utils/

Adapt structure according to the selected framework.

---

124. ENVIRONMENT VARIABLES

All secrets must be environment variables.

Examples:

DATABASE_URL=\
AUTH_SECRET=\
STORAGE_URL=\
STORAGE_ACCESS_KEY=\
STORAGE_SECRET_KEY=

PAYMENT_PROVIDER_KEY=\
PAYMENT_WEBHOOK_SECRET=

PAYPAL_CLIENT_ID=\
PAYPAL_CLIENT_SECRET=

CRYPTO_PAYMENT_API_KEY=

EMAIL_API_KEY=\
EMAIL_FROM=

Never commit secrets.

---

125. CONFIGURATION SYSTEM

Create centralized configuration for:

- Company name
- Logo
- Colors
- Contact
- Social links
- Currency
- Payment methods
- Crypto discount
- Bonus rules
- Services
- Pricing

Admin-editable values should live in the database where appropriate.

---

126. INITIAL SEED DATA

Create realistic placeholder data for development.

Include:

- sample services
- sample prices
- sample team members
- sample promotional banners
- sample admin user instructions
- sample customer
- sample orders

Clearly mark development/demo data.

Do not use fake data in production automatically.

---

127. ADMIN ROLE CREATION

Do not expose an "admin signup" button publicly.

Admin accounts must be created securely.

---

128. PAYMENT WEBHOOKS

Payment confirmation must be handled server-side.

Workflow:

Payment Provider

↓

Webhook

↓

Verify Signature

↓

Check Payment Status

↓

Create Transaction

↓

Credit Wallet

↓

Apply Eligible Bonus

↓

Send Notification

Never credit the wallet based only on frontend redirect.

---

129. IDEMPOTENCY

All financial and case-creation operations must be idempotent.

For example:

If user clicks:

Submit Case

three times because of a slow internet connection:

Create only one case.

Charge only once.

---

130. DATABASE TRANSACTIONS

Financial operations should use database transactions.

Example:

Deposit confirmation:

1. Verify payment.
2. Check whether transaction already processed.
3. Create transaction.
4. Update wallet ledger.
5. Apply bonus if eligible.
6. Commit.
7. Send notification.

---

131. ACCESS CONTROL

Every server-side request must verify ownership.

For example:

Customer A requests:

"/cases/CASE123"

Server checks:

Does CASE123 belong to Customer A?

If not:

Return unauthorized/forbidden.

Never rely on hiding buttons in frontend.

---

132. CUSTOMER PROFILE

Allow customer to edit:

- Name
- Company
- Phone
- Country
- Password
- Notification preferences

Customer ID should NOT be editable.

---

133. ACCOUNT BALANCE HEADER

On dashboard, always display:

Available Balance

Example:

"$245.00"

Also show:

Bonus Units

"8"

Make the distinction extremely clear.

---

134. TRANSACTION HISTORY

Customer can view:

Date| Type| Amount| Status\
...| Deposit| +$100| Completed\
...| Case Charge| -$35| Completed\
...| Bonus| +3 units| Completed

Do not mix cash and units in a confusing way.

---

135. PRICING TRANSPARENCY

Before submitting a case, always display:

Total Case Price

and:

Balance After Order

Example:

Current balance:

"$150"

Case:

"$45"

After submission:

"$105"

This should be calculated server-side.

---

136. FINAL CUSTOMER JOURNEY

The complete journey should be:

Step 1

Visit Home.

Step 2

Explore services.

Step 3

View pricing.

Step 4

Create account.

Step 5

Receive Customer ID.

Step 6

Deposit credit.

Step 7

Receive eligible bonus.

Step 8

Click Start a Case.

Step 9

Select teeth using FDI numbering.

Step 10

Configure restoration.

Step 11

Configure bridge connections.

Step 12

Configure implant/abutment options.

Step 13

Enter Gap.

Step 14

Enter Frame Margin.

Step 15

Enter notes.

Step 16

Upload ZIP scan.

Step 17

Review order.

Step 18

Submit.

Step 19

Credit is deducted.

Step 20

Case enters review/design workflow.

Step 21

Customer follows status.

Step 22

Designer uploads HTML preview.

Step 23

Customer receives email.

Step 24

Customer approves or requests revision.

Step 25

Designer completes final design.

Step 26

Final file is uploaded.

Step 27

Customer receives email.

Step 28

Customer downloads final file.

Step 29

Case becomes Completed.

---

137. DESIGN QUALITY BAR

The final website must look like a premium international technology company.

Target feeling:

"This is a serious professional digital dentistry platform."

Not:

"This is a basic dental lab website."

Use high-quality:

- spacing
- typography
- composition
- motion
- imagery
- transitions
- micro-interactions

---

138. IMPORTANT: DO NOT OVERDESIGN

Premium does not mean:

- excessive neon
- excessive animation
- excessive blur
- giant text everywhere
- random 3D objects
- endless scrolling effects

Use restraint.

The order builder and dashboard must prioritize usability.

Marketing pages can be more cinematic.

Application pages should be more functional.

---

139. ORIGINAL DIGITAL AGENCY-STYLE INSPIRATION

Use the following design principles from premium digital-agency websites:

- deep midnight background
- floating pill navbar
- glassmorphism
- scroll-based hero
- expanding portfolio cards
- infinite ticker
- strong typography
- subtle neon accents
- Framer Motion
- premium hover interactions
- responsive layouts
- cinematic sections

But reinterpret every element specifically for:

Digital Dentistry / Dental CAD / CAD-CAM

Do not reproduce another company's site.

---

140. EXAMPLE HOME HEADLINES

Use these as inspiration, not mandatory final copy:

Hero

Precision Designed for Digital Dentistry.

Secondary

From Scan to Milling-Ready Design.

Services

Digital Dental Design, Built Around Your Workflow.

Process

Scan. Design. Review. Deliver.

CTA

Send Your Next Case.

The copy must remain editable.

---

141. MICRO-INTERACTIONS

Use subtle interactions such as:

- button hover glow
- cursor-following gradient
- tooth selection glow
- bridge connection animation
- wallet balance number animation
- status transition
- upload progress
- message send animation
- notification slide-in
- image parallax

Do not use distracting effects.

---

142. LOADING STATES

Create professional skeleton loaders for:

- dashboard
- cases
- chat
- pricing
- team
- files

For tooth configuration, show a small professional loading state rather than a generic spinner whenever possible.

---

143. 404 PAGE

Create a branded 404 page.

Example:

This case doesn't exist.

or:

This page has moved.

CTA:

Return to Dashboard

or:

Return Home

---

144. AUTH ERROR HANDLING

Examples:

Invalid password:

The email or password is incorrect.

Expired reset link:

This password-reset link has expired.

Unauthorized:

You don't have permission to access this case.

Never expose technical backend information.

---

145. FILE VALIDATION

Before accepting an upload:

Check:

- file extension
- MIME type
- file size
- upload integrity

Do not trust the filename extension alone.

Scan uploaded files using appropriate infrastructure where possible.

---

146. ADMIN FILE DOWNLOAD

When an admin downloads a customer scan:

Log:

- admin
- file
- order
- timestamp

This is part of the audit system.

---

147. CONTENT MANAGEMENT

All marketing content should be structured so it can eventually be managed without modifying source code.

This includes:

- hero
- services
- team
- announcements
- portfolio
- pricing
- FAQ
- contact information

---

148. FAQ

Include editable FAQ such as:

- How does the service work?
- What scan formats do you accept?
- How do I submit a case?
- How does the credit system work?
- How does crypto payment work?
- How do I receive my final file?
- Can I request revisions?
- How do I communicate with the designer?

Do not make unsupported promises.

---

149. ADMIN SETTINGS

Create a Settings page with sections:

Company

Branding

Pricing

Payments

Crypto

Bonuses

Currencies

Notifications

Email

File Upload

Security

Team

Content

---

150. DEVELOPMENT PRIORITY

Build in this order:

PHASE 1

Foundation:

- project setup
- database
- authentication
- design system
- public pages

PHASE 2

Customer:

- dashboard
- profile
- wallet
- transactions
- payments

PHASE 3

Dental Case Builder:

- tooth selector
- FDI numbering
- restoration configuration
- bridge connection
- implant configuration
- milling parameters
- notes
- pricing

PHASE 4

Files:

- ZIP upload
- secure storage
- preview files
- final files

PHASE 5

Workflow:

- case status
- designer assignment
- revision system
- case timeline

PHASE 6

Communication:

- case chat
- notifications
- email

PHASE 7

Admin:

- customers
- cases
- pricing
- payments
- content
- team
- settings
- audit logs

PHASE 8

Polish:

- animations
- performance
- SEO
- accessibility
- responsive behavior
- security hardening

---

151. DO NOT BUILD EVERYTHING AS ONE GIANT COMPONENT

Use modular architecture.

Do not create:

"App.tsx" with thousands of lines.

Break the system into logical components.

---

152. CODE QUALITY

Use:

- TypeScript strict mode
- reusable components
- typed database models
- validation schemas
- clear naming
- error boundaries where appropriate
- clean separation of concerns

Avoid:

- "any" everywhere
- duplicated logic
- hard-coded prices
- hard-coded customer IDs
- hard-coded balances
- fake authentication
- fake payments
- fake uploads

---

153. DOCUMENTATION

When the implementation is complete, provide:

 1. Project structure
 2. Installation instructions
 3. Environment variables
 4. Database setup
 5. Migration instructions
 6. Admin setup
 7. Payment provider setup
 8. Email setup
 9. Storage setup
10. Deployment instructions

Make the instructions practical and copy-paste friendly.

---

154. DEPLOYMENT

The application should be deployable to a modern server/VPS or compatible cloud environment.

Do not tightly couple it to one hosting provider unless necessary.

Use environment variables.

Provide:

- production build
- database migration
- storage configuration
- email configuration
- payment configuration

---

155. IMPORTANT CONTENT RULE

Where business information is unknown, use editable placeholders.

For example:

"[COMPANY ADDRESS]"

"[PHONE NUMBER]"

"[EMAIL ADDRESS]"

"[FOUNDING YEAR]"

Do NOT invent real company information.

---

156. IMPORTANT PRICING RULE

Where exact prices are unknown, use placeholders or configurable database values.

Do NOT invent final business prices.

---

157. IMPORTANT TEAM RULE

Where team names/photos are unknown:

Use placeholders.

The owner will upload the actual team photos later.

---

158. IMPORTANT IMAGE RULE

The owner will eventually upload real work images.

Therefore:

Create an admin media-management mechanism that allows replacement of:

- hero images
- service images
- team photos
- portfolio images
- promotional banners
- videos

---

159. FINAL PRODUCT EXPECTATION

When finished, the user should be able to:

Customer

Register →

Receive Customer ID →

Add Credit →

Receive Bonus →

Create Case →

Select Teeth →

Configure Restoration →

Configure Bridge →

Configure Implant →

Enter Gap →

Enter Frame Margin →

Write Notes →

Upload ZIP →

Submit →

Track Status →

Chat With Team →

Receive HTML Preview →

Approve / Request Revision →

Receive Final File →

Download Final File.

Admin

Login →

View Dashboard →

View Customer →

View Case →

Download Scan →

Assign Designer →

Change Status →

Chat →

Upload Preview →

Receive Revision Request →

Upload Final File →

Complete Case →

Manage Payments →

Manage Pricing →

Manage Customers →

Manage Team →

Manage Website Content.

---

160. FINAL DESIGN DIRECTIVE

The finished application must feel like:

A premium digital dentistry technology platform created by a world-class product design team.

It should combine:

Dental expertise + CAD technology + premium SaaS UX + futuristic digital design + real production workflow.

The most important priorities are:

 1. Professional dental CAD workflow
 2. Correct FDI tooth numbering
 3. Accurate order configuration
 4. Mandatory Gap and Frame Margin input
 5. Secure scan upload
 6. Credit/wallet system
 7. Crypto payment and configurable discount
 8. First-deposit bonus
 9. Case-specific chat
10. Case status tracking
11. HTML preview workflow
12. Final file delivery
13. Email notifications
14. Strong admin control
15. Security
16. Performance
17. Premium visual design
18. Responsive usability

Do not sacrifice functionality for visual effects.

Do not sacrifice usability for animations.

Do not sacrifice security for convenience.

Do not hard-code business values that should be configurable.

Do not build a fake demo.

Build the foundation as a real scalable product.

---

FINAL INSTRUCTION TO THE AI DEVELOPER

Before writing implementation code:

 1. Analyze the complete specification.
 2. Create the application architecture.
 3. Define the database schema.
 4. Define authentication and authorization.
 5. Define the order lifecycle.
 6. Define wallet/credit logic.
 7. Define payment architecture.
 8. Define file-storage architecture.
 9. Define case chat architecture.
10. Define admin architecture.
11. Define the design system.
12. Define reusable components.

Then implement the application systematically.

If a requirement is ambiguous, choose the architecture that keeps the feature configurable rather than hard-coded.

If an exact price, company address, team member, payment provider or business detail is missing, use an editable placeholder rather than inventing information.

The final result must be production-oriented, modular, secure, responsive, visually premium, and specifically designed for a professional dental CAD service business.
