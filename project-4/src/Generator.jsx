import React, { useCallback, useEffect, useRef, useState } from "react";

const Generator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [alpha, setAlpha] = useState(true);
    const [numeric, setNumeric] = useState(false);
    const [username, setUsername] = useState("");

    const passwordRef = useRef(null);
    const userNameRef = useRef(null);

    const generatePassword = useCallback(() => {
        let str = "ABCDEFGHIJKLMNIOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let pass = "";
        if (numeric) str += "0123456789";
        if (alpha) str += "!@#$%^&*()_+{}:|<>?</>";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, alpha, numeric]);

    const generateUsername = useCallback(() => {
        let str2 = "ABCDEFGHIJKLMNIOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let name = "";
        if (username) str2 += "!@#$%&*";

        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * str2.length);
            name += str2.charAt(index);
        }
        setUsername(name);
    }, [length, username]);

    const copyPassword = useCallback(() => {
        if (password) {
            passwordRef.current?.select();
            passwordRef.current.setSelectionRange(0, 999999);
            window.navigator.clipboard.writeText(password);
        }
    }, [password]);

    const copyUsername = useCallback(() => {
        if (username) {
            userNameRef.current?.select();
            userNameRef.current.setSelectionRange(0, 99999);
            window.navigator.clipboard.writeText(username);
        }
    }, [username]);

    return (
        <div className="container mx-auto  box-content p-4 border-4 rounded-lg shadow-lg  w-auto h-auto bg-slate-300">
            <h1 className="text-4xl font-bold text-center my-5">Generator</h1>
            <div className="flex justify-center items-center">
                <input
                    type="text"
                    value={password}
                    placeholder="Copy password"
                    className="border-2 border-gray-300 p-2 rounded-md mr-5"
                    readOnly
                    ref={passwordRef}
                />
                <button onClick={generatePassword} className="rounded-lg box-content bg-white mx-1 px-2 py-2 text-sm font-bold">Generate Password</button>
                <button onClick={copyPassword} className="bg-blue-500 text-white p-2 rounded-lg">
                    Copy
                </button>
            </div>
            <div className="flex justify-center items-center my-5">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    className="border-2 border-gray-300 p-2 rounded-md mr-5"
                    placeholder="Enter Username"
                    readOnly
                    ref={userNameRef}
                />
                <button onClick={generateUsername} className="rounded-lg box-content bg-white mx-1 px-2 py-2 font-bold text-sm">Generate Username</button>
                <button onClick={copyUsername} className="bg-blue-500 text-white p-2 rounded-md">
                    Copy
                </button>
            </div>
            <div className="flex justify-center items-center my-5">
                <input
                    type="range"
                    min={7}
                    max={20}
                    value={length}
                    className="mr-5"
                    onChange={(e) => {
                        setLength(e.target.value);
                    }}
                />
                <label>Length: {length}</label>
            </div>
            <div className="flex justify-center items-center my-5">
                <div className="flex items-center mr-5">
                    <input
                        type="checkbox"
                        defaultChecked={numeric}
                        id="number"
                        onChange={() => {
                            setNumeric((prev) => !prev);
                        }}
                    />
                    <label htmlFor="number" className="ml-2">
                        Select Number
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        defaultChecked={alpha}
                        id="alpha"
                        onChange={() => {
                            setAlpha((prev) => !prev);
                        }}
                    />
                    <label htmlFor="alpha" className="ml-2">
                        Characters
                    </label>
                </div>
            </div>
          
        </div>
    );
};

export default Generator;
