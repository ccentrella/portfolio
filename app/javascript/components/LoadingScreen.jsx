import React, { useCallback, useEffect, useMemo, useState } from 'react';

function LoadingScreen() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.onreadystatechange = () =>
            setIsLoaded(document.readyState === 'complete');

        return () => (document.onreadystatechange = null);
    });

    return !isLoaded && <div className="loading-screen-backdrop"></div>;
}

export default LoadingScreen;
