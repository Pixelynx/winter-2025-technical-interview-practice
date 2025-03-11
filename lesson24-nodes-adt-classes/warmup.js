// create an object representation of a family tree (3 levels deep minimum)

const familyTree = {
    name: "Bardock",
    age: 70,
    relationship: "Grandfather",
    children: [
      {
        name: "Goku",
        age: 50,
        relationship: "Son",
        children: [
          {
            name: "Gohan",
            age: 30,
            relationship: "Grandson",
            children: [
              {
                name: "Pan",
                age: 5,
                relationship: "Great-Granddaughter"
              }
            ]
          }
        ]
      },
    ]
  };
  