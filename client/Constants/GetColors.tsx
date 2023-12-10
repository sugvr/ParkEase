import { Colors_ToUse } from './index'

const Getcolor = (number: number) => {
    return (
        Colors_ToUse.map((color) => {
            if (number == 1) {
                return color.primary
            } else if (number == 2) {
                return color.second
            }
            else if (number == 3) {
                return color.tertiary
            }
            return null
        }))
}

export default Getcolor
