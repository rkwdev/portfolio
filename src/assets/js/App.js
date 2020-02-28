const $ = require('jquery')

import Person from './modules/Person'

const john = new Person('John Doe', 'gre')
john.greet()

const jane = new Person('Jane smith', 'red')
jane.greet()