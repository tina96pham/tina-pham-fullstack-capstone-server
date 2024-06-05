const fs = require('fs');
const products= require("../seed-data/product")

// Step1: Create fucntion to randomly generate mock data
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateMockData = (numRecords) => {
  const mockData = [];
  for (let i = 1; i <= numRecords; i++) {
    const product = products[getRandomInt(0, products.length - 1)];
    const intakeDate = new Date(2022, getRandomInt(0, 11), getRandomInt(1, 28));
    const disposalDate = new Date(intakeDate);
    disposalDate.setDate(disposalDate.getDate() + getRandomInt(1, 14));

    mockData.push({
      id: i,
      intakeDate: intakeDate.toISOString().split('T')[0],
      disposalDate: disposalDate.toISOString().split('T')[0],
      product: product.productName,
      quantity: getRandomInt(1, 10),
      disposalMethod: product.disposal,
      disposalLocation: product.disposalLocation
    });
  }
  return mockData;
};

const mockData = generateMockData(100);

fs.writeFileSync('../seed-data/wasteLog.js', JSON.stringify(mockData));
console.log('Mock waste tracker data generated successfully!');