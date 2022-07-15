/*
 * @Date: 2022-06-08 00:14:26
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-07-13 23:46:39
 * @FilePath: \toodoo\src\models\todo.d.ts
 */

interface Todo {
  type: string;
  id: number;
  title: string;
  description: ?string;
  status: number;
  finished: boolean;
  createdTime: string;
  updatedTime: string;
  expectedTime: ?string;
  finishedTime: ?string;
}

type Todos = Array<Todo>;
