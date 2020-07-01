import React from "react";

const NavigateContext = React.createContext<any>("Navigation");

export const NavigateProvider = NavigateContext.Provider;
export const NavigateConsumer = NavigateContext.Consumer;

export default NavigateContext;