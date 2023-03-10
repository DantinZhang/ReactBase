import { useContext, useState, useEffect } from "react";
import { userContext, tokenContext } from "../context";

function useUserToken() {
    const userInfo = useContext(userContext);
    const token = useContext(tokenContext);
    return [userInfo, token]
}

function useScrollY() {
    const [scrollY, setScrollY] = useState();

    useEffect(() => {
        function getScrollY() {
            console.log(window.scrollY);
            setScrollY(window.scrollY);
        }
        window.addEventListener('scroll', getScrollY)
        return () => {
            window.removeEventListener('scroll', getScrollY)
        }
    }, [])

    return [scrollY];
}

export { useUserToken, useScrollY }