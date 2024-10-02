import { UserContext } from "./UserContext"

export const UserProvider = ({ children }: any) => {
    return (
        <UserContext.Provider
            value={{
                name: "John Doe",
                email: "",
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
