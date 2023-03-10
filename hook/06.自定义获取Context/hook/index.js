import { useContext } from "react";
import { userContext, tokenContext } from "../context";

function useUserToken() {
    const userInfo = useContext(userContext);
    const token = useContext(tokenContext);
    return [userInfo, token]
}

export {useUserToken}