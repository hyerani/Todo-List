// 날짜 생성
export const dateSet = (target) => {
  const date = new Date(target);
  const options = {
    year: '2-digit',
    month: 'short',
    weekday: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const dateKr = new Intl.DateTimeFormat('ko-KR', options).format(date);
  return dateKr;
};
