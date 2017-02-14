describe("verifity", function() {
  it("Наличие подстрок 'cat', 'car'", function() {
    assert.deepEqual(verifity(/ca[tr]/, ["my car", "bad cats", "camper", "high art"]), ["my car", "bad cats"]);
  });
  
  it("Наличие подстрок 'pop', 'prop'", function() {
    assert.deepEqual(verifity(/pop|prop/, ["pop culture", "mad props", "plop"]), ["pop culture", "mad props"]);
  });
  
  it("Наличие подстрок 'ferry', 'ferrari'", function() {
    assert.deepEqual(verifity(/ferr[y(ari)]/, ["ferret", "ferry", "ferrari","ferrum", "transfer A"]), ["ferry", "ferrari"]);
  });
  
  it("Любое слово, заканчивающееся на 'ious'", function() {
    assert.deepEqual(verifity(/?+ious/, ["how delicious", "spacious room","ruinous", "consciousness"]), ["how delicious", "spacious room"]);
  });
  
  it("Пробел, за которым идёт точка, запятая, двоеточие или точка с запятой", function() {
    assert.deepEqual(verifity(/ [.,:;]/, ["bad punctuation .","escape the dot"]), ["bad punctuation ."]);
  });
  
  it("Слово длинее шести букв", function() {
    assert.deepEqual(verifity(/\w{6, 6}/, ["hottentottententen","no", "hotten totten tenten"]), ["hottentottententen"]);
  });
  
  it("Слово без букв e", function() {
    assert.deepEqual(verifity(/[^e]/, ["red platypus", "wobbling nest","earth bed", "learning ape"]), ["red platypus", "wobbling nest"]);
  });
});