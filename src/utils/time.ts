/*
 * @Date: 2022-06-14 15:11:36
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-06-14 15:17:13
 * @FilePath: /toodoo/src/utils/time.ts
 */
import dayjs from 'dayjs';

const currentTime = () => dayjs().format('YYYY-MM-DD HH:mm:ss');

const today = () => dayjs().format('YYYY-MM-DD');

const isTomorrow = (date: string) => {
  const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
  return tomorrow === date;
};

const isTheDayAfterTomorrow = (date: string) => {
  const theDayAfterTomorrow = dayjs().add(2, 'day').format('YYYY-MM-DD');
  return theDayAfterTomorrow === date;
};

const isWeekend = (date: string) => {
  const day = dayjs(date).day();
  return day === 0 || day === 6;
};

export {
  today,
  currentTime,
  isTomorrow,
  isTheDayAfterTomorrow,
  isWeekend,
};
