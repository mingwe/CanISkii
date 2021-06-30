import React from 'react'

export const Loader = () => (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
)