module.exports = function(req, res, next) {
  const queryStrings = req.query;

  for(const key in queryStrings) {
    if(!isNaN(queryStrings[key])) {
      queryStrings[key] = parseInt(queryStrings[key]);
    }
  }

  req.query = queryStrings;
  next();
};

