import { SelectProps } from 'antd'

export const sortOrderOptions: SelectProps['options'] = [
  { value: 'asc', label: 'Ascending' },
  { value: 'desc', label: 'Descending' },
]
export interface ISortOption {
  value: string | number
  label: string
  children?: SelectProps['options']
}
export interface IStateOption {
  value: string
  label: string
  children?: SelectProps['options']
}
export const patientSortOptions: ISortOption[] = [
  { value: 'firstName', label: 'First Name', children: sortOrderOptions },
  { value: 'lastName', label: 'Last Name', children: sortOrderOptions },
  { value: 'email', label: 'Email', children: sortOrderOptions },
  { value: 'phone', label: 'Phone', children: sortOrderOptions },
  { value: 'id', label: 'Identifier', children: sortOrderOptions },
  { value: 'dateOfBirth', label: 'Date of Birth', children: sortOrderOptions },
  { value: 'dateOfDeath', label: 'Date of Death', children: sortOrderOptions },

  { value: 'state', label: 'State', children: sortOrderOptions },
  { value: 'gender', label: 'Gender', children: sortOrderOptions },
  { value: 'practitioner', label: 'Practitioner', children: sortOrderOptions },
  { value: 'organization', label: 'Organization', children: sortOrderOptions },
]
export const stateOptions: IStateOption[] = [
  { value: 'AK ', label: ' Alaska' },
  { value: 'AL ', label: ' Alabama' },
  { value: 'AR ', label: ' Arkansas' },
  { value: 'AS ', label: ' American Samoa' },
  { value: 'AZ ', label: ' Arizona' },
  { value: 'CA ', label: ' California' },
  { value: 'CO ', label: ' Colorado' },
  { value: 'CT ', label: ' Connecticut' },
  { value: 'DC ', label: ' District of Columbia' },
  { value: 'DE ', label: ' Delaware' },
  { value: 'FL ', label: ' Florida' },
  { value: 'GA ', label: ' Georgia' },
  { value: 'GU ', label: ' Guam' },
  { value: 'HI ', label: ' Hawaii' },
  { value: 'IA ', label: ' Iowa' },
  { value: 'ID ', label: ' Idaho' },
  { value: 'IL ', label: ' Illinois' },
  { value: 'IN ', label: ' Indiana' },
  { value: 'KS ', label: ' Kansas' },
  { value: 'KY ', label: ' Kentucky' },
  { value: 'LA ', label: ' Louisiana' },
  { value: 'MA ', label: ' Massachusetts' },
  { value: 'MD ', label: ' Maryland' },
  { value: 'ME ', label: ' Maine' },
  { value: 'MI ', label: ' Michigan' },
  { value: 'MN ', label: ' Minnesota' },
  { value: 'MO ', label: ' Missouri' },
  { value: 'MS ', label: ' Mississippi' },
  { value: 'MT ', label: ' Montana' },
  { value: 'NC ', label: ' North Carolina' },
  { value: 'ND ', label: ' North Dakota' },
  { value: 'NE ', label: ' Nebraska' },
  { value: 'NH ', label: ' New Hampshire' },
  { value: 'NJ ', label: ' New Jersey' },
  { value: 'NM ', label: ' New Mexico' },
  { value: 'NV ', label: ' Nevada' },
  { value: 'NY ', label: ' New York' },
  { value: 'OH ', label: ' Ohio' },
  { value: 'OK ', label: ' Oklahoma' },
  { value: 'OR ', label: ' Oregon' },
  { value: 'PA ', label: ' Pennsylvania' },
  { value: 'PR ', label: ' Puerto Rico' },
  { value: 'RI ', label: ' Rhode Island' },
  { value: 'SC ', label: ' South Carolina' },
  { value: 'SD ', label: ' South Dakota' },
  { value: 'TN ', label: ' Tennessee' },
  { value: 'TX ', label: ' Texas' },
  { value: 'UT ', label: ' Utah' },
  { value: 'VA ', label: ' Virginia' },
  { value: 'VI ', label: ' Virgin Islands' },
  { value: 'VT ', label: ' Vermont' },
  { value: 'WA ', label: ' Washington' },
  { value: 'WI ', label: ' Wisconsin' },
  { value: 'WV ', label: ' West Virginia' },
  { value: 'WY ', label: ' Wyoming' },
]
