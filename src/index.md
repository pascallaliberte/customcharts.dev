---
# Feel free to add content and custom Front Matter to this file.

layout: default
---

# Custom Charts Developer
{: .text-4xl.md:text-6xl.font-black.text-sequoia-800 }

![Avatar of Pascal](/images/pascal-avatar.jpg){: .rounded-full.w-14.block.sm:inline.mb-2.sm:mb-0.border.border-2.border-white } [Pascal Laliberté](https://ruby.social/@pascallaliberte) of [supercharts.dev][supercharts] and [chartdescriptions.com][chartdescriptions]
{: .text-2xl.md:text-3xl.font-semibold.text-black.mt-3 }

For Hotwire-based Rails apps.
{: .text-1xl.md:text-2xl.font-semibold.text-black/20.mt-3 }

<div class="mt-4">
<a class="cta-btn text-1xl px-4 py-1" href="#availability">Pre-purchase a week below</a>
</div>

---
{: .h-0.border-white.border-t-2.md:border-t-4.max-w-xs.my-6.md:my-16 }

<div markdown="1" data-controller="purchasable-services">

<section class="prose md:prose-lg marker:text-black/20" markdown="1">

## You've been avoiding going deep on the UX and styling of charts

The whole chart aspect of your project has so far been falling behind on everything else...

It was on your list, but it's been put off to later.

But now, "later" is coming up "soon".

<div class="-ml-8 md:hidden" markdown="1">
  ![chart of today, deadline, chart?](/images/chart-deadline-chart.svg#svgView(viewBox(350, 10, 200, 150)))
</div>
<div class="hidden md:block" markdown="1">
  ![chart of today, deadline, chart?](/images/chart-deadline-chart.svg)
</div>

## "I just have too many specialties to master"

On your project, you have to wear all the hats. You go deep on all these topics. But **your involvement with charts has stayed superficial**. No choice!

You'be been sweating all the other important aspects of your project: Domain Modeling, UI, Testing, DB Performance, Landing Pages, and Product-Market Fit.

"If only someone could just take over the chart part"

### The responsibilities have been piling on…

<%= render "pressure_chart" %>

## Too many "I could just"

You've crossed those first chart-related to-dos off your list, but there were too many "I could just"

* "I could just use ChatGPT, **but it regresses to the mean**. I want something that has _style_."
* "I could just use chart.js, **but the animations are off-putting**"
* "I could just load that data set on a view property, **but it's slowing down the time-to-first-byte**"
* "I could just settle for a multi-line chart **but there should be a clearer way to present this**"

**Your high taste** is found everywhere throughout your app, but the charts don't match that taste.

---
{: .h-0.border-white.border-t-2.md:border-t-4.max-w-xs.my-6.md:my-16 }

## Let's try a week together
{: #availability.text-3xl.md:text-6xl.font-black.text-sequoia-800.mb-4.-ml-1.md:-ml-2 }

For one week that your pre-purchase (availabilities listed below), I'll be around to code the chart you'd like.

* It'll be coded in chart.js, or in d3.js, or in raw svg+html
* It'll be outside your codebase, I'll invite you on a repo I'll create on my GitHub account
* It'll be licensed MIT on that repo, but the repo will be private between the two of us
* You drive the decisions, I implement and I make it good
* We will communicate over GitHub issues and a GitHub project
* I'll have a private URL previewing the chart
* You'll get the benefits of speed
* If we prioritize it, we can also work on adding automatic text descriptions of the generated charts

</section>


Start here
{: .text-1xl.md:text-2xl.font-black.text-black/20.mt-12.uppercase }

<div markdown="1"
  data-controller="purchasable-service"
  data-action="service-ladder:ready@document->purchasable-service#adjustPurchaseOptions"
  data-purchasable-service-slug-value="charts_developer_one_week"
>

## Weeks available for pre-purchase
{: .text-2xl.md:text-4xl.font-black.text-sequoia-800.mb-4.uppercase }

<div markdown="1" data-purchasable-service-target="buttons">

<a class="cta-btn text-2xl px-8 py-2" href="mailto:pascal@hey.com?subject%3DCustom%20Charts%20Developer%26body%3DHi%2C%0A%0AI%27d%20like%20to%20inquire%20about%20your%20next%20one-week%20block%20of%20availability%20to%20help%20me%20build%20a%20chart.">Inquire about the next available week</a>

</div>

<template data-purchasable-service-target="buttonTemplate">
  <form action="%endpoint%" method="POST" class="block mt-2">
    <input type="hidden" name="checkout[service_uuid]" value="%service_uuid%">
    <input type="hidden" name="checkout[start_date]" value="%start_date%">
    <input type="hidden" name="checkout[end_date]" value="%end_date%">
    <button type="submit" class="cta-btn text-2xl px-8 py-2">
      Purchase week of %date_range_as_string%, USD $%price_in_dollars%
    </button>
  </form>
</template>

</div>

<section class="mt-10 prose md:prose-lg marker:text-black/20" markdown="1">

## Here's how the week could look like
{: .!mb-0.mt-8 }

Your main involvement: provide to-dos and review the work.
{: .mt-2.text-1xl.md:text-2xl.font-semibold.text-black/20 }

**On Monday**, I'll ask you to add a to-do. Something specific that can get the ball rolling so that...

**On Tuesday**, you'll get a note about the first task being done, for you to review. For the next tweak, I'll ask you to make a new to-do, and I'll get on it.

**On Wednesday**, another to-do done for you to review, we'll probably turn our attention to one specific aspect of the chart, because we'll enter the home stretch...

**On Thursday**, a small tweak or two are in, you approve or make another to-do for the next thing...

**On Friday**, another small to-do or two are done for your review, and we're wrapping it up. I'll send you a zip file of the code and the preview output.

### At any point during the week

* You have access to the code and the chart preview
* You can add to-dos in the "For Consideration" column. Only one to-do will be in the "To-do" column at a time.
* You can provide sketches, data samples
* You can upload videos of your screen, which are quick to record

### At _every_ point during the week

* **You will be available for reviewing the work, providing new to-dos**. I only work on one to-do at a time, and will put it in the "To Review" column when done.

### _A month after_ the week has ended

* I'll close down the repo and shut down the preview URL

### Some fine print

There are industries I won't serve. I won't serve the adult content industry. I won't serve the cryptocurrency/NFT industry either. Black market? No. If I decide I can't work for your industry, you'll get refunded and I stop the work. I will be using LLMs (AIs) but won't share your data with the LLM without your consent.

Also, I won't sign an NDA or a non-compete for my work in this by-the-week service.

</section>

<section class="max-w-lg" markdown="1">

---
{: .h-0.border-white.border-t-2.md:border-t-4.max-w-xs.my-6.md:my-16 }

## The secret menu
{: .text-1xl.md:text-2xl.font-black.text-sequoia-800.mt-8.mb-4.uppercase }

If the [above one-week-sized blocks](#availability) aren't your preference, I can accommodate:
{: .mb-4 }

### Something Bigger
{: .text-1xl.md:text-2xl.font-black.uppercase }

**If you'd like to partner up on a bigger project**, where getting the charts right will create revenue or reduce costs, will depend on a strong ability to craft good user experiences and understanding buyer motivation (jobs-to-be-done)...

<div markdown="1"
  data-controller="purchasable-service"
  data-action="service-ladder:ready@document->purchasable-service#adjustPurchaseOptions"
  data-purchasable-service-slug-value="two_day_discovery_charts_development"
>

<div markdown="1" data-purchasable-service-target="buttons">

<a class="cta-btn px-2 py-1" href="mailto:pascal@hey.com?subject%3DCustom%20Charts%20Developer%26body%3DHi%2C%0A%0AI%27d%20like%20to%20inquire%20about%20the%20two-day%20discovery%20exercise.">Inquire about a two-day discovery exercise</a>

</div>

<template data-purchasable-service-target="buttonTemplate">
  <form action="%endpoint%" method="POST" class="block mt-2">
    <input type="hidden" name="checkout[service_uuid]" value="%service_uuid%">
    <button type="submit" class="cta-btn px-2 py-1">
      Two-day Discovery Exercise, USD $%price_in_dollars%
    </button>
  </form>
</template>

</div>

<div class="bg-white/30 p-8 my-4 -mx-4" markdown="1">
**Justin Ménard, CEO of [LISTedTECH.com](https://listedtech.com), about us working together:**
{: .mb-2 }

> "When we were looking for someone to build our portal (where our customers access charts on Ed Tech products), we turned to Pascal to put our idea into action. Pascal understood our concept, translated our vision into an app with charts and a way for customers to purchase a subscription. Now we have a place to showcase and sell our data."
{: .border.border-0.border-l-4.border-coast-500.pl-4.mt-2.ml-4 }
</div>

### Or, something smaller
{: .mt-8.font-black.uppercase }

**If you'd just like quick help on a chart you're building**, I'm sometimes available on short-notice for a two-day async consultation where we exchange screenshare videos to get you unblocked. [Send me a video of what you need help with](https://zipmessage.com/pascallaliberte) and I'll let you know if I'm available for a 2-day back-and-forth video consult for USD $625. Usually in the next day or two.

## See me build charts in public
{: .text-1xl.md:text-2xl.font-black.text-sequoia-800.mt-8.mb-4.uppercase }

As I work on [supercharts.dev][supercharts], a way to scaffold ready-made charts in your Rails app built with Bullet Train, I'm [posting on Mastodon about my progress](https://ruby.social/@pascallaliberte). See you there?

</section>

</div>


[supercharts]: https://supercharts.dev
[chartdescriptions]: https://chartdescriptions.com