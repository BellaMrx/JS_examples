const contacts = [
    {
      firstName: 'John ',
      lastName: 'Doe',
      email: 'john.doe@mail.com'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@mail.com'
    },
    {
      firstName: 'Rick ',
      lastName: 'Sample',
      email: 'rick.sample@mail.com'
    }
  ];
  
  function createTable() {
    const tableBody = document.querySelector('#contact-table tbody');
    for(let i=0; i<contacts.length; i++) {
      // For the current contact ...
      const contact = contacts[i];
      // ... a new line is created.
      // (1)
      const tableRow = document.createElement('tr');
      // Various cells are created within the row ...
      // (2)
      const tableCellFirstName = document.createElement('td');
      // ... and each filled with values.
      // (3)
      const firstName = document.createTextNode(contact.firstName);
      // (4)
      tableCellFirstName.appendChild(firstName);
      // (5)
      const tableCellLastName = document.createElement('td');
      // (6)
      const lastName = document.createTextNode(contact.lastName);
      // (7)
      tableCellLastName.appendChild(lastName);
      // (8)
      const tableCellEmail = document.createElement('td');
      // (9)
      const email = document.createTextNode(contact.email);
      // (10)
      tableCellEmail.appendChild(email);
      // (11)
      tableRow.appendChild(tableCellFirstName);
      // (12)
      tableRow.appendChild(tableCellLastName);
      // (13)
      tableRow.appendChild(tableCellEmail);
      // (14)
      tableBody.appendChild(tableRow);
    }
  }
  