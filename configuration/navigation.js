/**
 * navigation.js
 */

// Define navigation configurations
export const navigationConfig = {

  guestTopNav: [
    {
      title: "Home",
      href: "/user/home",
    },
  ],
  guestSideNav: [
    {
      title: "Example",
      data: [{
        title: "Home",
        href: "/user/home",
      },
      ]
    },
    {
      title: "Axasdple",
      data: [{
        title: "Example - One",
        href: "/user/example-one",
      },
      {
        title: "Example - Two",
        href: "/user/example-two"
      },
      ],
    }
  ],
};
