import React from "react";

export default interface ConditionalWrapper {
  (condition: any,
  wrapper: any,
  children: any): any
}