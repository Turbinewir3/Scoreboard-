let virtueKeywords;

fetch('virtues.json')
  .then(response => response.json())
  .then(data => virtueKeywords = data)
  .catch(err => console.error("Error loading virtues.json:", err));

function calculateVirtueScore() {
  const text = document.getElementById('inputText').value.toLowerCase();
  let score = 0;
  let found = [];

  for (const [virtue, keywords] of Object.entries(virtueKeywords)) {
    keywords.forEach(keyword => {
      const count = (text.match(new RegExp(`\\b${keyword}\\b`, 'gi')) || []).length;
      if (count > 0) {
        score += count;
        found.push(`${keyword} (${count})`);
      }
    });
  }

  document.getElementById('result').innerHTML = `
    Virtue Score: <strong>${score}</strong><br/>
    Matches: ${found.join(', ')}
  `;
}
