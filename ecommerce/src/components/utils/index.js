export const navOptions = [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "listing",
      label: "All Products",
      path: "/product/listing/all-products",
    },
    {
      id: "listingMen",
      label: "Men",
      path: "/product/listing/men",
    },
    {
      id: "listingWomen",
      label: "Women",
      path: "/product/listing/women",
    },
    {
      id: "listingKids",
      label: "kids",
      path: "/product/listing/kids",
    },
  ];
  
  export const adminNavOptions = [
    {
      id: "adminListing",
      label: "Manage All Products",
      path: "/admin-view/all-products",
    },
    {
      id: "adminNewProduct",
      label: "Add New Product",
      path: "/admin-view/add-product",
    },
  ];

  //proper inputeve te register/login
  export const registrationFormControls = [
 
    {
      id: 'name',
      type : 'text',
      placeholder : 'Enter Your Name',
      label: 'Name',
      componentType : 'input'
    },
    {
      id: 'email',
      type : 'email',
      placeholder : 'Enter Your email',
      label: 'Email',
      componentType : 'input'
    },   {
      id: 'password',
      type : 'password',
      placeholder : 'Enter Your password',
      label: 'Password',
      componentType : 'input'
    },   
    {
      id: 'role',
      type : '',
      placeholder : '',
      label: 'Role',
      componentType : 'select',
      options: [
        {
        id : 'admin',
        label : 'Admin', 
        },
        {
          id : 'costumer',
          label : 'Costumer', 
          },
      ],
    },
  ]
  export const loginFormControls = [
    {
      id: 'email',
      type: 'email',
      placeholder: 'Enter Your email',
      label: 'Email',
      componentType: 'input'
    },

    {
      id: 'password',
      type: 'password',
      placeholder: 'Enter Your password',
      label: 'Password',
      componentType: 'input'
    }
  ]
    //inputet e addProduct faqes

    export const adminAddProductformControls = [
      {
        id: "name",
        type: "text",
        placeholder: "Enter name",
        label: "Name",
        componentType: "input",
      },
      {
        id: "price",
        type: "number",
        placeholder: "Enter price",
        label: "Price",
        componentType: "input",
      },
      {
        id: "description",
        type: "text",
        placeholder: "Enter description",
        label: "Description",
        componentType: "input",
      },
      {
        id: "category",
        type: "",
        placeholder: "",
        label: "Category",
        componentType: "select",
        options: [
          {
            id: "men",
            label: "Men",
          },
          {
            id: "women",
            label: "Women",
          },
          {
            id: "kids",
            label: "Kids",
          },
        ],
      },
      {
        id: "deliveryInfo",
        type: "text",
        placeholder: "Enter deliveryInfo",
        label: "Delivery Info",
        componentType: "input",
      },
      {
        id: "onSale",
        type: "",
        placeholder: "",
        label: "On Sale",
        componentType: "select",
        options: [
          {
            id: "yes",
            label: "Yes",
          },
          {
            id: "no",
            label: "No",
          },
        ],
      },
      {
        id: "priceDrop",
        type: "number",
        placeholder: "Enter Price Drop",
        label: "Price Drop",
        componentType: "input",
      },
    ];
  
    export const AvailableSizes = [
      {
        id : 's',
        label: 'S'
      },
      {
        id : 'm',
        label: 'M'
      },
      {
        id : 'l',
        label: 'L'
      }
    ]

    export const firebaseConfig = {
      apiKey: "AIzaSyCrYX6Fnd3AAzk_VhuOBEa9TS-ZuJu01dc",
      authDomain: "next-js-ecommerce-1e2b9.firebaseapp.com",
      projectId: "next-js-ecommerce-1e2b9",
      storageBucket: "next-js-ecommerce-1e2b9.appspot.com",
      messagingSenderId: "318160014395",
      appId: "1:318160014395:web:646e3f3df93c4f8ad0a01e",
      measurementId: "G-BV8Z99GKGD"
    };
    export const firebaseStorageURL = 'gs://next-js-ecommerce-1e2b9.appspot.com';