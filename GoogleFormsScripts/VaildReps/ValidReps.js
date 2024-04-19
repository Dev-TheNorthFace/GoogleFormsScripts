function onFormSubmit(e) {
    var responses = e.values;
    var itemResponses = e.range.getSheet().getFormUrl();
    var valid = true;
    
    for (var i = 0; i < responses.length; i++) {
      var response = responses[i];
      var question = itemResponses[i].getItem().getTitle();
      if (question === "Question 1") {
        if (!critereValidationQuestion1(response)) {
          valid = false;
          break;
        }
      }
    }
    
    if (!valid) {
      var emailAddress = "YourEmail";
      var subject = "Réponse invalide au formulaire";
      var message = "Une ou plusieurs réponses au formulaire ne respectent pas les critères prédéfinis.";
      MailApp.sendEmail(emailAddress, subject, message);
    }
  }
  
  function critereValidationQuestion1(response) {
    return !isNaN(parseFloat(response)) && isFinite(response);
  }  