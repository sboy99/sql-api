const getConditionString = (payload) => {
  const conStrArr = [];
  for (const key in payload) {
    const str = `${key} = '${payload[key]}'`;
    conStrArr.push(str);
  }
  return conStrArr.join(" AND ");
};

module.exports = getConditionString;
