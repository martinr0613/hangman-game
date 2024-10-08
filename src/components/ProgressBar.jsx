import React from 'react'

export default function ProgressBar({progress}) {
  return (
    <div className="progressbar-container">
      <div className="progressbar-outer">
        <div className="progressbar-inner">
            <div className="progressbar-fill"
                 style={{width:`${progress}%`}}>  
            </div>
        </div>
      </div>
      <svg height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style={{fill:"#D9472B"}} d="M256,478.609c-3.87,0-7.739-1.342-10.864-4.021c-15.408-13.201-30.343-25.848-44.729-38.022 C84.065,338.081,0,266.923,0,175.559C0,94.511,57.419,33.391,133.565,33.391c64.782,0,103.119,45.201,122.435,78.098 c19.316-32.897,57.652-78.098,122.435-78.098C454.581,33.391,512,94.511,512,175.559c0,91.364-84.065,162.522-200.408,261.005 c-14.386,12.174-29.321,24.821-44.729,38.022C263.739,477.266,259.87,478.609,256,478.609z"></path> <path style={{fill:"#D9472B"}} d="M266.864,474.587c15.408-13.201,30.343-25.848,44.729-38.022 C427.935,338.081,512,266.923,512,175.559c0-81.048-57.419-142.168-133.565-142.168c-64.782,0-103.119,45.201-122.435,78.098v367.12 C259.87,478.609,263.739,477.266,266.864,474.587z"></path> </g></svg>

    </div>
  )
}
