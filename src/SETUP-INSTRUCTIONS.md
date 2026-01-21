# Winnipeg Lawns - Lead Form Setup Instructions

## ✅ Your form is ready! Just need to connect Formspree

### Step 1: Create Free Formspree Account

1. Go to: **https://formspree.io**
2. Click "Get Started" or "Sign Up"
3. Create account (free tier = 50 submissions/month - plenty to start!)

### Step 2: Create Your Form

1. Once logged in, click **"+ New Form"**
2. Give it a name: "Winnipeg Lawns Estimate Requests"
3. Set notification email to: **info@winnipeglawns.ca**
4. Click "Create Form"

### Step 3: Get Your Form ID

After creating the form, you'll see a Form ID that looks like:
```
mzzpqrst
```

Or a full endpoint like:
```
https://formspree.io/f/mzzpqrst
```

**Copy this ID!**

### Step 4: Update Your Code

1. Open the file: `/components/LeadForm.tsx`
2. Find line 27 that says:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
3. Replace `YOUR_FORM_ID` with your actual ID:
   ```javascript
   const response = await fetch('https://formspree.io/f/mzzpqrst', {
   ```
4. Save the file
5. Redeploy to Vercel

### Step 5: Test It!

1. Go to your live website
2. Fill out the estimate form
3. Submit
4. Check your email at **info@winnipeglawns.ca**
5. You should receive an email with all the lead details!

---

## 📧 What You'll Receive

Every time someone submits the form, you'll get an email like this:

**Subject:** 🌱 New Estimate Request - Winnipeg Lawns

**Body:**
```
name: John Smith
email: john@example.com
phone: (204) 555-0123
address: 123 Main St, Winnipeg, MB
services: Sod Repair & Installation, Top Dressing
```

You can reply directly to the customer from your email!

---

## 🎯 Formspree Settings (Recommended)

In your Formspree dashboard, configure:

### 1. **Email Notifications**
- ✅ Enable email notifications
- Email: info@winnipeglawns.ca

### 2. **Spam Protection**
- ✅ Enable reCAPTCHA (optional but recommended)
- ✅ Enable honeypot field (catches bots)

### 3. **Success URL** (optional)
- Leave blank - we handle success in the React app

### 4. **Autoresponder** (optional upgrade)
- Send automatic "Thanks, we'll be in touch!" email to customers
- Requires paid plan ($10/month)

---

## 💰 Pricing

**Free Tier:**
- 50 submissions/month
- Spam filtering
- Email notifications
- Perfect to start!

**Paid Plan ($10/month):**
- 1000 submissions/month
- Auto-responder emails
- Advanced spam protection
- Export submissions

**Recommendation:** Start with free tier, upgrade when you get more leads!

---

## 🚀 Alternative: If You Need More Features

If you want:
- Save all leads in a database
- View leads in a dashboard
- Send automated follow-up emails
- Track conversion rates

Consider upgrading to Supabase (I can help set this up - it's also free to start!)

---

## ✅ Checklist

- [ ] Create Formspree account
- [ ] Create new form with email: info@winnipeglawns.ca
- [ ] Copy Form ID
- [ ] Update LeadForm.tsx with your Form ID
- [ ] Deploy to Vercel
- [ ] Test the form
- [ ] Verify email arrives at info@winnipeglawns.ca

---

## 📞 Need Help?

If you have questions setting this up, let me know and I can guide you through it!
