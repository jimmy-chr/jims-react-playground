import React from "react";
import { Container, Grid, Header, Icon, Image } from "semantic-ui-react";

const SemanticUiPage1 = () => (
  <Container>
    <Header as="h1">Semantic UI Page 1</Header>
    <p>Container set up with React Semantic UI.</p>
    <Icon name="recycle" />
    Iconic!
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Image src="https://cataas.com/cat" />
        </Grid.Column>
        <Grid.Column>
          <Image src="https://cataas.com/cat" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Image src="https://cataas.com/cat" />
        </Grid.Column>
        <Grid.Column>
          <Image src="https://cataas.com/cat" />
        </Grid.Column>
        <Grid.Column>
          <Image src="https://cataas.com/cat" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default SemanticUiPage1;
