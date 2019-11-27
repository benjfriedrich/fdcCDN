document.addEventListener('DOMContentLoaded', function() {

var calendarEl = document.getElementById('calendar');

let calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'dayGrid', 'timeGrid', 'list', 'googleCalendar' ],
  header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },


  googleCalendarApiKey: 'AIzaSyAXEooFECyzZkWhmqEi92eNOmP16wJ0VQw',
  events: {
    googleCalendarId: 'elid1pn597lu7t1p2ldc3ia5jo@group.calendar.google.com'
  }
});

calendar.render();

 });