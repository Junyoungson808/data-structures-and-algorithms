'use strict';

const Hashtable = require('../hashtable/hashtable');
const hashmapLeftJoin = require('../hashmap-left-join/index');

describe('Left Join Hashmap Testing', ()=> {
  test('Should return an array of objects', () => {
    let table1 = new Hashtable(300);
    let table2 = new Hashtable(300);
    table1.set('1','2');
    table1.set('3','4');
    table1.set('5','6');
    table2.set('7','8');
    table2.set('9','10');
    table2.set('11','12');

    let leftJoinResult = hashmapLeftJoin(table1,table2);

    expect(leftJoinResult).toStrictEqual([{}]);
  });
});
