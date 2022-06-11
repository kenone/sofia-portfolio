import { generateUtilityClass, generateUtilityClasses } from '@mui/base'

export function getFormControlBoxDetailsUtilityClass(slot) {
  return generateUtilityClass('CiaFormControlBoxDetails', slot)
}

const formControlBoxDetailsClasses = generateUtilityClasses('CiaFormControlBoxDetails', ['root'])

export default formControlBoxDetailsClasses
