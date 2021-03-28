import React from 'react';
// import IconTk from './Icon/Tank.png';
// import IconFg from './Icon/Fighter.png';
// import IconAs from './Icon/Assassin.png';
// import IconMg from './Icon/Mage.png';
// import IconMm from './Icon/Marksman.png';
// import IconSp from './Icon/Support.png';

const Card = ({heroname, role, role2, image, specialty, specialty2}) => {
    var col1; // bg col basic
    var col2; // bg col hover
    // var IcRole; // icon
    // var roleAll; // role
    // var spcAll; // specialty
    if (role === 'Tank') {
        col1 = "bg-yellow-600";
        col2 = "bg-yellow-500";
        // IcRole = IconTk;
      } else if (role === 'Fighter') {
        col1 = "bg-red-500";
        col2 = "bg-red-400";
        // IcRole = IconFg;
      } else if (role === 'Assassin') {
        col1 = "bg-pink-400";
        col2 = "bg-pink-300";
        // IcRole = IconAs;
      } else if (role === 'Mage') {
        col1 = "bg-indigo-500";
        col2 = "bg-indigo-400";
        // IcRole = IconMg;
      } else if (role === 'Marksman') {
        col1 = "bg-yellow-300";
        col2 = "bg-yellow-200";
        // IcRole = IconMm;
      } else {
        col1 = "bg-green-400";
        col2 = "bg-green-300"; 
        // IcRole = IconSp;
      } // bg color and icon
    // if (role2 === ''){
    //     roleAll = role;
    //   } else {
    //     roleAll = `${role} / ${role2}`;
    //   } // roleAll
    // if (specialty2 === ''){
    //     spcAll = specialty;
    //   } else {
    //     spcAll = `${specialty} / ${specialty2}`;
    //   } // specilaty all in

    return (
        <div id='kartu' className={`text-center inline-grid justify-items-center ${col1} rounded-md shadow-md p-1 md:py-2 m-1.5 transition duration-300 ease-in-out transform hover:${col2} hover:-translate-y-1 hover:scale-110`}>
            <img className='object-cover object-center rounded-lg h-24 w-24 md:h-32 md:w-32 border-2' src={process.env.PUBLIC_URL + `${image}`} alt={heroname} />
            <div>
                <h1 className='pt-1 text-xs font-semibold md:text-lg md:font-extrabold'>{heroname}</h1>
                {/* <h3 className='text-sm font-semibold italic tracking-tight'>{roleAll}</h3>
                <p className='text-xs tracking-tighter'>{spcAll}</p> */}
            </div>
        </div>
    )
}

export default Card;
