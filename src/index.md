---
# Feel free to add content and custom Front Matter to this file.

layout: default
---

# Custom Charts Developer
{: .text-4xl.md:text-6xl.font-black.text-sequoia-800 }

[Pascal Laliberté](https://twitter.com/pascallaliberte), maker of [supercharts.dev][supercharts]
{: .text-2xl.md:text-3xl.font-semibold.text-black.mt-3 }

Specializing in chart.js, d3 and raw svg. Also, Rails with Stimulus/Hotwire.
{: .text-1xl.md:text-2xl.font-semibold.text-black/20.mt-3 }

<div class="mt-4">
<a class="cta-btn text-1xl px-4 py-1" href="#availability">Pre-purchase a week below</a>
</div>

---
{: .h-0.border-white.border-t-2.md:border-t-4.max-w-xs.my-6.md:my-16 }

<section class="prose md:prose-lg" markdown="1">

## You're not going to code that chart

It's not that you're busy with other things with the app you're building, but you are feeling the deadlines, so maybe a little bit too busy.

It's not that you're allergic to the front-end, but you kind of are.

So that chart won't write itself.

## You've played with the charting libraries

But they're all a little bland, a little too much like all the other ones.

And then you know there's this way to do all custom, but oh man the learning curve.

## But you'd still like to learn...

**Tell you what.** How about I code up a chart or two for you, and I show you how I did it, what tweaks you can make, how to plug it into your data set?

## And you'd like the chart to be pretty...

You're looking for something that stands out, matches your look, gets the details right.

How about you drive the "to-my-taste" department and I'll drive the "code-it-for-you" department?

## Maximum fuss please

There's a shortage of fuss when it comes to online charts, and you're here to fix that. I'm here to fix that too. How about we partner up on that mission?

---
{: .h-0.border-white.border-t-2.md:border-t-4.max-w-xs.my-6.md:my-16 }

</section>

## The Pitch
{: .text-4xl.md:text-6xl.font-black.text-sequoia-800.mb-4.-ml-1.md:-ml-2 }


**Let's start with the fine print.**
{: .text-1xl.mb-4 }

<section class="prose" markdown="1">

For one week that your pre-purchase (availabilities listed below), I'll be around to code the chart you'd like.

You'll provide a sample of the data (csv is best, could be json), or samples of data for different states of the chart.

I'll code the chart on a separate project, in a private repo on my GitHub account to which I'll invite you. It'll be MIT licensed which means we both can re-use the code. I'm doing this as a simple way to protect us both. A rendered preview will be available at a private URL. I can show you tips on how to integrate the new chart code into your app, but that's on you.

We will communicate via GitHub Issues and via a GitHub project. You can create as many issues as you like, but only one of them will be in the To-Do pile. Then it'll go in the To Review pile for you to sign off on. When the issue is done, we'll decide on a new one for the To-Do pile. I might enable other communication tools depending on the job, like ZipMessage or Basecamp.

This means you'll be around that week. We'll make small to-dos that I can turn around within a day for you to review and sign-off on. This service isn't for you if you can't provide quick turnaround on your end as on mine. I only take a few clients per week so I can provide a quick turnaround too.

The chart will either be in chart.js (canvas), in d3 (svg) or in plain svg or html format (sometimes that's good enough). I will wrap the code to generate the chart in a Stimulus controller, and maybe even a turbo-frame (a really nice trick I use for the [supercharts.dev][supercharts] I'm making). I won't write anything in React. If some server-side code needs to be written, it'll be in Ruby and assuming it'll land in a Rails project. I like to deliver as little JavaScript as possible.

There are industries I won't serve. I won't serve the adult content industry. I won't serve the cryptocurrency/NFT industry either. Black market? No. If I decide I can't work for your industry, you'll get refunded and I stop the work.

No calls. Async video screenshares, animated gifs, screenshots, text only links: so many better ways to communicate than on a live call.

_That's it for the fine print._

</section>

Start here
{: .text-1xl.md:text-2xl.font-black.text-black/20.mt-12.uppercase }

<div markdown="1" data-controller="purchasable-services">

<div markdown="1"
  data-controller="purchasable-service"
  data-action="service-ladder:ready@document->purchasable-service#adjustPurchaseOptions"
  data-purchasable-service-slug-value="charts_developer_one_week"
>

## Weeks available for pre-purchase
{: #availability.text-2xl.md:text-4xl.font-black.text-sequoia-800.mb-4.uppercase }

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

</div>

---
{: .h-0.border-white.border-t-2.md:border-t-4.max-w-xs.my-6.md:my-16 }

## See me build charts in public
{: .text-1xl.md:text-2xl.font-black.text-sequoia-800.mt-8.mb-4.uppercase }

As I work on [supercharts.dev][supercharts], I'm [posting on Twitter about my progress](https://twitter.com/search?q=chart%20(from%3Apascallaliberte)&src=typed_query&f=live). See you there?

Why isn't there a chart on this page? Honestly, I couldn't think of a chart to add that wasn't lame. But with the link to Twitter just above, you can see my latest work.
{: .text-black/50.mt-8.text-sm }

[supercharts]: https://supercharts.dev
