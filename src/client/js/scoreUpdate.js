export function scoreUpdate (score) {
    
    if (score === "P" || score === "P+"){
      return "Positive";
    } else if (score === "N" || score === "N+"){
      return "Negative";
    } else if (score === "NEU") {
      return "Neutral";
    } else {
      return "Non Sentimental";
    }
  }