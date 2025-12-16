# Formspree Email Setup Guide

## Step 1: Create a Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Verify your email

## Step 2: Create a New Form
1. Click "Create a new form" in your dashboard
2. Name it "Build With Dream Contact Form"
3. Copy the form endpoint URL (it looks like: `https://formspree.io/f/YOUR_FORM_ID`)

## Step 3: Update Your Code
1. In `app/contact-us/page.tsx`, replace `"YOUR_FORM_ID"` with your actual form ID
2. The form ID is the part after `/f/` in your endpoint URL

## Step 4: Configure Email Notifications
1. In your Formspree dashboard, go to your form settings
2. Add your email address to receive notifications
3. Customize the email template if desired

## Step 5: Test the Form
1. Visit your contact page
2. Fill out and submit the form
3. Check your email for the notification

## Features Included
- ✅ Form validation
- ✅ Loading states
- ✅ Success confirmation page
- ✅ Error handling
- ✅ Email notifications to you
- ✅ Responsive design

## Pricing
- **Free Plan**: 50 submissions/month
- **Pro Plan**: $29/month for 10,000 submissions
- **Premium Plan**: $99/month for unlimited submissions

Your form is ready to use once you replace `YOUR_FORM_ID` with your actual Formspree form ID!