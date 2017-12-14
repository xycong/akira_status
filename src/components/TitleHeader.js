import React from 'react'
import './styles.css';
import { Header, Icon } from 'semantic-ui-react'

const TitleHeader = () => (
  <Header as='h2' icon>
    <Icon name='plug' />
    <div className='Header-primary'>
      Akira MD System Status</div>
  </Header>
)

export default TitleHeader