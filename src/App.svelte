<script>
  import lessons from "./lessons";
  import { format, isBefore, getTime, toDate } from "date-fns";
  import { formatToTimeZone } from "date-fns-timezone";

  function getCurrentLessons() {
    const today = format(new Date(), "iiii");
    return lessons.filter(lesson => lesson.days.includes(today));
  }
  console.log(
    formatToTimeZone(new Date(), "D.M.YYYY HH:mm", {
      timeZone: "Asia/Damascus"
    })
  );
</script>

<style>
  .app {
    display: flex;
    flex-direction: column;
    background: #fafafa;
    padding: 10px;
  }
  .container {
    flex: 1;
    display: flex;
    padding: 10px;
  }

  .classes_container {
    max-height: 425px;
    overflow-y: auto;
    width: 750px;
  }

  .classes_container .lesson_item {
    background: #f5f5f5;
    padding: 4px;
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .current_lesson {
    background: #f5f5f5;
    display: flex;
    flex-grow: 2;
    min-width: 300px;
    margin-left: 4px;
  }

  .header_title,
  .header_subtitle,
  .current_date {
    text-align: center;
    padding: 5px;
    font-weight: 700;
  }

  .lesson_title {
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .schedule_title {
    padding: 10px;
    font-weight: 600;
  }
  footer {
    border-top: 1px solid lightgray;
  }

  .current_day {
    font-weight: 800;
    color: #b20000;
  }

  .current_lesson {
    display: block;
    padding: 5px;
  }
  .current_lesson_title {
    display: flex;
    justify-content: space-between;
  }
  .current_lesson_container {
    margin-top: 10px;
  }
  .current_lesson_item {
    border: 1px solid darkgray;
    padding: 10px;
    margin-bottom: 5px;
  }
</style>

<div class="app">
  <header>
    <div class="header_title">26th Annual Dowra</div>
    <div class="header_subtitle">July 11, 2020 to August 19, 2020</div>
  </header>
  <div class="schedule_title">Schedule of Daily Live Lessons</div>
  <div class="container">
    <div class="classes_container">

      {#each lessons as lesson, index}
        <div class={'lesson_item'}>
          <div class="lesson_title">{lesson.title}</div>
          <div>
            Days:
            {#each lesson.days as day}
              {' '}
              <span
                class={format(new Date(), 'iiii') === day ? 'current_day' : ''}>
                {day}
              </span>
            {/each}

          </div>

          <p>Topic: {lesson.topic.description}</p>

          <span>Time: {lesson.time} Mecca</span>
        </div>
      {/each}
    </div>
    <div class="current_lesson">
      <div class="current_lesson_title">
        Latest
        <span>
          Time and date in Mecca {formatToTimeZone(new Date(), 'MM/DD/YYYY HH:mm a', { timeZone: 'Asia/Damascus' })}
        </span>
      </div>
      <div class="current_lesson_container">
        {#each getCurrentLessons() as currentLesson}
          <div class="current_lesson_item">
            <div>
              {currentLesson.title} lesson on {currentLesson.topic.description.replace(/\./g, ' ')}at{' '}{currentLesson.time}
              Mecca time.
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  <footer>
    <div class="current_date">
      {format(new Date(), "'Today ' MM/dd/yyyy h:mm a")}
    </div>
  </footer>
</div>
