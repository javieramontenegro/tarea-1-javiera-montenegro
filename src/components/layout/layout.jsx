import React from 'react'

const layout = ({children}) => {
    return (
        <div className=" w-full lg:w-4/5  h-full flex justify-center mt-4 flex-wrap mx-auto">
            {children}
        </div>
    )
}

export default layout
