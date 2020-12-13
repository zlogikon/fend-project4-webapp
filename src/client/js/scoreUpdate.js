export function scoreUpdate (score) {
    
    if (score === "P" || score === "P+"){
      return "POSITIVE";
    } else if (score === "N" || score === "N+"){
      return "NEGATIVE";
    } else if (score === "NEU") {
      return "NEUTRAL";
    } else {
      return "undefined";
    }
  }