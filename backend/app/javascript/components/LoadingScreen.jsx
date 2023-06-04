import React, { useEffect, useState } from 'react';

function LoadingScreen({ children }) {
    
    return <div className="loading-screen-backdrop">{children}</div>;
}

export default LoadingScreen;
