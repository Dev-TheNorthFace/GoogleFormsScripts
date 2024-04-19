function translateResponses() {
    var form = FormApp.openById('IDFORMULAIRE');
    var responses = form.getResponses();
    var translator = LanguageApp.getService().newTranslator().setTargetLanguage(LanguageApp.Language.FRENCH);
  
    for (var i = 0; i < responses.length; i++) {
      var items = responses[i].getItemResponses();
      for (var j = 0; j < items.length; j++) {
        var response = items[j].getResponse();
        if (typeof response === 'string') {
          var translatedResponse = translator.translate(response, 'en', 'fr');
          items[j].getResponse().setTranslatedResponse(translatedResponse);
        }
      }
    }
  }
  
  function onFormSubmit(e) {
    translateResponses();
  }
  
  function onFormUpdate(e) {
    translateResponses();
  }  