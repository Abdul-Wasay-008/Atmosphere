// import React, { useState } from "react";
// import "../assets/styles/Header.css";

// // Code for generating real date
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
// var yyyy = today.getFullYear();
// today = dd + '.' + mm + '.' + yyyy;

// // Function to format the current time and greeting
// function getTimeAndGreeting() {
//     const time = new Date();
//     const hours = time.getHours();
//     const minutes = time.getMinutes();
//     const ampm = hours >= 12 ? 'PM' : 'AM'; // Checking AM or PM
//     const formattedHours = hours % 12 || 12; // The hour '0' should be '12'
//     const formattedMinutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero to minutes
//     const currentTime = formattedHours + ":" + formattedMinutes + " " + ampm;

//     const getGreeting = (hours) => {
//         if (hours >= 5 && hours < 12) {
//             return 'Good Morning';
//         } else if (hours >= 12 && hours < 17) {
//             return 'Good Afternoon';
//         } else if (hours >= 17 && hours < 21) {
//             return 'Good Evening';
//         } else {
//             return 'Good Night';
//         }
//     };

//     const greeting = getGreeting(hours);

//     return { currentTime, greeting };
// };

// function Header({ onCityChange }) {
//     const [cityInput, setCityInput] = useState('');

//     const handleInputChange = (event) => {
//         setCityInput(event.target.value);
//     };

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         onCityChange(cityInput);
//     };

//     return (
//         <div>
//             <div className="header mt-14 ml-32 text-xl flex justify-between">
//                 <header>
//                     <form onSubmit={handleFormSubmit}>
//                         <input
//                             className="border-b text-lg bg-transparent placeholder-white focus:outline-none focus:border-b-2 w-40 placeholder:text-base"
//                             type="text"
//                             value={cityInput}
//                             onChange={handleInputChange}
//                             placeholder="Enter City Name"
//                         />
//                         <button type="submit" className="hidden">Submit</button>
//                         <i className="fa-solid fa-location-dot pl-2"></i>
//                     </form>
//                 </header>
//                 <header>{today}</header>
//                 <header className="mr-[170px] text-3xl font-bold">Good Morning</header>
//             </div>
//         </div>
//     )
// }

// export default Header;
import React, { useState, useEffect } from "react";
import "../assets/styles/Header.css";

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
}

function Header({ onCityChange }) {
    const [cityInput, setCityInput] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const { currentTime, greeting } = getTimeAndGreeting();
        setCurrentTime(currentTime);
        setGreeting(greeting);
        
        // Update time every minute
        const intervalId = setInterval(() => {
            const { currentTime, greeting } = getTimeAndGreeting();
            setCurrentTime(currentTime);
            setGreeting(greeting);
        }, 60000); // Update every minute

        return () => clearInterval(intervalId);
    }, []);

    const handleInputChange = (event) => {
        setCityInput(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onCityChange(cityInput);
    };

    // Code for generating real date
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const formattedDate = dd + '.' + mm + '.' + yyyy;

    return (
        <div>
            <div className="header mt-14 ml-32 text-xl flex justify-between">
                <header>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            className="border-b text-lg bg-transparent placeholder-white focus:outline-none focus:border-b-2 w-40 placeholder:text-base"
                            type="text"
                            value={cityInput}
                            onChange={handleInputChange}
                            placeholder="Enter City Name"
                        />
                        <button type="submit" className="hidden">Submit</button>
                        <i className="fa-solid fa-location-dot pl-2"></i>
                    </form>
                </header>
                <header>{formattedDate}</header>
                <header className="mr-[152px] text-3xl font-bold">{greeting}</header>
            </div>
        </div>
    );
}

export default Header;

