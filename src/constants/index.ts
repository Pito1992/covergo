export enum RANK {
  DEFAULT = 'default',
  PRIMARY = 'primary'
}

export const COUNTRY_DATA = {
  HKG: {
    countryName: 'Hong Kong',
    countryCode: 'HKG',
    currency: 'HKD',
    rate: 1
  },
  USA: {
    countryName: 'USA',
    countryCode: 'USA',
    currency: 'USD',
    rate: 2
  },
  AUS: {
    countryName: 'Australia',
    countryCode: 'AUS',
    currency: 'AUD',
    rate: 3
  }
}

export const COUNTRY_CODES = ['HKG', 'USA', 'AUS'];

export const DEFAULT_BASE_PREMIUM = 10;

export const INSURANCE_PACKAGES = {
  STANDARD: {
    name: 'Standard',
    code: 'STANDARD',
    extraFeeByPercentage: 0,
  },
  SAFE: {
    name: 'Safe',
    code: 'SAFE',
    extraFeeByPercentage: 50
  },
  SUPER_SAFE: {
    name: 'Super Safe',
    code: 'SUPER_SAFE',
    extraFeeByPercentage: 75
  }
}

export const INSURANCE_PACKAGE_CODES = ['STANDARD', 'SAFE', 'SUPER_SAFE'];

export const AGE_LIMIT_TO_BUY_INSURANCE = 100;