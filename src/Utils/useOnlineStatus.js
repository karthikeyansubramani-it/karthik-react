import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [isOnline, setOnline] = useState(true);

    useEffect(() => {

        window.addEventListener("offline", () => {
            setOnline(false);

        });

        window.addEventListener("online", () => {
            setOnline(true);
        });


    }, [])

    return isOnline;
}

export default useOnlineStatus;