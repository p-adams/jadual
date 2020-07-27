<script>
  const SATURDAY = "SATURDAY";
  const SUNDAY = "SUNDAY";
  const MONDAY = "MONDAY";
  const TUESDAY = "TUESDAY";
  const WEDNESDAY = "WEDNESDAY";
  const THURSDAY = "THURSDAY";
  const FRIDAY = "FRIDAY";
  let lessons = [
    {
      title: "Fajr",
      days: [SATURDAY, SUNDAY, MONDAY, TUESDAY, WEDNESDAY],
      topic: [
        {
          description: "Commentary on al-Muwatta of Imam Malik",
          links: [{}],
          resources: [{ title: "", links: [] }]
        }
      ],
      time: "05:15 AM"
    },
    {
      title: "Rawhah",
      days: [SATURDAY, SUNDAY, MONDAY, TUESDAY, WEDNESDAY],
      topic: [
        {
          description:
            "Commentary on Sheikh 'Ali Ba'Ras' explanation of al-Hikam al-'Ata'iyyah along with an explanation of Imam al-Haddad's poem Rejoice, O Steadfast One",
          links: [{}],
          resources: [{ title: "", links: [] }]
        }
      ],
      time: "03:30 PM"
    },
    {
      title: "al-Sirat al-Nabawiyyah",
      days: [THURSDAY, FRIDAY],
      topic: [
        {
          description: "Jawlan al-Ruh fi Sirat RasuliLlah (Bab al-Futuh)",
          links: [{}],
          resources: [{ title: "", links: [] }]
        }
      ],
      time: "03:30 PM"
    },
    {
      title: "Tafsir",
      days: [MONDAY],
      topic: [
        {
          description: "Monday gathering to discuss meanings of Quranic verses",
          links: [{}],
          resources: [{ title: "", links: [] }]
        }
      ],
      time: "08:30 PM"
    },
    {
      title: "Qabas al-Nur al-Mubin",
      days: [WEDNESDAY],
      topic: [
        {
          description: "Summary of al-Imam al-Ghazzali's Ihya Ulum al-Din",
          links: [{}],
          resources: [{ lang: "AR", title: "", links: [] }]
        }
      ],
      time: "08:30 PM"
    },
    {
      title: "Irshadat al-Suluk",
      days: [THURSDAY],
      topic: [
        {
          description:
            "Gathering to read Prophetic Biography and reflect on Spiritual Guidance",
          links: [{}],
          resources: [{ title: "", links: [] }]
        }
      ],
      time: "06:40 PM"
    }
  ];
</script>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
    text-align: center;
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
      <div class="program_dates">July 11, 2020 to August 19, 2020</div>
      <div class="classes">
        <h2>Schedule of Daily Live Lessons</h2>
        <div>Fajr Lesson</div>
        <div>Rawhah Lesson</div>
        <div>Sirah Lesson</div>
        <div>Tafsir Lesson</div>
        <div>Qabas al-Nur al-Mubin Lesson</div>
        <div>Irshadat al-Suluk</div>
      </div>
    </div>

  </div>
  <footer>
    <div class="current_date">Today's date</div>
  </footer>
</div>
