# Lead Generation Tracking QA

This document outlines the tracking flow, expected parameters, and fallback behaviors for all primary lead sources on TheEduAssist website.

**CRITICAL RULES:**
* **No Sensitive Data:** Do NOT collect, track, or append sensitive data (passwords, bank details, government IDs, medical data, sensitive personal information) to any context payloads or chat integrations.
* **Chat is for Sales Guidance:** Chat tools are used strictly for lead capture and payment/sales guidance. They do NOT represent a final legal agreement or quote.
* **Scope Confirmation:** Final quotes always require scope confirmation using the structured `/book-free-audit/` flow.

---

## 1. Homepage CTA
* **Primary Action:** Click "Talk to Sales" or "Get 24-48 Hour Review"
* **Secondary Action:** Floating right sales widget
* **Tawk Behavior:** Opens chat widget and fires `right_sales_widget_clicked`.
* **Form Fallback:** If Tawk is blocked, redirects to `/book-free-audit/?source=homepage-cta`.
* **Expected Query Params:** `?source=homepage-cta` (on static link).
* **Expected Tawk Tags:** `sales-lead`, `payment-guidance`.
* **Expected Tawk Attributes:** `source_cta: 'homepage-cta'` (or 'right-floating-talk-to-sales'), `lead_intent: 'sales_payment_guidance'`.

## 2. Service Page CTA
* **Primary Action:** Click "Talk to Sales About This Service"
* **Secondary Action:** Click "Submit Project Details"
* **Tawk Behavior:** Opens chat widget and fires `service_sales_chat_started`.
* **Form Fallback:** If Tawk is blocked, redirects to `/book-free-audit/?service=[slug]&source=service-page`.
* **Expected Query Params:** `?service=[slug]&source=service-page` (on static link).
* **Expected Tawk Tags:** `sales-lead`, `service-lead`, `payment-guidance`, `form-fallback`, `[service-slug]`.
* **Expected Tawk Attributes:** `selected_service: [slug]`, `source_cta: 'Start This Service'`, `lead_intent: 'service_inquiry'`.

## 3. Package Card CTA
* **Primary Action:** Click "Start This Package"
* **Secondary Action:** Click "Submit Project Details"
* **Tawk Behavior:** Opens chat widget and fires `package_sales_chat_started`.
* **Form Fallback:** If Tawk is blocked, redirects to `/book-free-audit/?package=[slug]&source=package-card`.
* **Expected Query Params:** `?package=[slug]&source=package-card` (on static link).
* **Expected Tawk Tags:** `sales-lead`, `start-package`, `package-lead`, `payment-guidance`, `form-fallback`, `[package-slug]`.
* **Expected Tawk Attributes:** `selected_package: [slug]`, `package_price`, `source_cta: 'Start This Package'`.

## 4. Blog CTA
* **Primary Action:** Click "Get 24-48 Hour Review" or "Ask how this applies to my project"
* **Tawk Behavior:** Opens chat widget and fires `blog_sales_question_started`.
* **Form Fallback:** If Tawk is blocked, redirects to `/book-free-audit/?source=blog-cta`.
* **Expected Query Params:** `?source=blog-cta` (on static link).
* **Expected Tawk Tags:** `blog-reader`, `sales-lead`, `[category]`.
* **Expected Tawk Attributes:** `content_type: 'blog'`, `content_title`, `source_cta: 'blog-cta'`.

## 5. Case Study CTA
* **Primary Action:** Click "Build Something Similar"
* **Tawk Behavior:** Opens chat widget and fires `case_study_sales_chat_started`.
* **Form Fallback:** If Tawk is blocked, redirects to `/book-free-audit/?source=case-study-cta`.
* **Expected Query Params:** `?source=case-study-cta` (on static link).
* **Expected Tawk Tags:** `case-study-reader`, `sales-lead`.
* **Expected Tawk Attributes:** `content_type: 'case_study'`, `content_title`, `source_cta: 'case-study-cta'`.

## 6. Floating Talk to Sales CTA
* **Primary Action:** Click floating button on bottom right
* **Tawk Behavior:** Opens chat widget and fires `right_sales_widget_clicked`.
* **Form Fallback:** Redirects to `/book-free-audit/?source=right-floating-talk-to-sales`
* **Expected Query Params:** Generally managed via Tawk helper, appending intent if passed.
* **Expected Tawk Tags:** `sales-lead`, `payment-guidance`.
* **Expected Tawk Attributes:** `source_cta: 'right-floating-talk-to-sales'`, `lead_intent: 'sales_payment_guidance'`.

## 7. Contact Page
* **Primary Action:** Form submission or Email Us
* **Form Fallback:** Renders typical Mailto fallback.
* **Expected Query Params:** N/A (Standard contact flow)

## 8. Book Free Audit Page
* **Primary Action:** Submit structured form
* **Behavior:** Renders context card dynamically based on `?package=` or `?service=`.
* **Expected Query Params:** `?package=[slug]`, `?service=[slug]`, `?source=[cta-type]`
* **Context Card Display:** "You're starting with: [Package]" or "You're asking about: [Service]". Includes disclaimer that starting price is not a final quote.
