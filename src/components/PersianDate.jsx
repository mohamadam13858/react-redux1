import moment from 'moment-jalaali';
import React, { useEffect, useState } from 'react';

const weekDays = [
    'یکشنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
    'شنبه',
];

const yearMonths = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
];

const PersianDate = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            let m = moment();
            let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${yearMonths[m.jMonth()]} ماه ${m.jYear()}`;
            setDate(finalDate);
            setTime(m.format("HH:mm"));
        };

        updateDateTime();
        const intervalId = setInterval(updateDateTime, 60000); // Update every minute

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <>
            <span className='mb-3 d-block text-center'>{date}</span>
            <span className='d-block text-center'>ساعت {time}</span>
        </>
    );
};

export default PersianDate;
