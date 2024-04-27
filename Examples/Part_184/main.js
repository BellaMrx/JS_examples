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

  for (let {firstName:f, lastName:l, contact:{email:e, phone:p}} of persons) {
    console.log(`${f} ${l}`);
    console.log(`E-Mail: ${e}`);
    console.log(`Phone: ${p}`);
  }

/* output:
Rick Sample
E-Mail: rick.sample@mail.com 
Phone: 0169/12345677
Morty Sample
E-Mail: morty.sample@mail.com
Phone: 0169/12345679
*/