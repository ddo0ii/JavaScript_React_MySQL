const person = {};

const name = person.name ?? 'unknown';

const name =
  person.name === undefined || person.name === null ? 'unknown' : person.name;
