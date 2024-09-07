const users = [
    { id: 1, name: "Test one", username: "test1", password: "password",email:"test1@test.com" },
    { id: 2, name: "Test two", username: "test2", password: "password",email:"test2@test.com" },
    { id: 3, name: "Test three", username: "test3", password: "password",email:"test3@test.com" },
  ]
  export const getUserByEmail = (email: string) =>{
    
    const foundUser = users.find(user => user.email === email);
    return foundUser || null
    }
  
