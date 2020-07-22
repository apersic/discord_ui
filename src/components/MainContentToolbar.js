import React from 'react'
import ToolbarButtons from './ToolbarButtons'
import TabButtons from './TabButtons'

const MainContentToolbar = () => {
    return(
        <div className="mainContentToolbar">
            <div className="icon">
                <svg x="0" y="0" class="icon-22AiRD" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd">
                <path fill="currentColor" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 
                13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)">
                </path></g></svg>
            </div> 
            <span className="title">Friends</span>
            <div className="separator"></div>
            <TabButtons />
            <ToolbarButtons />  
        </div>
    )
}

export default MainContentToolbar