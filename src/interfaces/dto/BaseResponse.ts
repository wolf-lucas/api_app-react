export default interface BaseResponse<T>
{
    status: string,
    description: string,
    message: T,
}