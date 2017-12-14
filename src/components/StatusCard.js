import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Status from './Status';

const description = [
  'Amy is a violinist with 2 years experience in the wedding industry.',
  'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')

const StatusCard = () => (
  <Card centered>
    <Card.Content header="We're online!" />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='user' />
      10am - 5pm
    </Card.Content>
  </Card>
)

export default StatusCard