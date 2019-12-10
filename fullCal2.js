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
    googleCalendarId: 'bu3aifa98rv4509qp6p3n7fb88@group.calendar.google.com'
  }
});

calendar.render();

 });