const users = [
    'Carlos',
    'Carlos',
    'Matt',
    'Nancy',
    'Adam',
    'Nancy'
];

console.log({ users });

const unique = Array.from(new Set(users));

console.log({ unique });