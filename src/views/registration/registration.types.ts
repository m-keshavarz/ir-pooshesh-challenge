export enum RegistrationSteps {
  getFullName,
  registrationForm,
}

export type TregistrationForm = {
  first_name: string;
  last_name: string;
  address: string;
  agency_type: string;
  agent_code: string;
  city_code: string;
  county: string;
  insurance_branch: string;
  phone: string;
  phone_number: string;
  province: string;
};
