import { use, useEffect } from "react";
import { useState } from 'react';


const useOnlineStatus = () => {
    
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {

        window.addEventListener("offline", () => {
            alert("No Internet Connection!!");
        })

    }, [])


    return onlineStatus;


}

export default useOnlineStatus;