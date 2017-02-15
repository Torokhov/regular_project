function verifity(reg, arr) {
  if (reg.source === "...") return;
  
  return arr.filter(function(str) {
    return reg.test(str);
  });
}