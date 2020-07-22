import React from 'react'
import { Link } from 'react-router-dom'

const TabButtons = () => {
    return(
        <div className="tabButtons">
            <Link to="/">
                <span className="online">Online</span>
            </Link>
            <Link to="/all">
                <span className="all">All</span>
            </Link>
            <Link to="/pending">
                <span className="pending">Pending</span>
            </Link>
            <Link to="/blocked">
                <span className="blocked">Blocked</span>
            </Link>
            <Link to="/add-friend">
                <span className="addFriend">Add a friend</span>
            </Link>
        </div>
    )
}

export default TabButtons