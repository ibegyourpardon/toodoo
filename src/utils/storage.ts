/*
 * @Date: 2022-06-08 12:29:37
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-06-08 23:33:32
 * @FilePath: \toodoo\src\api\storage.ts
 */
import { EncryptStorage } from 'encrypt-storage';

const encryptData = new EncryptStorage('yourown-toodoo-key');

const saveData = (data: Todos) => {
  localStorage.setItem('toodoo', encryptData.encryptString(JSON.stringify(data)));
};

const loadData = (): Todos | undefined => {
  const data = localStorage.getItem('toodoo');
  if (data) {
    return JSON.parse(encryptData.decryptString(data));
  }
  return undefined;
};

export { saveData, loadData };
