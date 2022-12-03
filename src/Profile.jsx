import React from 'react';




export default function Profile() {
  // const useSate = useState();
  return (
    <>
      <div className='nav'>
        <a href='#' className='title'>WISTIA</a>
        <ul className='one'>
          <li className='two'>
            <a href="#">Home</a>
            <a href="#">Student</a>
            <a href="#">Series</a>
            <a href="#">About</a>
          </li>
        </ul>
        <button className='button1'>Login</button>
        <button className='button2'>Started</button>
      </div>
      <img src='https://media.istockphoto.com/id/1401889153/photo/photo-of-cute-charming-nice-young-girt-point-finger-empty-space-hold-hand-waist-isolated-on.jpg?s=612x612&w=is&k=20&c=O2QhPp-CWhX7jDRm5h0106Wj4FYs_idhFtSZPkv0oQk='/>  
         <div className='div2'>
        <p className='content'><b className='text1'>Let Your videos do<br/> the work</b><br/><br/>Video marking software that makes it easy to<br/>
        find, engage, and grow your audience.
        </p>
        <button className='btn1'>Try for free</button>
        <button className='btn2'>Watch video</button>
      </div>
    </>

  )
}