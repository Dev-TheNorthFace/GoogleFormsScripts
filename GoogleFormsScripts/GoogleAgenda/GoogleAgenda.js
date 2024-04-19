function onFormSubmit(e) {
    var responses = e.values;
    var eventTitle = responses[1];
    var eventDate = responses[2];

    var calendarId = 'IDCALENDRIER';
    
    var calendar = CalendarApp.getCalendarById(calendarId);
    
    var startDate = new Date(eventDate);
    
    if (isNaN(startDate.getTime())) {
      startDate.setDate(startDate.getDate() + 1);
    }
    
    var endDate = new Date(startDate);
    endDate.setHours(endDate.getHours() + 1);
    
    var event = calendar.createEvent(eventTitle, startDate, endDate);
    
    Logger.log('Event created: %s', event.getTitle());
  }  