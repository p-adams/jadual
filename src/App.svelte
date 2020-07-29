<script>
  const SATURDAY = "S";
  const SUNDAY = "U";
  const MONDAY = "M";
  const TUESDAY = "T";
  const WEDNESDAY = "W";
  const THURSDAY = "R";
  const FRIDAY = "F";
  let lessons = [
    {
      title: "Fajr",
      days: [SATURDAY, SUNDAY, MONDAY, TUESDAY, WEDNESDAY],
      topic: {
        description: "Commentary on al-Muwatta of Imam Malik.",
        links: [{}],
        resources: [{ title: "", links: [] }]
      },
      time: "05:15 AM"
    },
    {
      title: "Rawhah",
      days: [SATURDAY, SUNDAY, MONDAY, TUESDAY, WEDNESDAY],
      topic: {
        description:
          "Commentary on al-Hikam al-'Ata'iyyah and an explanation of Imam al-Haddad's poem Rejoice, O Steadfast One.",
        links: [{}],
        resources: [{ title: "", links: [] }]
      },
      time: "03:30 PM"
    },
    {
      title: "al-Sirat al-Nabawiyyah",
      days: [THURSDAY, FRIDAY],
      topic: {
        description: "Jawlan al-Ruh fi Sirat RasuliLlah (Bab al-Futuh).",
        links: [{}],
        resources: [{ title: "", links: [] }]
      },
      time: "03:30 PM"
    },
    {
      title: "Tafsir",
      days: [MONDAY],
      topic: {
        description: "Monday gathering to discuss meanings of Quranic verses.",
        links: [{}],
        resources: [{ title: "", links: [] }]
      },
      time: "08:30 PM"
    },
    {
      title: "Qabas al-Nur al-Mubin",
      days: [WEDNESDAY],
      topic: {
        description: "Summary of al-Imam al-Ghazzali's Ihya Ulum al-Din.",
        links: [{}],
        resources: [{ lang: "AR", title: "", links: [] }]
      },
      time: "08:30 PM"
    },
    {
      title: "Irshadat al-Suluk",
      days: [THURSDAY],
      topic: {
        description:
          "Gathering to read Prophetic Biography and reflect on Spiritual Guidance.",
        links: [{}],
        resources: [{ title: "", links: [] }]
      },
      time: "06:40 PM"
    }
  ];
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
</style>

<div class="app">
  <header>
    <div class="header_title">26th Annual Dowra</div>
    <div class="header_subtitle">July 11, 2020 to August 19, 2020</div>
  </header>
  <div class="schedule_title">Schedule of Daily Live Lessons</div>
  <div class="container">
    <div class="classes_container">

      {#each lessons as lesson}
        <div class="lesson_item">
          <div class="lesson_title">{lesson.title}</div>
          <div>
            Days:
            <span>
              {#each lesson.days as day}{' '}{day}{/each}
            </span>
          </div>

          <p>Topic: {lesson.topic.description}</p>

          <span>Time: {lesson.time} Mecca</span>
        </div>
      {/each}
    </div>
    <div class="current_lesson">Today's lesson</div>
  </div>
  <footer>
    <div class="current_date">Today's date</div>
  </footer>
</div>
