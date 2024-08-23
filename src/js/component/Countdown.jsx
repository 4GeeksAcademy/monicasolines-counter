// //ignorar

// import React, { useState, useEffect } from 'react';

// export const Countdown = () => {
//     const [number, setNumber] = useState(10); // Empezamos con 10 por defecto

//     useEffect(() => {
//        setInterval(() => {
//                 setNumber(number => number - 1);
//             }, 1000);
        
//     }, [number]);

    
//     return (
//         <div className="container-fluid d-flex flex-column row justify-content-center align-items-center">
//             <div className="col-5 text-center border m-3 border-dark rounded bg-light p-1">
//                 <p> Este es tu countdown <strong> {number} </strong>  </p>
//                 <label> Ingrese un numero para el coundown </label>
//                 <input type="number" className="form-control" id="coundownNum" value={number} onChange={input} />
//             </div>
//         </div>
//     )

// }

