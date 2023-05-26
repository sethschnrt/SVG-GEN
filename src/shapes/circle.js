function generateCircle(text, shapeColor, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        <text x="150" y="100" font-size="30" text-anchor="middle" fill="${textColor}">
          ${text}
        </text>
      </svg>
    `;
  }
  
  module.exports = generateCircle;