import React from 'react';

// Function to format the current time and greeting
function getTimeAndGreeting() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Checking AM or PM
    const formattedHours = hours % 12 || 12; // The hour '0' should be '12'
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero to minutes
    const currentTime = formattedHours + ":" + formattedMinutes + " " + ampm;

    const getGreeting = (hours) => {
        if (hours >= 5 && hours < 12) {
            return 'Good Morning';
        } else if (hours >= 12 && hours < 17) {
            return 'Good Afternoon';
        } else if (hours >= 17 && hours < 21) {
            return 'Good Evening';
        } else {
            return 'Good Night';
        }
    };

    const greeting = getGreeting(hours);

    return { currentTime, greeting };
};

function RightSideBar({ weatherData }) {
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { currentTime, greeting } = getTimeAndGreeting();
    const temperature = Math.round(weatherData.main.temp); // Temperature in Celsius
    const feelsLike = Math.round(weatherData.main.feels_like); // Feels like temperature in Celsius
    const windSpeed = weatherData.wind.speed; // Wind speed in KPH
    const humidity = weatherData.main.humidity; // Humidity percentage
    const weatherDescription = weatherData.weather[0].description;

    return (
        <div className="p-4 h-full relative">
            <div className="fixed top-1 right-4 mr-[205px] mt-[110px] text-2xl font-bold">
                {currentTime}
            </div>
            <div className='fixed top-1 right-4 mr-[210px] mt-[200px] text-5xl'>
                {temperature}°
            </div>
            <div className="">
                <i className="fa-solid fa-wind fixed top-1 right-4 mt-[265px] mr-[210px]">
                    <span className='ml-2'>{windSpeed} KPH</span>
                </i>
            </div>
            <div className="">
                <i className="fa-solid fa-droplet fixed top-1 right-4 mt-[295px] mr-[229px]">
                    <span className='ml-2'>{humidity} %</span>
                </i>
            </div>
            <div className='fixed top-1 right-4 mt-[335px] mr-[208px]'>
                Feels like {feelsLike}°
            </div>
            <div className='fixed top-1 right-4 mt-[385px] mr-[170px] capitalize text-2xl'>
                {weatherDescription}
            </div>
            <div className='fixed top-1 right-4 mt-[480px] mr-[155px] font-bold text-3xl'>
                Hourly Forecast
            </div>
            {/* Placeholder for hourly forecast */}
            <div className='fixed top-1 right-4 mt-[560px] mr-[100px]'>
                <div className="flex">
                    <div className='border-2 border-slate-400 rounded-xl w-24 p-3 text-center mr-3 '>
                        <div className='font-bold text-lg'>8 PM</div>
                        <div className='text-xl pt-2'>28°</div>
                        <div className='pt-3'>Clear</div>
                    </div>
                    <div className='border-2 border-slate-400 rounded-xl w-24 p-3 text-center mr-3'>
                        <div className='font-bold text-lg'>9 PM</div>
                        <div className='text-xl pt-2'>27°</div>
                        <div className='pt-3'>Clear</div>
                    </div>
                    <div className='border-2 border-slate-400 rounded-xl w-24 p-3 text-center'>
                        <div className='font-bold text-lg'>10 PM</div>
                        <div className='text-xl pt-2'>26°</div>
                        <div className='pt-3'>Clear</div>
                    </div>
                </div>
                <div className="flex">
                    <div className='border-2 border-slate-400 rounded-xl w-24 p-3 text-center mr-3 mt-4'>
                        <div className='font-bold text-lg'>11 PM</div>
                        <div className='text-xl pt-2'>25°</div>
                        <div className='pt-3'>Clear</div>
                    </div>
                    <div className='border-2 border-slate-400 rounded-xl w-24 p-3 text-center mr-3 mt-4'>
                        <div className='font-bold text-lg'>12 AM</div>
                        <div className='text-xl pt-2'>24°</div>
                        <div className='pt-3'>Clear</div>
                    </div>
                    <div className='border-2 border-slate-400 rounded-xl w-24 p-3 text-center mt-4'>
                        <div className='font-bold text-lg'>1 AM</div>
                        <div className='text-xl pt-2'>22°</div>
                        <div className='pt-3'>Clear</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSideBar;
