import { user_model } from "../managers/models/User"

export const initDataTables = [
    { tableName: 'user', model: user_model },
]

export const usersInit = [
    { username: 'admin', password: 'admin', email: 'admin@admin.com', isAdmin: true }
]

// 현실은 form에서 오는 데이터가 들어가야하는건데 그 정보가 insert문으로 들어가줘야한다. 