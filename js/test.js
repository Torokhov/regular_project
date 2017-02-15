describe("verifity", function() {
  it("Наличие подстрок 'cat', 'car'", function() {
    assert.deepEqual(verifity(/ca[tr]/, ["my car", "bad cats", "camper", "high art"]), ["my car", "bad cats"]);
  });
  
  it("Наличие подстрок 'pop', 'prop'", function() {
    assert.deepEqual(verifity(/pr?op/, ["pop culture", "mad props", "plop"]), ["pop culture", "mad props"]);
  });
  
  it("Наличие подстрок 'ferry', 'ferrari'", function() {
    assert.deepEqual(verifity(/ferr[y(ari)]/, ["ferret", "ferry", "ferrari","ferrum", "transfer A"]), ["ferry", "ferrari"]);
  });
  
  it("Любое слово, заканчивающееся на 'ious'", function() {
    assert.deepEqual(verifity(/ious\b/, ["how delicious", "spacious room","ruinous", "consciousness"]), ["how delicious", "spacious room"]);
  });
  
  it("Пробел, за которым идёт точка, запятая, двоеточие или точка с запятой", function() {
    assert.deepEqual(verifity(/ [.,:;]/, ["bad punctuation .","escape the dot"]), ["bad punctuation ."]);
  });
  
  it("Слово длинее шести букв", function() {
    assert.deepEqual(verifity(/\w{6,}/, ["hottentottententen","no", "hotten totten tenten"]), ["hottentottententen", "hotten totten tenten"]);
  });
  
  it("Слово без букв e", function() {
    assert.deepEqual(verifity(/\b[^e]+?\b/, ["red platypus", "wobbling nest","earth bed", "learning ape"]), ["red platypus", "wobbling nest"]);
  });
});

describe("replaceQuotes", function() {
  it("Замена кавычек одинарных кавычек на двойные, исключая кавычки  в сокращениях слов типа aren’t", function() {
    assert.equal(replaceQuotes("What's fuck is this?"), "What's fuck is this?");
    assert.equal(replaceQuotes("Misha says: 'I am stupid'"), 'Misha says: "I am stupid"');
  });
});
