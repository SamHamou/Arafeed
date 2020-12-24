---
categories:
  - articles
tags:
  - التحويل من http إلى https
title: إعادة توجيه الروابط من Http إلى Https لمدونات بلوجر
date: 2020-04-08T23:32:35.747Z
description: كيفية إعادة توجيه الروابط من Http إلى Https في مدونات بلوجر - درس
  اليوم سوف يكون عبارة عن التحويل من Http:// إلى Https:// بشكل تلقائي في
  المدونات ذات النطاق المجاني فبعد تركيب شهادة تأمين SSL أو بروتوكول طبقة
  المنافذ الآمنة على الدومين الخاص بك، فأنت بحاجة لإخبار الخادم بأن يقوم بتقديم
  الروابط من خلال هذا البروتوكول. و يكون هذا عن طريق اكواد جافا سكربت.
image: /img/Tools.webp
---

بعد تعرُفنا على كيفية تفعيل ميزة HTTPS في بلوجر, مازال هُناك مشكلة قد تواجه المدونات ذات النطاق المجاني بحيث هذا الموضوع هُنا لم يعُد له فائدة, لإنه سوف يتم إعادة التوجيه إلى http:// بدلاً من https:// .

درس اليوم سوف يكون عبارة عن التحويل من Http:// إلى Https:// بشكل تلقائي في المدونات ذات النطاق المجاني مثل مدونتي و يكون هذا عن طريق اكواد جافا سكربت, لذلك علينا اولاً مسح الكود الذي اضفناه في الموضوع القديم و إتباع الخطوات في هذا الموضوع

### طريقة التحويل

- توجه إلى بلوجر إلى قالب
- الضغط على تحرير HTML
- ابحث عن الوسم </head> و اضف الكود التالي فوقه 



```
 <script type='text/javascript'>
var blog = document.location.hostname;
var slug = document.location.pathname;
var ctld = blog.substr(blog.lastIndexOf("."));
if (ctld != ".com") {
  var ncr = "https://" + blog.substr(0, blog.indexOf("."));
ncr += ".blogspot.com/ncr" + slug;
window.location.replace(ncr);}
</script>

 <script type='text/javascript'>
function check_secure() {
var secssl = /^https/i;
var blog = document.location.hostname;
var slug = document.location.pathname;
var subs = window.location.search;
if (!window.location.origin.match(secssl)) {
window.location = "https://" + blog + slug + subs;
}
}
check_secure();
</script>
```

اتمنى ان يكون الموضوع أفادكم يرجى مشاركته في السوشيال ميديا لمساعدتنا على الوصول لعدد اكبر من الجمهور