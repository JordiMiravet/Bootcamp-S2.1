"use strict"

export const messages = {
    isEmpty : "Si us plau, introdueixi un valor",
    isNotNumber : "Si us plau, introdueixi un valor numeric",
    isOutOfRange : "Si us plau, introdueixi un valor numeric compres entre els valors especificats"
};

export const isEmpty = string => string === "";
export const isNotNumber = num => isNaN(num);
export const isOutOfRange = (num, min = 0, max = 120) => num < min || num > max;

export const print = (elementoHTML, message) => elementoHTML.innerText = message;
