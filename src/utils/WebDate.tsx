import React, { useEffect, useState } from "react";

const WebDate = () => {
    const monthNames: string[] = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    const newDate: any = new Date();
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const TodayDate = `${date}th, ${monthNames[month]}, ${year}`;
    const [dateStr, setDateStr] = useState("");
    // console.log(dateStr);

    useEffect(() => {
        setDateStr(TodayDate);
    }, [TodayDate]);
    return (
        <>
            <p>{dateStr}</p>
        </>
    );
};
export default WebDate;
