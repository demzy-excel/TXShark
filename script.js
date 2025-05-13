function analyzeLink() {
  const input = document.getElementById("urlInput").value;
  let score = 0;
  let reasons = [];

  if (!input.startsWith("https://")) {
    reasons.push("No HTTPS — insecure");
    score += 2;
  }

  const suspiciousKeywords = ["airdrop", "double your ETH", "claim reward"];
  suspiciousKeywords.forEach(keyword => {
    if (input.toLowerCase().includes(keyword)) {
      reasons.push("Contains suspicious keyword: '" + keyword + "'");
      score += 2;
    }
  });

  const blacklist = ["scamsite.com", "fakeairdrop.net"];
  blacklist.forEach(domain => {
    if (input.includes(domain)) {
      reasons.push("Domain is blacklisted: " + domain);
      score += 3;
    }
  });

  let resultText = "";
  if (score >= 5) {
    resultText = "🚨 High Risk\n";
  } else if (score >= 2) {
    resultText = "⚠️ Medium Risk\n";
  } else {
    resultText = "✅ Safe\n";
  }

  resultText += reasons.join("\n");
  document.getElementById("result").innerText = resultText;
}