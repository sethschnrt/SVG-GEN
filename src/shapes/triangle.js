function generateTriangle(text, shapeColor, textColor) {
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 10,190 290,190" fill="${shapeColor}" />
        <text x="150" y="120" font-size="30" text-anchor="middle" fill="${textColor}">
          ${text}
        </text>
      </svg>
    `;
  }
  
  module.exports = generateTriangle;