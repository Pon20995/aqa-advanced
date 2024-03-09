class Human {
  constructor() {
    if (this.constructor == Human) {
      throw new Error('it is abstract class');
    }
  }
  eat() {
    console.log('eating');
  }
  listen() {
    console.log('listening');
  }
}
class Worker extends Human {
  constructor(salary, workTime) {
    super();
    this.salary = salary;
    this.workTime = workTime;
  }

  greetings() {
    console.log('Good morning');
  }
  farewell() {
    console.log('Bye. Work is finished');
  }

  isWorkingNow() {
    const now = new Date();
    const hours = now.getHours();
    if (hours > 9 && hours < 18) {
      console.log('Working time');
    } else {
      console.log('Now is not working time');
    }
  }
}

const worker = new Worker(1000, '9-18');
worker.isWorkingNow();
