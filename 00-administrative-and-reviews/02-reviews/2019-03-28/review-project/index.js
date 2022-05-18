// Initialize Firebase
var config = {
    apiKey: "AIzaSyDS5N2d-O_JhqfESn7v-54hJYgM7mje3Fk",
    authDomain: "hamburger-a1305.firebaseapp.com",
    databaseURL: "https://hamburger-a1305.firebaseio.com",
    projectId: "hamburger-a1305",
    storageBucket: "hamburger-a1305.appspot.com",
    messagingSenderId: "306374706433"
};
firebase.initializeApp(config);

var database = firebase.database();

var students = database.ref('students');

$('.form-control').on('change', function () {
    $(this).removeClass('is-invalid');
});

$('#add-student').click(function (event) {
    var inputIsValid = true;
    event.preventDefault();
    // student has:
    // name
    var studentName = $('#name').val().trim();
    if (!studentName) {
        inputIsValid = false;
        $('#name-invalid').text('Student\'s Name is Required.');
        $('#name').addClass('is-invalid');
    }
    // grade
    var studentGrade = $('#grade').val();
    if (!studentGrade) {
        inputIsValid = false;
        $('#grade-invalid').text('Student\'s Grade is Required.');
        $('#grade').addClass('is-invalid');
    }
    // class
    var studentClass = $('#student-class').val().trim().toLowerCase();
    if (!studentClass) {
        inputIsValid = false;
        $('#class-invalid').text('Student\'s Class is Required.');
        $('#student-class').addClass('is-invalid');
    }

    if (!inputIsValid) {
        // user error
        return;
    }

    students.push({
        name: studentName,
        grade: studentGrade,
        class: studentClass
    });
});

function updateHTML(snapshot) {
    var student = snapshot.val();
    $('#student-table').prepend(`
        <tr>
            <th scope="row">${student.name}</th>
            <td>${student.class}</td>
            <td>${student.grade}</td>
        </tr>
    `);
    console.log(student);
}

var studentFilter = students.on('child_added', updateHTML);

$('.class-button').click(function () {
    var classFilter = $(this).data('class');
    $('#student-table').empty();
    if (!classFilter) {
        studentFilter = students.on('child_added', updateHTML);
        return;
    }
    students.off('child_added', studentFilter);
    students.orderByChild('class').equalTo(classFilter).on('child_added', updateHTML);
});