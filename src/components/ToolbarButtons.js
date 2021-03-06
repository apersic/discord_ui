import React from 'react'

const ToolbarButtons = () => {
    return(
        <div className="toolbarButtons">
                <div className="newGroupDM"><svg x="0" y="0" class="icon-22AiRD" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805 
                  20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 
                  -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z"></path></svg>
                </div>
                <div className="separator" id="toolbarSeparator"></div>
                <div className="inbox"><svg x="0" y="0" class="icon-22AiRD" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 
                  15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z" fill="currentColor"></path></svg>
                </div>
                <div className="help">
                  <svg x="0" y="0" class="icon-22AiRD" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 
                    12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 
                    15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 
                    8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 
                    13.875Z"></path></svg>
                </div>
        </div>
    )
}

export default ToolbarButtons