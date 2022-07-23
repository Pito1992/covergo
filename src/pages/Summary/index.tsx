import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch } from "../../redux";
import { getUserInformationData } from '../../redux/user-insurance/selectors';
import { clearUserInformation } from "../../redux/user-insurance/actions";

import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import Wrapper from '../../components/Wrapper';

import { RANK, COUNTRY_DATA, INSURANCE_PACKAGES, DEFAULT_BASE_PREMIUM } from '../../constants';
import { HOME_PAGE_URL, INTRODUCTION_PAGE_URL } from '../../constants/urls';

import styles from './styles.module.scss';

function SummaryPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const values = useSelector(getUserInformationData);

  if (!Object.keys(values).length) {
    return <Navigate to={HOME_PAGE_URL} />
  }

  const {
    name,
    age,
    country,
    package: packageInsurance
  } = values;

  const onCancel = () => navigate(INTRODUCTION_PAGE_URL);
  const onBuy = () => {
    dispatch(clearUserInformation());
    navigate(HOME_PAGE_URL)
  }

  const { currency, countryName, rate } = COUNTRY_DATA[country as keyof typeof COUNTRY_DATA] || {};
  const { name: insurancePackageName, extraFeeByPercentage } = INSURANCE_PACKAGES[packageInsurance as keyof typeof INSURANCE_PACKAGES] || {};
  const premium = (+age || 0) * DEFAULT_BASE_PREMIUM * rate;
  const extraFee = (extraFeeByPercentage * premium) / 100;
  const total = premium + extraFee;

  return (
    <Container className={styles.container}>
      <Wrapper>
        <Heading bold tag="h1">Summary</Heading>
        <Heading bold tag="h2">{name},</Heading>
        <Paragraph>
          Name: {name}
        </Paragraph>
        <Paragraph>
          Age: {age}
        </Paragraph>
        <Paragraph>
          Where do you live: {countryName}
        </Paragraph>
        <Paragraph>
          Package: {insurancePackageName}
        </Paragraph>
        <Paragraph>
          Premium: {total}{currency}
        </Paragraph>
        <ButtonGroup>
          <Button onClick={onCancel}>
            Back
          </Button>
          <Button rank={RANK.PRIMARY} onClick={onBuy}>
            Buy
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
}

export default SummaryPage;
