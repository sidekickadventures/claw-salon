# Google Sheets Integration

This guide explains how to connect ClawSalon to Google Sheets for storing bookings.

## Option 1: Google Apps Script (Free)

### Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new sheet called "ClawSalon Bookings"
3. Add headers in row 1:
   - A1: `Timestamp`
   - B1: `Service`
   - C1: `Price`
   - D1: `Date`
   - E1: `Time`
   - F1: `Stylist`
   - G1: `Name`
   - H1: `Phone`
   - I1: `Email`
   - J1: `Notes`

### Step 2: Create Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Create new project
3. Paste this code:

```javascript
const SHEET_NAME = "Sheet1";

const doPost = (e) => {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME);
    
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;
    
    const data = JSON.parse(e.postData.contents);
    const row = [
      data.timestamp || new Date(),
      data.service,
      data.price,
      data.date,
      data.time,
      data.stylist,
      data.name,
      data.phone,
      data.email,
      data.notes
    ];
    
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
    
    return ContentService.createTextOutput(JSON.stringify({result: 'success'})).setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({result: 'error', error: e})).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
};
```

### Step 3: Deploy

1. Click **Deploy** → **New deployment**
2. Select **Web app**
3. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Copy the **Web app URL**

### Step 4: Update booking.html

In `assets/booking.html`, find this line:
```javascript
// await fetch('YOUR_GOOGLE_SCRIPT_URL', {
```

Replace with:
```javascript
await fetch('YOUR_DEPLOYED_URL_HERE', {
```

---

## Option 2: Zapier / Make (No Code)

### Using Make (formerly Integromat)

1. Create a Make account
2. Create a webhook
3. Set up Google Sheets "Add Row" module
4. Paste webhook URL into booking.html

### Using Zapier

1. Create Zap with Webhook as trigger
2. Google Sheets as action
3. Paste webhook URL into booking.html

---

## Data Format

When booking is submitted, sends:

```json
{
  "service": "Braids",
  "price": 120,
  "date": "2026-03-15",
  "time": "2:00 PM",
  "stylist": "First Available",
  "name": "John Doe",
  "phone": "555-123-4567",
  "email": "john@example.com",
  "notes": "Long hair, waist length",
  "timestamp": "2026-03-11T00:48:00Z"
}
```