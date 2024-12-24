import { Action } from '../types';
import { Button } from './Button';

interface ButtonGridProps {
  dispatch: React.Dispatch<Action>;
}
export const ButtonGrid: React.FC<ButtonGridProps> = ({ dispatch }) => {
  return (
    <div className="grid grid-cols-4 gap-2 mt-4 grid-rows-[repeat(5,4rem)]">
      <Button
        id="clear"
        onClick={() => dispatch({ type: 'CLEAR' })}
        className="col-span-2 bg-red-500/80 hover:bg-red-600/90 text-white backdrop-blur-sm"
      >
        AC
      </Button>
      <Button
        id="divide"
        onClick={() => dispatch({ type: 'CHOOSE_OPERATION', operations: '/' })}
        className="bg-violet-500/80 hover:bg-violet-600/90 text-white backdrop-blur-sm"
      >
        /
      </Button>

      <Button
        id="multiply"
        onClick={() => dispatch({ type: 'CHOOSE_OPERATION', operations: '*' })}
        className="bg-violet-500/80 hover:bg-violet-600/90 text-white backdrop-blur-sm"
      >
        x
      </Button>

      <Button
        id="seven"
        onClick={() => dispatch({ type: 'ADD_DIGIT', digit: '7' })}
        className="bg-gray-700/80 hover:bg-gray-600/90 text-white backdrop-blur-sm"
      >
        7
      </Button>

      <Button
        id="eight"
        onClick={() => dispatch({ type: 'ADD_DIGIT', digit: '8' })}
        className="bg-gray-700/80 hover:bg-gray-600/90 text-white backdrop-blur-sm"
      >
        8
      </Button>

      <Button
        id="nine"
        onClick={() => dispatch({ type: 'ADD_DIGIT', digit: '9' })}
        className="bg-gray-700/80 hover:bg-gray-600/90 text-white backdrop-blur-sm"
      >
        9
      </Button>

      <Button
        id="subtract"
        onClick={() => dispatch({ type: 'CHOOSE_OPERATION', operations: '-' })}
        className="bg-violet-500/80 hover:bg-violet-600/90 text-white backdrop-blur-sm"
      >
        -
      </Button>

      <Button
        id="four"
        onClick={() => dispatch({ type: 'ADD_DIGIT', digit: '4' })}
        className="bg-gray-700/80 hover:bg-gray-600/90 text-white backdrop-blur-sm"
      >
        4
      </Button>

      <Button
        id="five"
        onClick={() => dispatch({ type: 'ADD_DIGIT', digit: '5' })}
        className="bg-gray-700/80 hover:bg-gray-600/90 text-white backdrop-blur-sm"
      >
        5
      </Button>

      <Button
        id="six"
        onClick={() => dispatch({ type: 'ADD_DIGIT', digit: '6' })}
        className="bg-gray-700/80 hover:bg-gray-600/90 text-white backdrop-blur-sm"
      >
        6
      </Button>

      <Button
        id="add"
        onClick={() => dispatch({ type: 'CHOOSE_OPERATION', operations: '+' })}
        className="bg-violet-500/80 hover:bg-violet-600/90 text-white backdrop-blur-sm"
      >
        +
      </Button>

      <Button
        id="one"
        onClick={() => dispatch({ type: 'ADD_DIGIT', digit: '1' })}
        className="bg-gray-700/80 hover:bg-gray-600/90 text-white backdrop-blur-sm"
      >
        1
      </Button>
      <Button
        id="two"
        onClick={() => dispatch({ type: 'ADD_DIGIT', digit: '2' })}
        className="bg-gray-700/80 hover:bg-gray-600/90 text-white backdrop-blur-sm"
      >
        2
      </Button>

      <Button
        id="three"
        onClick={() => dispatch({ type: 'ADD_DIGIT', digit: '3' })}
        className="bg-gray-700/80 hover:bg-gray-600/90 text-white backdrop-blur-sm"
      >
        3
      </Button>
      <Button
        id="equals"
        onClick={() => dispatch({ type: 'EVALUATE' })}
        className="row-span-2 min-h-full bg-blue-500/80 hover:bg-blue-600/90 text-white backdrop-blur-sm"
      >
        =
      </Button>
      <Button
        id="zero"
        onClick={() => dispatch({ type: 'ADD_DIGIT', digit: '0' })}
        className="col-span-2 bg-gray-700/80 hover:bg-gray-600/90 text-white backdrop-blur-sm"
      >
        0
      </Button>
      <Button
        id="decimal"
        onClick={() => dispatch({ type: 'ADD_DIGIT', digit: '.' })}
        className="bg-gray-700/80 hover:bg-gray-600/90 text-white backdrop-blur-sm"
      >
        .
      </Button>
    </div>
  );
};
