const missingFieldsValidator = (req, _res) => {
  const missingFields = [];
  
  for (const key in req.body) {
    if (key !== 'quantity') {
      if (!req.body[key]) {
        missingFields.push(key);
      }
    } else {
      if (!req.body[key] && req.body[key] !== 0) {
        missingFields.push(key);
      }
    }
  }

  if (missingFields.length > 0) {
    return {
      valid: false,
      status: 400,
      message: `Please provide a value for ${missingFields.join(", ")} in the form field.`
    }
  }
  return {
    valid: true
  }
}
module.exports = {
  missingFieldsValidator,
};