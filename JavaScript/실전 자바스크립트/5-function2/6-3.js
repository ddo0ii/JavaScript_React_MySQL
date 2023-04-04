function f1({ p1, p3, ...rest }) {
  console.log({ p1, p3, rest });
}

f1({ p1: 'a', p2: 'b', p3: 'c', p4: 'd' });
f1({ p1: 'a', p3: 'b' });
