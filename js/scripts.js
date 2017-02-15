function verifity(reg, arr) {
  if (reg.source === "...") return;
  
  return arr.filter(function(str) {
    return reg.test(str);
  });
}

function replaceQuotes(str) {
  if (!str) return;
  
  str = str.replace(/'/g, '"');
  str = str.replace(/\b"\b/g, "'");
  return str;
};
