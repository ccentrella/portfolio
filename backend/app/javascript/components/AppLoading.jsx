import React, { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';

function AppLoading() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.onreadystatechange = () => {
            setIsLoaded(document.readyState === 'complete');
        };

        // Set loaded to true if readyState is already complete
        if (document.readyState === 'complete') {
            setIsLoaded(true);
        }

        return () => (document.onreadystatechange = null);
    });

    return !isLoaded && <LoadingScreen></LoadingScreen>;
}

export default AppLoading;
