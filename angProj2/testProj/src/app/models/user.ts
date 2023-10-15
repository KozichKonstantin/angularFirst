export interface UserAbb  {
    type : string,
    vision: boolean,
    changing: boolean
}
export const userTypes: UserAbb[] = [
    {
        type : 'authorized',
        vision : true,
        changing : false
    },
    {
        type: 'admin',
        vision : true,
        changing: true
    },
    {
        type: 'default',
        vision: false,
        changing: false
    }
]
export interface User {
    abilities : UserAbb,
    login: string,
    password: string
}
export const users: User [] = [
    {
        abilities : userTypes[0],
        login: 'user',
        password: 'password'
    },
    {
        abilities: userTypes[1],
        login: 'admin',
        password: 'sudoRootAdmin',
    }
]
export interface userAuth {
    login: string,
    password: string,
    abilities:string
}
