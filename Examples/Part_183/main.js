const persons = [
    {
      firstName: 'Rick',
      lastName: 'Sample',
      contact: {
        email: 'rick.sample@mail.com',
        phone: '0169/12345677'
      }
    },
    {
      firstName: 'Morty',
      lastName: 'Sample',
      contact: {
        email: 'morty.sample@mail.com',
        phone: '0169/12345679'
      }
    }
  ];
  
  for (const { firstName, lastName, contact: { email, phone } } of persons) {
    console.log(`${firstName} ${lastName}`);
    console.log(`E-Mail: ${email}`);
    console.log(`Phone: ${phone}`);
  }

/* output:
Rick Sample
E-Mail: rick.sample@mail.com 
Phone: 0169/12345677
Morty Sample
E-Mail: morty.sample@mail.com
Phone: 0169/12345679
*/
