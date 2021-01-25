# Virginia Tech HokieSpa Courses Fetch
This script allows you to return a JSON array of every course offered for the given semester. This is much easier than scraping the Timetable by using a backdoor API rather than scraping. <br/>

## How to Run
1. Sign in to HokieSpa and navigate to https://apps.es.vt.edu/StudentRegistrationSsb/ssb/classSearch/classSearch <br/>

1. Inspect the page and go to Console (Mac: <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>J</kbd> or Windows: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd>)<br/>

1. Paste the code from [courses.js](courses.js) into the Console <br/>

1. Change the variables `term` and `totalCourses` to the desired input <br/>

1. Press <kbd>Enter</kbd> to run <br/>

## Course JSON Object
```json
{
    "id": 457964,
    "term": "202101",
    "termDesc": "Spring 2021",
    "courseReferenceNumber": "10103",
    "partOfTerm": "E",
    "courseNumber": "1004",
    "subject": "ACIS",
    "subjectDescription": "Accounting &amp; Information Syste",
    "sequenceNumber": "0",
    "campusDescription": "Virtual",
    "scheduleTypeDescription": "Virtual Campus Lecture",
    "courseTitle": "Accounting Foundations",
    "creditHours": null,
    "maximumEnrollment": 300,
    "enrollment": 281,
    "seatsAvailable": 19,
    "waitCapacity": 0,
    "waitCount": 0,
    "waitAvailable": 0,
    "crossList": null,
    "crossListCapacity": null,
    "crossListCount": null,
    "crossListAvailable": null,
    "creditHourHigh": null,
    "creditHourLow": 3,
    "creditHourIndicator": null,
    "openSection": true,
    "linkIdentifier": null,
    "isSectionLinked": false,
    "subjectCourse": "ACIS1004",
    "faculty": [
      {
        "bannerId": "20163",
        "category": null,
        "class": "net.hedtech.banner.student.faculty.FacultyResultDecorator",
        "courseReferenceNumber": "10103",
        "displayName": "Lacoste, Jean",
        "emailAddress": "lacoste@vt.edu",
        "primaryIndicator": true,
        "term": "202101"
      }
    ],
    "meetingsFaculty": [
      {
        "category": "01",
        "class": "net.hedtech.banner.student.schedule.SectionSessionDecorator",
        "courseReferenceNumber": "10103",
        "faculty": [],
        "meetingTime": {
          "beginTime": null,
          "building": "ONLINE",
          "buildingDescription": "ONLINE",
          "campus": "10",
          "campusDescription": "Virtual",
          "category": "01",
          "class": "net.hedtech.banner.general.overall.MeetingTimeDecorator",
          "courseReferenceNumber": "10103",
          "creditHourSession": 3,
          "endDate": "05/15/2021",
          "endTime": null,
          "friday": false,
          "hoursWeek": 0,
          "meetingScheduleType": "VL",
          "meetingType": "CLAS",
          "meetingTypeDescription": "Class",
          "monday": false,
          "room": null,
          "saturday": false,
          "startDate": "01/19/2021",
          "sunday": false,
          "term": "202101",
          "thursday": false,
          "tuesday": false,
          "wednesday": false
        },
        "term": "202101"
      }
    ],
    "reservedSeatSummary": null,
    "sectionAttributes": [
      {
        "class": "net.hedtech.banner.student.schedule.SectionDegreeProgramAttributeDecorator",
        "code": "AR05",
        "courseReferenceNumber": "10103",
        "description": "5 Quantitative &amp; Symbolic Rnsg",
        "isZTCAttribute": false,
        "termCode": "202101"
      },
      {
        "class": "net.hedtech.banner.student.schedule.SectionDegreeProgramAttributeDecorator",
        "code": "G05F",
        "courseReferenceNumber": "10103",
        "description": "Quant &amp; Comp Thnk Foundation",
        "isZTCAttribute": false,
        "termCode": "202101"
      },
      {
        "class": "net.hedtech.banner.student.schedule.SectionDegreeProgramAttributeDecorator",
        "code": "G10",
        "courseReferenceNumber": "10103",
        "description": "Ethical Reasoning",
        "isZTCAttribute": false,
        "termCode": "202101"
      }
    ]
  }
  ```



