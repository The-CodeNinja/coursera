import React from 'react'

export default function LoadingComponent() {
    return (
        <div>
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"/>
            {console.log("loading...")}
        </div>
    )
}

