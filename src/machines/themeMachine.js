import { createMachine, assign } from "xstate";

export const themeMachine = createMachine({
  id: "themeMachine",
  initial: "light",
  states: {
    light: {
      on: {
        DARK: { target: "dark" },
        ELLIE: { target: "ellie" },
        APOCOLYPSE: { target: "apocolypse" },
      },
    },
    dark: {
      on: {
        LIGHT: { target: "light" },
        ELLIE: { target: "ellie" },
        APOCOLYPSE: { target: "apocolypse" },
      },
    },
    ellie: {
      on: {
        LIGHT: { target: "light" },
        DARK: { target: "dark" },
        APOCOLYPSE: { target: "apocolypse" },
      },
    },
    apocolypse: {
      on: {
        LIGHT: { target: "light" },
        DARK: { target: "dark" },
        ELLIE: { target: "ellie" },
      },
    },
  },
});
