let string = `[({(<(())[]>[[{[]{<()<>>
  [(()[<>])]({[<{<<[]>>(
  {([(<{}[<>[]}>{[]{[(<()>
  (((({<>}<{<{<>}{[]{[]{}
  [[<[([]))<([[{}[[()]]]
  [{[{({}]{}}([{[{{{}}([]
  {<[[]]>}<{[{[{[]{()[[[]
  [<(<(<(<{}))><([]([]()
  <{([([[(<>()){}]>(<<{{
  <{([{{}}[<[[[<>{}]]]>[]]`;

let patternArr = string.split('\n');
let stack = [];
let open = ['(', '{', '<', '['];
let mapper = {
  '(': ')',
  '{': '}',
  '<': '>',
  '[': ']',
};
let found = {
  ')': 0,
  '}': 0,
  '>': 0,
  ']': 0,
};
for (line of patternArr) {
  // console.log(line);
  for (var i = 0; i < line.length; i++) {
    if (open.indexOf(line[i]) !== -1) {
      stack.push(line[i]);
    } else {
      let ele = mapper[stack.pop()];
      if (ele !== line[i]) {
        found[line[i]]++;
      }
    }
  }
}
console.log(found);
