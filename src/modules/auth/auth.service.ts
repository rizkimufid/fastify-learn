export class UserService {

  private users = [
     {
       id: '1',
       name: 'Rizki',
       email: 'rizki@example.com',
     },
     {
       id: '2',
       name: 'Budi',
       email: 'budi@example.com',
     },
   ];
  async getUsers() {
    return this.users
  }

  async getUsersById(id: string) {
    const user = this.users.find((user) => user.id === id)
    return user
  }
}
