import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu email" />

        <hr />

        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Senha nova" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmacao de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button">Sair do GoBarber</button>
    </Container>
  );
}
