import React from "react";
export const WebDate = () => {
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
    // console.log(newDate);
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const dateSTR = `${date}th, ${monthNames[month]}, ${year}`
    // console.log(dateSTR);
    // return dateSTR;
    return (
        <>
            <p>{dateSTR}</p>
        </>
    )
};