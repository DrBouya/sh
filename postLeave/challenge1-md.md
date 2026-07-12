## 1. مقدمه

در این چالش، شما باید یک جریان کامل ثبت و مدیریت درخواست مرخصی را به‌صورت Integration و E2E تست نمایید. سامانه شامل APIهای Stateful و یک رابط کاربری واقعی است که با این APIها در ارتباط است. هدف این پروژه پیاده‌سازی و اعتبارسنجی فرآیند کامل درخواست مرخصی با استفاده از Postman و Playwright است. سناریوهای موفق و ناموفق بررسی شده و صحت تغییر State، سازگاری داده‌ها و رفتار UI و API ارزیابی شده است.

## 2. محیط تست

- API: Leave Management API  
- UI: HTML/CSS/JavaScript  
- Tools: Postman, Newman, Playwright  
- Runtime: Node.js

دستورات لازم جهت ران پروژه :
POSTMAN:
-npm install -g newman
-npm install -g newman-reporter-htmlextra
-newman run collection.kson -e environment.json -r cli,json,htmlextra --reporter-json-export result.json --reporter-htmlextra-export report.html

PLAYWRIGHT:
-npm installplaywright@latest
-npx playwright test
-npx playwright show-report


## 3. سناریو های تست postman

سناریوهای اجرا شده:  
• happy path (Create leave) 
• Reject Leave  
• Submit - then-cancel  
• Draft-then-cancel  
• Reject-after-approve(409)  
• cancel-after-approve(409)
• Invalid ID (404)  
• submit-in-approved(409) 
• approve-before-submit(409)
• invalid-data-input (400)
• get Leave by invalid ID( 404 )
• null id in submit req (404)

  
در این بخش شناسه درخواست به صورت Dynamic بین درخواست‌ها منتقل شد و State پس از هر عملیات بررسی گردید.

## 4. تحلیل State Transition

Draft → Submitted → Approved  
Draft → Submitted → Rejected  
Draft → Submitted → Cancelled  
Draft → Cancelled
Draft → Submitted → Approved → Reject→ 409
Draft → Submitted → Approved → Cancel→ 409
Draft → Submitted → Approved → submit→ 409
Draft → Approve → 409
Draft(userId= "") →400
Draft → Cancel(invalid ID) →404
Draft → Get(invalid ID) →404
Draft → submit(invalid ID) →404

  
نتیجه: تمامی تغییر وضعیت‌های مجاز با موفقیت انجام شدند و تغییر وضعیت‌های نامعتبر با خطای مناسب مدیریت شدند.

## 5. تحلیل Newman Report

گزارش Newman شامل تعداد درخواست‌ها، Assertionها، تست‌های موفق و ناموفق است. تمامی سناریوهای موفق بدون خطا اجرا شدند و سناریوهای منفی کدهای وضعیت مورد انتظار (400،404،409) را بازگرداندند.
![[{170D0884-EEB9-41EE-B84A-F4F5450CB89E}.png]]

## 6. سناریو های Playwright E2E 

سناریوهای اجرا شده:  
• Approve Flow  
• Cancel Draft Flow 
• Cancel submit Flow 
• Reject Flow  
• Invalid data input(Date)
• Invalid data input(UserId)    
• Submitted after Cancel  
  
در هر مرحله نمایش پیام‌ها، تغییر وضعیت، عناصر DOM و فعال بودن دکمه‌ها بررسی شد.

## 7. تحلیل Error Scenario

ورود داده ناقص باعث جلوگیری از ثبت درخواست شد و پیام موفقیت نمایش داده نشد. در سناریوهای State نامعتبر، وضعیت API تغییر نکرد و کد خطای مناسب بازگردانده شد.

## 8. نتیجه گیری

تمامی سناریوهای Happy Path و Failure مطابق انتظار اجرا شدند. انتقال داده به صورت Dynamic انجام شد، Data Consistency حفظ گردید و تغییرات State در UI و API اعتبارسنجی شد. این مجموعه تست پوشش مناسبی از فرآیند ثبت، ارسال، تأیید، رد و لغو درخواست مرخصی ارائه می‌دهد.