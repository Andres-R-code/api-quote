import { renderNumber } from './renderNumber'

export const renderColors = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d"]

    let
        hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[renderNumber(hex.length)]
    }
    return hexColor
}