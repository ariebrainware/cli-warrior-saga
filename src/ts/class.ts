// Class
class Human {
  private humanName: string

  constructor(name: string) {
    this.humanName = name
  }
  isLoggedIn(value: boolean = false) {
    return value
  }

  greet() {
    console.log(`Hello ${this.humanName}`)
  }

  login(username?: string, password?: string) {
    if (
      username &&
      password &&
      (username === 'admin' && password === 'admin')
    ) {
      console.log('Access granted')
    } else {
      console.log('Wrong credentials')
    }
  }
}

let human1 = new Human('James Smith')
human1.greet()

class Commander extends Human {
  constructor(humanName: string) {
    super(humanName)
    interface Status {
      attack: number
      name: string
      hp: number
    }

    let status: Status = {
      attack: 250,
      hp: 500,
      name: 'Legion Commander'
    }
  }
  attack(rage: boolean = false) {}
  showStatus() {}
}
