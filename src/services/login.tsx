import { api } from "../api"

export const login = async (email: string, senha: string): Promise<boolean> => {
    const data: any = await api
    console.log(data)
    if(email !== data.email) {
        console.log(email)
        return false
    }
    if(senha !== data.password) {
        console.log(senha)
        console.log(data.password)
        return false
    }

    return true
}
