import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Form, Field } from 'react-final-form'
import { useAppDispatch } from "../../redux";
import { submitUserInformation, clearUserInformation } from "../../redux/user-insurance/actions";
import { getUserInformationData } from '../../redux/user-insurance/selectors';

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import Wrapper from '../../components/Wrapper';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import Radio from '../../components/Form/Radio';
import type { OptionType } from '../../components/Select/Option';
import type { FormValues } from './interfaces';

import {
  RANK, COUNTRY_CODES, COUNTRY_DATA,
  INSURANCE_PACKAGES, INSURANCE_PACKAGE_CODES,
  DEFAULT_BASE_PREMIUM, AGE_LIMIT_TO_BUY_INSURANCE
} from '../../constants';
import {
  ERROR_AGE_LIMIT,
} from '../../constants/errors';
import { ERROR_PAGE_URL, HOME_PAGE_URL, SUMMARY_PAGE_URL } from "../../constants/urls";

import { composeValidators, required, requiredCharLength, requiredStartingWithAlphabet } from '../../utils/validation';

import styles from './styles.module.scss';

function IntroductionPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const storedValues = useSelector(getUserInformationData);
  const initialValues = useMemo(() => {
    if (!Object.keys(storedValues).length) {
      return {
        country: {
          label: COUNTRY_DATA.HKG.countryName,
          value: COUNTRY_DATA.HKG.countryCode
        },
        package: INSURANCE_PACKAGES.STANDARD.code,
      }
    }
    const { countryName, countryCode } = COUNTRY_DATA[storedValues.country as keyof typeof COUNTRY_DATA] || {};
    return {
      name: storedValues.name,
      age: `${storedValues.age}`,
      country: {
        label: countryName,
        value: countryCode
      },
      package: storedValues.package,
    }
  }, [storedValues]);

  const onCancel = () => {
    dispatch(clearUserInformation());
    navigate(HOME_PAGE_URL)
  }
  const countryOptions = COUNTRY_CODES.map((countryCode: string): OptionType => ({
    label: COUNTRY_DATA[countryCode as keyof typeof COUNTRY_DATA].countryName,
    value: countryCode
  }))

  const onSubmit = (values: FormValues) => {
    if (+values.age > AGE_LIMIT_TO_BUY_INSURANCE) {
      navigate(ERROR_PAGE_URL, { state: { error: ERROR_AGE_LIMIT } });
    } else {
      dispatch(submitUserInformation(values));
      navigate(SUMMARY_PAGE_URL);
    }
  }

  return (
    <Container className={styles.container}>
      <Heading center bold tag="h1">Tell us about yourself</Heading>
      <Form<FormValues>
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, hasValidationErrors, values }) => {
          const { currency, rate } = COUNTRY_DATA[values.country.value as keyof typeof COUNTRY_DATA];
          const { extraFeeByPercentage } = INSURANCE_PACKAGES[values.package as keyof typeof INSURANCE_PACKAGES];
          const premium = (+values.age || 0) * DEFAULT_BASE_PREMIUM * rate;
          const extraFee = (extraFeeByPercentage * premium) / 100;
          const total = premium + extraFee;

          return (
            <form onSubmit={handleSubmit}>
              <div className={styles.formInner}>
                <Field<string>
                  name="name"
                  placeholder="Add Name"
                  component={Input}
                  label="Name"
                  validate={composeValidators<string>(
                    required,
                    requiredCharLength(3),
                    requiredStartingWithAlphabet,
                  )}
                />
                <Field<number>
                  name="age"
                  placeholder="Add Age"
                  component={Input}
                  type="number"
                  label="Age"
                  validate={required<number>}
                />
                <Field<OptionType>
                  name="country"
                  component={Select}
                  options={countryOptions}
                  label="Where do you live?"
                />
              </div>
              <Wrapper className={styles.wrapper}>
                <div>
                  {INSURANCE_PACKAGE_CODES.map((insurancePackageCode: string): JSX.Element => {
                    const { name, extraFeeByPercentage } = INSURANCE_PACKAGES[insurancePackageCode as keyof typeof INSURANCE_PACKAGES];
                    const extraFee = (extraFeeByPercentage * premium) / 100;
                    return (
                      <Field
                        key={insurancePackageCode}
                        name="package"
                        component={Radio}
                        type="radio"
                        value={insurancePackageCode}
                        label={`${name}${extraFeeByPercentage ? ` (+${extraFee}${currency}, ${extraFeeByPercentage}%)` : ''}`}
                      />
                    )
                  })}
                </div>
                <Heading tag="h3" center className={styles.premiumHighlight}>
                  Your premium is: {total}{currency}
                </Heading>
                <ButtonGroup>
                  <Button onClick={onCancel}>
                    Back
                  </Button>
                  <Button disabled={hasValidationErrors} rank={RANK.PRIMARY} type="submit">
                    Next
                  </Button>
                </ButtonGroup>
              </Wrapper>
            </form>  
          )
        }}
      />
    </Container>
  );
}

export default IntroductionPage;
