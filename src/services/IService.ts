export default interface IService<T>{
    runchat(text: string):Promise<T>;
}