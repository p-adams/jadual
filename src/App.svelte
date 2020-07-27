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
        description: "Commentary on al-Muwatta of Imam Malik",
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
          "Commentary on Sheikh 'Ali Ba'Ras' explanation of al-Hikam al-'Ata'iyyah along with an explanation of Imam al-Haddad's poem Rejoice, O Steadfast One",
        links: [{}],
        resources: [{ title: "", links: [] }]
      },
      time: "03:30 PM"
    },
    {
      title: "al-Sirat al-Nabawiyyah",
      days: [THURSDAY, FRIDAY],
      topic: {
        description: "Jawlan al-Ruh fi Sirat RasuliLlah (Bab al-Futuh)",
        links: [{}],
        resources: [{ title: "", links: [] }]
      },
      time: "03:30 PM"
    },
    {
      title: "Tafsir",
      days: [MONDAY],
      topic: {
        description: "Monday gathering to discuss meanings of Quranic verses",
        links: [{}],
        resources: [{ title: "", links: [] }]
      },
      time: "08:30 PM"
    },
    {
      title: "Qabas al-Nur al-Mubin",
      days: [WEDNESDAY],
      topic: {
        description: "Summary of al-Imam al-Ghazzali's Ihya Ulum al-Din",
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
          "Gathering to read Prophetic Biography and reflect on Spiritual Guidance",
        links: [{}],
        resources: [{ title: "", links: [] }]
      },
      time: "06:40 PM"
    }
  ];
</script>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #fafafa;
  }
  .container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header_title,
  .program_dates,
  .current_date {
    color: #a96222;
    text-align: center;
  }
  .classes_container {
    height: 300px;
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 40px 40px;
    grid-gap: 125px;
  }
  .classes_container .lesson_item {
    border: 1px solid white;
    border-radius: 4px;
    width: 120px;
    height: 155px;
    padding: 4px;
    background: #e6e6fa;
    font-size: 10px;
    font-weight: 700;
  }

  .current_date {
    padding: 10px;
  }
</style>

<div class="app">
  <header>
    <h1 class="header_title">26th Annual Dowra</h1>
  </header>
  <div class="container">
    <div>
      <div class="program_dates">
        <div>
          <h2>July 11, 2020 to August 19, 2020</h2>
          <h4>Schedule of Daily Live Lessons</h4>
        </div>
      </div>
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
    </div>
  </div>
  <footer>
    <div class="current_date">Today's date</div>
  </footer>
</div>
