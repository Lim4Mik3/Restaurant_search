import React from 'react';
import TextField, { Input } from '@material/react-text-field';

import { Container, Search } from './styles';

import logo from '../../assets/logo.svg';

const Home = () => {
  return (
    <Container>
      <Search>
        <img src={logo} alt="Logo do restaurante" />
        <TextField label="Pesquisar" onTrailingIconSelect={() => this.setState({ value: '' })}>
          <Input
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.currentTarget.value })}
          />
        </TextField>
      </Search>
    </Container>
  );
};

export { Home };
