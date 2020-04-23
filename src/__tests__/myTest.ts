import { parse } from '../parser';
import { fixturePath } from './testUtils';

const result = parse([fixturePath('Column')], {
  shouldExtractLiteralValuesFromEnum: true,
  shouldExtractValuesFromInterfaces: true
});

console.log(
  '----------------------------RESULTS--------------------------------'
);
console.log('----------------------------PROP5-------------------------------');
console.log(JSON.stringify(result[0].props.prop5, null, 2));
console.log('----------------------------PROP6-------------------------------');
console.log(JSON.stringify(result[0].props.prop6, null, 2));
console.log('----------------------------PROP7-------------------------------');
console.log(JSON.stringify(result[0].props.prop7, null, 2));
