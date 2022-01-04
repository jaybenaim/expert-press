const fs = require('fs')

// Read
fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
  }
  const jsonData = JSON.parse(data)
  console.log('jsonData', jsonData)
})

// Write
const data = {
  name: 'John Doe',
  age: 35,
  city: 'Collingwood'
}

fs.writeFile('./newData.json', JSON.stringify(data), err => {
  if (err) {
    console.error(err)
  }
})
