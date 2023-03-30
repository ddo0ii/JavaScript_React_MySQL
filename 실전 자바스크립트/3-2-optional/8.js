const name =
  person &&
  person.friends &&
  person.friends[0] &&
  person.friends[0].mother &&
  person.friends[0].mother.name;

const name2 = person?.friends?.[0]?.mother?.name;
