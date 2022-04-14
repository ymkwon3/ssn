const timeConvert = (time) => {
  const hour = Math.floor(time / 60);
  const minute = Math.floor(time % 60);
  return `${hour}시간 ${minute}분`;
}

export {timeConvert};