// 倒计时函数
const countDown = (endTime) => {
    let result = {
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    // 注意平年,闰年的问题
    let isLeapYear = false;
    let fullYearDays = 365;
    const curFullYears = new Date().getFullYear();

    // 年份可以被4整除的称为闰年， 闰年有366天，平年有355天
    if (curFullYears % 4 === 0) {
        isLeapYear = true;
        fullYearDays = 366;
    }

    const ONE_MILLISECOND_MILLISECONDS = 1;
    const ONE_SECOND_MILLISECONDS = ONE_MILLISECOND_MILLISECONDS * 1000;
    const ONE_MINUTE_MILLISECONDS = ONE_SECOND_MILLISECONDS * 60;
    const ONE_HOUR_MILLISECONDS = ONE_MINUTE_MILLISECONDS * 60;
    const ONE_DAY_MILLISECONDS = ONE_HOUR_MILLISECONDS * 24;
    const ONE_YEAR_MILLISECONDS = ONE_DAY_MILLISECONDS * fullYearDays;

    // 当前的时间戳
    const nowTime = Date.now();
    // 时间差
    const diffTime = endTime - nowTime;
    // 将时间差（ms）->转换为years，days,hours,minutes, seconds
    const years = Math.floor(diffTime / ONE_YEAR_MILLISECONDS);
    const days = Math.floor(diffTime % ONE_YEAR_MILLISECONDS / ONE_DAY_MILLISECONDS);
    const hours = Math.floor(diffTime % ONE_YEAR_MILLISECONDS % ONE_DAY_MILLISECONDS / ONE_HOUR_MILLISECONDS);
    const minutes = Math.floor(diffTime % ONE_YEAR_MILLISECONDS % ONE_DAY_MILLISECONDS % ONE_HOUR_MILLISECONDS / ONE_MINUTE_MILLISECONDS);
    const seconds = Math.floor(diffTime % ONE_YEAR_MILLISECONDS % ONE_DAY_MILLISECONDS % ONE_HOUR_MILLISECONDS % ONE_MINUTE_MILLISECONDS / ONE_SECOND_MILLISECONDS);

    result = {
        years,
        days,
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds
    };

    return result;
};

const endTime = 1610159402000;
const nowTime = Date.now();
let timerID = 0;

if (endTime - nowTime > 0) {
    timerID = setInterval(() => {
        const { years, days, hours, minutes, seconds } = countDown(endTime);

        console.log(`${years}年 ${days}天 ${hours} : ${minutes} : ${seconds}`);
    }, 1000);
} else {
    clearInterval(timerID);
}


