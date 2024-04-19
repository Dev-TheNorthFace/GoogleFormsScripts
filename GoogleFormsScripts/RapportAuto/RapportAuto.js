function generateReport() {
    var form = FormApp.openById('IDFORMULAIRE');
    var responses = form.getResponses();
    
    var report = '';
    
    for (var i = 0; i < responses.length; i++) {
      var response = responses[i];
      var itemResponses = response.getItemResponses();
      
      report += 'Réponse ' + (i+1) + ': \n';
      
      for (var j = 0; j < itemResponses.length; j++) {
        var itemResponse = itemResponses[j];
        report += itemResponse.getItem().getTitle() + ': ' + itemResponse.getResponse() + '\n';
      }
      
      report += '\n';
    }
    
    var doc = DocumentApp.create('Rapport du formulaire');
    var body = doc.getBody();
    body.setText(report);
    
    Logger.log('Rapport généré: ' + doc.getUrl());
  }  