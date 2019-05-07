<template>
  <section>
    <feature class="reverse">
      <div class="description">
        <h1>Measure your time.</h1>
        <p>Hackaru is the cross-platform and open-source time tracking application. You can measure your meaningful time like reading book, study, programming.</p>
      </div>
      <img src="~/assets/measure.png" class="small" alt="">
    </feature>

    <feature>
      <div class="description">
        <h1>Calendar</h1>
        <p>You can use the calendar to look back on activities. And you can also later update or add activities from the calendar.</p>
      </div>
      <img src="~/assets/calendar.png" alt="">
    </feature>

    <feature class="reverse">
      <div class="description">
        <h1>Report</h1>
        <p>You can use the report to analyze activities.</p>
      </div>
      <img src="~/assets/reports.png" alt="">
    </feature>

    <feature>
      <div class="description">
        <h1>Auto Tracking</h1>
        <p>By installing the desktop version, you can automatically measure the time you are using your favorite applications like Atom, Sketch, Photoshop.</p>
        <btn href="https://app.hackaru.app/auth?sign-up=true" class="learn-btn">Learn more</btn>
      </div>
      <img src="~/assets/auto-tracking.png" alt="">
    </feature>
  </section>
</template>

<script>
import Btn from '~/components/atoms/btn';
import Feature from '~/components/molecules/feature';

export default {
  components: {
    Btn,
    Feature
  }
}
</script>
