const SATURDAY = "Saturday";
const SUNDAY = "Sunday";
const MONDAY = "Monday";
const TUESDAY = "Tuesday";
const WEDNESDAY = "Wednesday";
const THURSDAY = "Thursday";
const FRIDAY = "Friday";

export default [
  {
    title: "Fajr",
    days: [SATURDAY, SUNDAY, MONDAY, TUESDAY, WEDNESDAY],
    topic: {
      description: "Commentary on al-Muwatta of Imam Malik.",
      links: [{}],
      resources: [{ title: "", links: [] }],
    },
    time: "05:15 AM",
  },
  {
    title: "Rawhah",
    days: [SATURDAY, SUNDAY, MONDAY, TUESDAY, WEDNESDAY],
    topic: {
      description:
        "Commentary on al-Hikam al-'Ata'iyyah and an explanation of Imam al-Haddad's poem Rejoice, O Steadfast One.",
      links: [{}],
      resources: [{ title: "", links: [] }],
    },
    time: "03:30 PM",
  },
  {
    title: "al-Sirat al-Nabawiyyah",
    days: [THURSDAY, FRIDAY],
    topic: {
      description: "Jawlan al-Ruh fi Sirat RasuliLlah (Bab al-Futuh).",
      links: [{}],
      resources: [{ title: "", links: [] }],
    },
    time: "03:30 PM",
  },
  {
    title: "Tafsir",
    days: [MONDAY],
    topic: {
      description: "Monday gathering to discuss meanings of Quranic verses.",
      links: [{}],
      resources: [{ title: "", links: [] }],
    },
    time: "08:30 PM",
  },
  {
    title: "Qabas al-Nur al-Mubin",
    days: [WEDNESDAY],
    topic: {
      description: "Summary of al-Imam al-Ghazzali's Ihya Ulum al-Din.",
      links: [{}],
      resources: [{ lang: "AR", title: "", links: [] }],
    },
    time: "08:30 PM",
  },
  {
    title: "Irshadat al-Suluk",
    days: [THURSDAY],
    topic: {
      description:
        "Gathering to read Prophetic Biography and reflect on Spiritual Guidance.",
      links: [{}],
      resources: [{ title: "", links: [] }],
    },
    time: "06:40 PM",
  },
];
