function onFormSubmit(e) {
    var response = e.values[1];
    var sentimentScore = analyzeSentiment(response);
    Logger.log("Score de sentiment pour la réponse: " + sentimentScore);
  }
  
  function analyzeSentiment(response) {
    
    var words = response.split(" ");
    var positiveWords = ["happy", "satisfied", "great", "awesome", "good"];
    var negativeWords = ["sad", "disappointed", "bad", "terrible", "awful"];
    var positiveCount = 0;
    var negativeCount = 0;
    
    for (var i = 0; i < words.length; i++) {
      var word = words[i].toLowerCase();
      if (positiveWords.indexOf(word) !== -1) {
        positiveCount++;
      } else if (negativeWords.indexOf(word) !== -1) {
        negativeCount++;
      }
    }
    
    var totalWords = positiveCount + negativeCount;
    var sentimentScore = (positiveCount - negativeCount) / totalWords;
    
    return sentimentScore;
  }  