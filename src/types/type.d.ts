declare interface IServerResponse<T = undefined> {
    message: string,
    data?: T
}