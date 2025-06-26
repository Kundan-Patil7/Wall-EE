import React, { createContext, useState } from 'react';


export const UserContext = createContext();


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(true);
    const [logincard, setlogincard] = useState(false);

    const value = {
        user,
        setUser,
        logincard, setlogincard,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
