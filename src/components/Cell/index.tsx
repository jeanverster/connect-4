import classnames from 'classnames';
import * as React from 'react';
import { Mutation } from 'react-apollo';
import { INSERT_PIECE } from '../../graphql/mutations';
import { StyledCell } from './styles';

type Props = {
  x: number;
  y: number;
  cell: string;
  gameId: string;
}

export default class Cell extends React.Component<Props> {
  render() {
    const cellClasses = classnames({
      'red': (this.props.cell === 'red'),
      'yellow': (this.props.cell === 'yellow')
    });

    const {gameId} = this.props;

    return (
      <Mutation mutation={INSERT_PIECE}>
        {(insertPiece: Function) => (
          <StyledCell
            className={cellClasses}
            onClick={() => insertPiece({variables: {gameId, column: this.props.y}})}
          />
        )}
      </Mutation>
    );
  }

}
