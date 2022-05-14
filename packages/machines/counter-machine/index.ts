import { createMachine, assign } from "xstate";

interface CounterContext {
  count: number;
}

type CounterEvent = {
  type: "INCREMENT";
};

export const counterMachine = createMachine<CounterContext, CounterEvent>({
  initial: "active",
  context: { count: 0 },
  states: {
    active: {
      on: {
        INCREMENT: {
          actions: assign({ count: (ctx) => ctx.count + 1 }),
        },
      },
    },
  },
});
