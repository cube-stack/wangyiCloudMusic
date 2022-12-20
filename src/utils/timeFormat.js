const timeFormat = function (dtime) {
  const mfloor = (num) => Math.floor(num);
  let s = mfloor(dtime / 1000) % 60;
  if (s <= 9) s = "0" + s;
  let m = mfloor(dtime / 1000 / 60) % 60;
  if (m <= 9) m = "0" + m;
  let h = mfloor(dtime / 1000 / 60 / 60);
  if (h <= 9) h = "0" + h;
  const rtime =
    (h > 0 ? h + ":" : "") +
    (m > 0 ? m + ":" : "") +
    (s > 0 ? s : m > 0 ? "00" : "");
  return rtime;
};
export { timeFormat };
