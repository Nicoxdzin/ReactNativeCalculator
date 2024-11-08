export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null
  };
  
  export const handleNumber = (value: string, state: any) => {
    if (state.currentValue === "0") {
      return { currentValue: `${value}` };
    }
  
    return {
      currentValue: `${state.currentValue}${value}`
    };
  };
  
  export const handleEqual = (state: any) => {
    const { currentValue, previousValue, operator } = state;
  
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = {
      operator: null,
      previousValue: null
    };
  
    if (operator === "/") {
      return {
        currentValue: previous / current,
        ...resetState
      };
    }
  
    if (operator === "*") {
      return {
        currentValue: previous * current,
        ...resetState
      };
    }
  
    if (operator === "+") {
      return {
        currentValue: previous + current,
        ...resetState
      };
    }
  
    if (operator === "-") {
      return {
        currentValue: previous - current,
        ...resetState
      };
    }

    if (operator === "**") {
      console.log("ola")
      return {
        currentValue: previous ** current,
        ...resetState
      };
    }
  
    return state;
  };
  
  const calculator = (type: string, value: any, state: any) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);
      case "operator":
        return {
          operator: value,
          previousValue: state.currentValue,
          currentValue: "0"
        };
      case "equal":
        console.log(state)
        return handleEqual(state);//HKJADHKAD
      case "clear":
        return initialState;
      case "posneg":
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`
        };
      case "percentage":
        return {
          currentValue: `${parseFloat(state.currentValue) * 0.01}`
        };
      default:
        return state;
    }
  };
  
  export default calculator;
  