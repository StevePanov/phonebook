const phoneBook = {};
const hello = 'hello'
function addPhone(nameUser, phoneUser, dateUser) {
  const has = phoneBook.hasOwnProperty;
  if (has.call(phoneBook, nameUser) === true) {
    phoneBook[nameUser].phone = phoneBook[nameUser].phone.concat(phoneUser);
  } else {
    phoneBook[nameUser] = {
      phone: phoneUser,
      dateBirth: new Date(dateUser),
    };
  }
}
function delPhone(numberDelete) {
  const keys = Object.keys(phoneBook);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const value = phoneBook[key];
    if (value.phone.indexOf(numberDelete) !== -1) {
      value.phone.splice(value.phone.indexOf(numberDelete), 1);
      if (value.phone.length === 0) {
        delete phoneBook[key];
      }
      return console.log(true);
    }
  } return console.log(false);
}
function showPhoneBook() {
  const result = [];
  const keysSorted = Object.keys(phoneBook).sort((a, b) =>
    phoneBook[a].dateBirth - phoneBook[b].dateBirth);
  const valueSorted = keysSorted.map(x => phoneBook[x]);
  for (let i = 0; i < keysSorted.length; i += 1) {
    const names = keysSorted[i];
    const value = valueSorted[i];
    const resultString = `${names}: ${value.phone} Дата рождения: ${value.dateBirth.toDateString()}`;
    result.push(resultString);
  }
  console.log(result);
}
function phoneFunction(command) {
  if (command.indexOf('ADD') !== -1) {
    const stringToMassive = command.split(' ');
    const nameContact = stringToMassive[1];
    let phoneContact = stringToMassive[2];
    phoneContact = phoneContact.toString();
    const phoneMassive = phoneContact.split(',');
    const dateContact = stringToMassive[3];

    addPhone(nameContact, phoneMassive, dateContact);
  }

  if (command.indexOf('REMOVE_PHONE') !== -1) {
    const stringToMassive = command.split(' ');
    const phoneDelete = stringToMassive[1];

    delPhone(phoneDelete);
  }
  if (command.indexOf('SHOW') !== -1) {
    showPhoneBook();
  }
}

phoneFunction('ADD Ramik 555-10-01,555-10-03 1996-07-12');
phoneFunction('ADD Ramik 555-10-02');
phoneFunction('REMOVE_PHONE 555-10-03');
phoneFunction('ADD Alex 555-20-01 1994-05-11');
phoneFunction('REMOVE_PHONE 555-20-01');
phoneFunction('ADD Ivan 555-09-03 1997-03-11');
phoneFunction('SHOW');
// hello
