
import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillVideoCamera} from 'react-icons/ai'
function indexx() {
    return (
        <div className="video">
           
                  <Link className="link" to="/jisti">
            <AiFillVideoCamera/>
            </Link>
          
        </div>
    )
}

export default indexx
