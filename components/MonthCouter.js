'use client';

import { useState, useEffect } from 'react';

export default function MonthCounter({ startMonth, startYear, endMonth, endYear }) {
  const [result, setResult] = useState('');

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  function calculateMonthsPassed(sYear, sMonth, eYear, eMonth) {
    return (eYear - sYear) * 12 + (eMonth - sMonth + 1);
  }

  useEffect(() => {
    const today = new Date();

    // ถ้า endMonth หรือ endYear ไม่มี ให้ใช้เดือนปีปัจจุบัน (Present)
    const cMonth = endMonth ?? (today.getMonth() + 1);
    const cYear = endYear ?? today.getFullYear();

    const monthsPassed = calculateMonthsPassed(startYear, startMonth, cYear, cMonth);

    const startMonthName = monthNames[startMonth - 1];
    const endMonthName = monthNames[cMonth - 1];

    const endDisplay = (endMonth && endYear) ? `${endMonthName}  ${cYear}` : 'Present';

    setResult(` ${startMonthName} ${startYear} - ${endDisplay} · ${monthsPassed}  Month`);
  }, [startMonth, startYear, endMonth, endYear]);


  return (
    <p className="text-lg  text-purple-500">
    {result}
    </p>
  );
}
