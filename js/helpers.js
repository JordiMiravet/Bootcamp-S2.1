"use strict"

export const messages = {
    isEmpty : "Si us plau, introdueixi un valor",
    isNotNumber : "Si us plau, introdueixi un valor numeric",
    isOutOfRange : "Si us plau, introdueixi un valor numeric compres entre el 0 i el 120"
};

export const isEmpty = string => string === "";
export const isNotNumber = num => isNaN(num);
export const isOutOfRange = num => num < 0 || num > 120;

export const print = (elementoHTML, message) => elementoHTML.innerText = message;
