import { createMachine, assign } from "xstate";

export const navHoverMachine = createMachine({
  id: "navHoverMachine",
  initial: "idle",
  context: {
    x: null,
  },
  states: {
    idle: {
      after: {
        // Highliter comes slidking in from left to right.  This updates the css after load
        200: { target: "about", actions: assign({ x: -300 }) },
      },
    },
    about: {
      on: {
        DAILYS: {
          target: "dailys",
          actions: assign({ x: -226 }),
        },
        BLOG: {
          target: "blog",
          actions: assign({ x: -156 }),
        },
        CONTACT: {
          target: "contact",
          actions: assign({ x: -79 }),
        },
      },
    },
    dailys: {
      on: {
        ABOUT: {
          target: "about",
          actions: assign({ x: -300 }),
        },
        BLOG: {
          target: "blog",
          actions: assign({ x: -156 }),
        },
        CONTACT: {
          target: "contact",
          actions: assign({ x: -79 }),
        },
      },
    },
    blog: {
      on: {
        ABOUT: {
          target: "about",
          actions: assign({ x: -300 }),
        },
        DAILYS: {
          target: "dailys",
          actions: assign({ x: -226 }),
        },
        CONTACT: {
          target: "contact",
          actions: assign({ x: -79 }),
        },
      },
    },
    contact: {
      on: {
        ABOUT: {
          target: "about",
          actions: assign({ x: -300 }),
        },
        DAILYS: {
          target: "dailys",
          actions: assign({ x: -226 }),
        },
        BLOG: {
          target: "blog",
          actions: assign({ x: -156 }),
        },
      },
    },
  },
});
