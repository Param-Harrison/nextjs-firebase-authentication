import React from 'react';
import styled from 'styled-components';
import { Card, message } from 'antd';

import { Session } from '@typeDefs/session';
import Layout from '@components/Layout';

import SignInForm from './SignInForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(Card)`
  min-width: 200px;
  max-width: 400px;
`;

const SignInPage = () => {
  const handleLoadingMessage = () => {
    message.loading({
      content: 'Loading ...',
      key: 'login',
      duration: 0,
    });
  };

  const handleSuccessMessage = () => {
    message.success({
      content: 'Success!',
      key: 'login',
      duration: 2,
    });
  };

  const handleErrorMessage = (error: any) => {
    message.error({
      content: error.message,
      key: 'login',
      duration: 2,
    });
  };

  return (
    <Layout>
      <Container>
        <StyledCard title="Log in and get to learn">
          <SignInForm
            onLoadingMessage={handleLoadingMessage}
            onSuccessMessage={handleSuccessMessage}
            onErrorMessage={handleErrorMessage}
          />
        </StyledCard>
      </Container>
    </Layout>
  );
};

SignInPage.isAuthorized = (session: Session) => true;

export default SignInPage;
