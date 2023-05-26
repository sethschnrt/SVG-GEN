function generateSquare(text, shapeColor, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="100" fill="${shapeColor}" />
        <text x="150" y="120" font-size="30" text-anchor="middle" fill="${textColor}">
          ${text}
        </text>
      </svg>
    `;
  }
  
  module.exports = generateSquare;