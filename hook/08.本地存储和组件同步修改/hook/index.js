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

function useChangeLocalStorage(key) {
    const [value, setValue] = useState(localStorage.getItem(key))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[value])

    return [value, setValue];
}
export { useUserToken, useScrollY, useChangeLocalStorage }