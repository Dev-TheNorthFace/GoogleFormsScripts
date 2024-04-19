function onSubmitForm(e) {
    var form = FormApp.getActiveForm();
    var formUrl = form.getPublishedUrl();
    var formTitle = form.getTitle();
    var response = e.response;
    var userEmail = Session.getActiveUser().getEmail();
    var ownerEmail = form.getOwner().getEmail();
    
    var subject = "Nouvelle réponse pour le formulaire : " + formTitle;
    var message = "Une nouvelle réponse a été soumise pour le formulaire : " + formTitle + "\n\n";
    message += "Vous pouvez voir la réponse ici : " + formUrl + "\n\n";
    message += "Réponse soumise par : " + userEmail;
    
    MailApp.sendEmail(ownerEmail, subject, message);
  }
  
  function initialize() {
    var form = FormApp.getActiveForm();
    ScriptApp.newTrigger('onSubmitForm')
        .forForm(form)
        .onFormSubmit()
        .create();
  }  