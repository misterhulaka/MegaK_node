// console.log(Buffer);

const buff1 = Buffer.alloc(20);
console.log('Buffer1 ->', buff1);

buff1.write('Zażółć gęślą jaźń', 'utf8');
console.log('Buffer1 ->', buff1);
console.log('Buffer1 ->', buff1.toString('utf8'));
console.log('Buffer1 ->', buff1.length);

// console.log(Buffer.byteLength('ą','utf8'));

const buff2 = Buffer.from('Zażółć gęślą jaźń');
console.log('Buffer2 ->', buff2);
console.log('Buffer2 ->', buff2.toString('utf8'));
console.log('Buffer2 ->', buff2.length);

