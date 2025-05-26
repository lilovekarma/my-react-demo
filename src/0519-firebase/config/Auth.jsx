import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "./config/firebase"
import { googleProvider } from "./firebase";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    /* 查看資訊 */
    console.log(auth?.currentUser?.email);

    /* 帳密登入 */
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);

        }
    };
    /* google登入 */
    const singnInwithGoogle=async()=>{
        try{
            await singnInwithGoogle(auth,googleProvider);
        }catch(err){
            console.error(err);
        }
    }
    //登出
    const logout=async()=>{
        try{
            await signOut(auth);
        }catch(err){
            console.error(err);
        }
    }
    return (
        <>
            <div>
                {/* 輸入email */}
                <input type="text" placeholder="請輸入Email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* 輸入密碼 */}
                <input type="password" placeholder="請輸入密碼..."
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={signIn}>帳密登入</button>
                <button onClick={singnInwithGoogle}>google登入</button>
                <button onClick={logout}>登出</button>
            </div>
        </>
    )
}