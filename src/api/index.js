const ballProducts = [
  {
    id: "e4cb250df1229a7850ea705585d1c310",
    name: "Futsal Maestro",
    type: "soccer-ball",
    price: "25",
    sizes: [ "YOUTH" , "PRO" ],
    image: "https://o.remove.bg/downloads/104962e4-4917-42c9-aba5-58b30b63e0f3/futsal-maestro-soccer-ball-v7ZHCr-removebg-preview.png",
    color: {
      name: "Nike White",
      nameHex: null,
      hex: "#E52829"
    }
  },
  {
    id: "cdadad2b724f5a34d6ce97a73bbf8e02",
    name: "Premier League Flight",
    type: "soccer-ball",
    price: "160",
    sizes: [ 5 ],
    image: "https://o.remove.bg/downloads/1179065b-43c2-47be-886a-03c58c390974/premier-league-flight-soccer-ball-0QpPjJ-removebg-preview.png",
    color: {
      name: "Nike Yellow",
      nameHex: "#011F7C",
      hex: "#DADD00"
    }
  },
  {
    id: "42ebe3d266c8e4aeed71c7d155f1ef53",
    name: "Copa América Strike",
    type: "soccer-ball",
    price: "30",
    sizes: [ 4, 5 ],
    image: "https://o.remove.bg/downloads/f0678042-47ef-4205-b7b3-7a78f8884bd2/copa-am%C3%A9rica-strike-soccer-ball-Ntw0wS-removebg-preview.png",
    color: {
      name: "Nike White",
      nameHex: null,
      hex: "#EC1F31"
    }
  },

  {
    id: "3b984fb03b36cd3663f4cacee1deef0a",
    name: "Starlancer Club Ball",
    type: "soccer-ball",
    price: "16",
    sizes: [ 3, 4, 5 ],
    image: "https://o.remove.bg/downloads/1ce5c906-8b94-45f1-bdc6-b5a788068549/Starlancer_Club_Ball_Blue_FS6119_01_standard-removebg-preview.png",
    color: {
      name: "Adidas Blue",
      nameHex: null,
      hex: "#357CD3"
    }
  },
  {
    id: "7f995288125ddf6b354bd68fcd28c7aa",
    name: "Uniforia Training Ball",
    type: "soccer-ball",
    price: "30",
    sizes: [ 3, 4, 5 ],
    image: "https://o.remove.bg/downloads/448f8fc1-b699-40c0-ad2b-650375d69880/Uniforia_Training_Ball_Black_FP9745_01_standard-removebg-preview.png",
    color: {
      name: "Adidas Black",
      nameHex: null,
      hex: "#232127"
    }
  },
  {
    id: "b528e2a750645651fb4c577e3119cd35",
    name: "Nativo XXV Club",
    type: "soccer-ball",
    price: "20",
    sizes: [ "SINGLE" ],
    image: "https://o.remove.bg/downloads/4db4e486-f689-4027-ab2b-89ff75412606/MLS_Nativo_XXV_Club_Ball_Green_FS6116_01_standard-removebg-preview.png",
    color: {
      name: "Adidas Solar Green",
      nameHex: "#333",
      hex: "#ACEA53"
    }
  },
];

const soccerShoesProducts = [
  {
    id: "9fa9917b720fe57888b8c39105db8843",
    name: "X Ghosted.1",
    type: "soccer-shoe",
    price: "180",
    sizes: [ 10, 11, 12 ],
    image: "https://o.remove.bg/downloads/287d6f26-75a9-4994-9be3-bc9a779c8cdd/X_Ghosted.1_Firm_Ground_Cleats_Yellow_FW6898_01_standard-removebg-preview.png",
    color: {
      name: "Adidas Solar Yellow",
      nameHex: null,
      hex: "#C3E680"
    }
  },
  {
    id: "9a2cccc8edf846c002577f6739f987e2",
    name: "Copa Sense.3 Laceless",
    type: "soccer-shoe",
    price: "100",
    sizes: [ 10, 11, 12 ],
    image: "https://o.remove.bg/downloads/c17eb9dc-de3e-4fed-b75e-54a1cb557718/Copa_Sense.3_Laceless_Firm_Ground_Cleats_White_FW7268_01_standard-removebg-preview.png",
    color: {
      name: "Adidas Shock Pink",
      nameHex: null,
      hex: "#FF66AA"
    }
  },
  {
    id: "aaf223e352f26c5cb1655bbca7b3bfad",
    name: "Marvel X Ghosted.3",
    type: "soccer-shoe",
    price: "80",
    sizes: [ 10, 11, 12 ],
    image: "https://o.remove.bg/downloads/dd102439-4e09-4655-9c8f-4b0ce7e30895/Marvel_X_Ghosted.3_Firm_Ground_Cleats_Blue_FZ1757_01_standard-removebg-preview.png",
    color: {
      name: "Adidas Bright Yellow",
      nameHex: null,
      hex: "#EFEA53"
    }
  },
  {
    id: "c7a7f6bff8455fb5c5fe82bc55a6cf66",
    name: "Mercurial Superfly-8 Elite-FG",
    type: "soccer-shoe",
    price: "275",
    sizes: [ 10, 11, 12 ],
    image: "https://o.remove.bg/downloads/178b7021-45c5-49b6-9e13-83033da460c1/mercurial-superfly-8-elite-fg-firm-ground-soccer-cleat-DBtHQg-removebg-preview.png",
    color: {
      name: "Nike Lime Glow",
      nameHex: null,
      hex: "#75D0C5"
    }
  },
  {
    id: "4ceff8f489a9962580e7d7f07d7073db",
    name: "Phantom-GT Academy Dynamic Fit-3D-MG",
    type: "soccer-shoe",
    price: "275",
    sizes: [ 10, 11, 12 ],
    image: "https://o.remove.bg/downloads/257c5a0d-99cb-412a-9876-8bdc14008ba5/phantom-gt-academy-dynamic-fit-3d-mg-multi-ground-soccer-cleat-jSCqZS-removebg-preview.png",
    color: {
      name: "Nike Chlorine Blue",
      nameHex: null,
      hex: "#2963A5"
    }
  },
  {
    id: "1b796a1eb4a3715f2db6ba748e8d6d2d",
    name: "Mercurial Superfly-8 Academy By-You",
    type: "soccer-shoe",
    price: "110",
    sizes: [ 10, 11, 12 ],
    image: "https://o.remove.bg/downloads/86fe58c2-f00a-4a23-86ed-68c1e9f81615/custom-nike-mercurial-superfly-8-academy-by-you-removebg-preview.png",
    color: {
      name: "Nike Wine Red",
      nameHex: null,
      hex: "#7A305D"
    }
  },
];


export {
  ballProducts,
  soccerShoesProducts
}