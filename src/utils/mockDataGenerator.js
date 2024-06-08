const fs = require('fs');
const products = require("../seed-data/products");
const goals = require("../seed-data/goals");

// Function to generate a random integer between min (inclusive) and max (inclusive)
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateMockData = (numRecords, goals) => {
  const mockData = [];
  const startDate = new Date(2022, 0, 1); 
  const endDate = new Date(2024, 5, 30); 
  const numDays = (endDate - startDate) / (1000 * 60 * 60 * 24); 

  for (let i = 1; i <= numRecords; i++) {
    const product = products[getRandomInt(0, products.length - 1)];

    // Generate a sequential date within the time frame of the goals
    const date = new Date(startDate.getTime() + (i - 1) * (numDays * 24 * 60 * 60 * 1000 / numRecords));

    const matchingGoal = goals.find(goal => {
      const goalDate = new Date(goal.Date);
      return date >= goalDate && date < new Date(goalDate.getFullYear(), goalDate.getMonth() + 1, goalDate.getDate());
    });

    const goalId = matchingGoal ? matchingGoal.ID : 1;

    mockData.push({
      id: i,
      date: date.toISOString().split('T')[0],
      product_id: product.id,
      type_id: product.type_id,
      quantity: getRandomInt(1, 10),
      goal_id: goalId
    });
  }

  // Sort the mock data by date
  mockData.sort((a, b) => new Date(a.date) - new Date(b.date));

  return mockData;
};

// Generate mock data
const mockData = generateMockData(100, goals); 
// Save mock data
fs.writeFileSync('../seed-data/records.js', JSON.stringify(mockData));
console.log('Mock waste tracker data generated successfully!');


