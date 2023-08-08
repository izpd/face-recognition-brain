import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt 
        className="Tilt br2 shadow-2" 
        tiltMaxAngleX={55} 
        tiltMaxAngleY={55} 
        style={{ height: 150, width: 150 }} 
      >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo; 


// testing code transitioning from react-tilt to react-parallax-tilt
// const Logo = () => {
//   return (
//     <div className='ma4 mt0'>
//       <Tilt 
//         className='Tilt br2 shadow-2' 
//         tiltMaxAngleX={55} 
//         tiltMaxAngleY={55}
//       >
//         {/* <div style={{ height: '150px', width: '150px', backgroundColor: 'transparent' }}> */}
//         <div 
//           className='Tilt-inner pd3' 
//           style={{ height: '150px', width: '150px' }}
//         >
//           <img style={{paddingTop: '5px'}} alt='logo' src={brain} />
//         </div>
//         {/* </div> */}
//       </Tilt>
//     </div>
//   );
// }