function selectRandomWinners() {
    var form = FormApp.openById('IDFORMULAIRE');
    var responses = form.getResponses();
    var numberOfWinners = 3;
  
    if (responses.length < numberOfWinners) {
      Logger.log("Nombre de réponses insuffisant pour sélectionner des gagnants");
      return;
    }
  
    var winners = [];
    var selectedIndexes = [];
    var i = 0;
  
    while (winners.length < numberOfWinners && i < responses.length) {
      var randomIndex = Math.floor(Math.random() * responses.length);
  
      if (!selectedIndexes.includes(randomIndex)) {
        var response = responses[randomIndex];
        var respondentEmail = response.getRespondentEmail();
        winners.push(respondentEmail);
        selectedIndexes.push(randomIndex);
      }
  
      i++;
    }

    var sheet = SpreadsheetApp.openById('IDFEUILLECACUL').getActiveSheet();
    sheet.clear();
    sheet.getRange(1, 1, winners.length, 1).setValues(winners.map(function(winner) {
      return [winner];
    }));
  
    Logger.log("Les gagnants ont été sélectionnés avec succès !");
  }  