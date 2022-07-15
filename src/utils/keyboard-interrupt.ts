/*
 * @Date: 2022-06-14 15:19:33
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-06-14 16:45:14
 * @FilePath: /toodoo/src/utils/KeyboardInterrupt.ts
 */
export default function KeyboardDance(key: string) {
  console.log(`${key} is pressed`);
  switch (key) {
    case 'Escape':
      console.log('Escape is pressed');
      return 'escape';
    case 'q':
      return 'create';
    case 'a':
      console.log('a');
      return 'a';
      break;
    case 'b':
      console.log('b');
      return 'b';
      break;
    default:
      console.log('default');
      return 'default';
  }
}
