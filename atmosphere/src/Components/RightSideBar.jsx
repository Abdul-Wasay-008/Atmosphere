import React from 'react';

//Code for generating real time
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var ampm = hours >= 12 ? 'PM' : 'AM'; //Checking am or pm
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0' + minutes : minutes; // add leading zero to minutes
time = hours + ":" + minutes + " " + ampm;

function RightSideBar() {
    return (
        <div className="p-4 h-full relative">
            <div className="fixed top-1 right-4 mr-[205px] mt-[110px] text-2xl font-bold">
                {time}
            </div>
            <div className='fixed top-1 right-4 mr-[210px] mt-[200px] text-5xl'>
                30°
            </div>
            <div className="">
                <i className="fa-solid fa-wind fixed top-1 right-4 mt-[265px] mr-[218px]"><span className='ml-2'>6.1 KPH</span></i>
            </div>
            <div className="">
                <i className="fa-solid fa-droplet fixed top-1 right-4 mt-[295px] mr-[229px]"><span className='ml-2'>90 %</span></i>
            </div>
            <div className='fixed top-1 right-4 mt-[335px] mr-[208px]'>
                Feels like 38°
            </div>
            <div className='fixed top-1 right-4 mt-[385px] mr-[220px] text-3xl'>
                Clear
            </div>
            <div className='fixed top-1 right-4 mt-[480px] mr-[155px] font-bold text-3xl'>
                Hourly Forcast
            </div>
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
