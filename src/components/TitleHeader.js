import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const TitleHeader = () => (
  <Header as='h2' icon>
    <Icon name='plug' />
    Akira System Status
    <Header.Subheader>
      Manage your account settings and set e-mail preferences.
    </Header.Subheader>
  </Header>
)

export default TitleHeader