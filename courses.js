var offset = 0;
var maxSize = 500;

var someCourses = [];
var allCourses = [];

// Semester Codes: [Fall = 09, Winter = 12, Spring = 01, Summer = 06]
// Examples: Fall 2021 = "202109", Summer 2019 = "201906"
// Year + Semester Code
var term = "202109"

// Total courses for the given semester
// Perform an empty search and look for "Records: #" in the bottom right
var totalCourses = 10590;

while (totalCourses - offset > 0) {
    var url = 'https://apps.es.vt.edu/StudentRegistrationSsb/ssb/searchResults/searchResults?txt_term=' + term + '&startDatepicker=&endDatepicker=&uniqueSessionId=sa9jy1591815980896&pageOffset=' + offset +'&pageMaxSize=' + maxSize + '&sortColumn=subjectDescription&sortDirection=asc';
    
    await fetch(url)
        .then(res => res.json())
        .then(data => someCourses = data.data)

    offset += 500;
    allCourses = allCourses.concat(someCourses);

    console.log(someCourses);
    if (totalCourses - offset > 0) {
        console.log(offset.toLocaleString() + " courses fetched | " + (totalCourses - offset).toLocaleString() + " courses left."); 
    } else {
        console.log("Done! Successfully fetched: " + totalCourses.toLocaleString() + " courses. Click copy below.")
    }   
}
console.log(JSON.stringify(allCourses))
