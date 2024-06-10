const missingFieldsValidator = (req, res) => {
  const missingFields = [];
  
  for (const key in req.body) {
    if (!req.body[key]) {
      missingFields.push(key);
    }
  }

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: `Please provide a value for ${missingFields.join(", ")} in the form field.`,
    });
  }
}

module.exports = {
  missingFieldsValidator,
};