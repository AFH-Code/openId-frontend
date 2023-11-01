export class User {

  constructor(
    public id: BigInteger,
    public firstName: string,
    public lastName: string,
    public username: string,
    public password: string,
    public connected_user: boolean
  ) {}
}
