var count = 0;
var offset = 0;
var maxSize = 500;

var someCourses;
var allCourses = [];

// Semester Codes: [Fall = 09, Winter = 12, Spring = 01, Summer = 06]
// Examples: Fall 2021 = "202109", Summer 2019 = "201906"
// Year + Semester Code
var term = "202101"

// Total courses for the given semester
// Perform an empty search and look for "Records: #" in the bottom right
var totalCourses = 10645;


while (offset <= totalCourses - maxSize) {

    var url = 'https://apps.es.vt.edu/StudentRegistrationSsb/ssb/searchResults/searchResults?txt_term=' + term + '&startDatepicker=&endDatepicker=&uniqueSessionId=sa9jy1591815980896&pageOffset=' + offset +'&pageMaxSize=' + maxSize + '&sortColumn=subjectDescription&sortDirection=asc';
    
    await fetch(url)
        .then(res => res.json())
        .then(data => someCourses = data.data)

    console.log(someCourses);

    offset += 500;
    count += 1;
    console.log(count);

    allCourses = allCourses.concat(someCourses);
}
console.log(JSON.stringify(allCourses))

// Don't worry if an undefined message prints under the JSON