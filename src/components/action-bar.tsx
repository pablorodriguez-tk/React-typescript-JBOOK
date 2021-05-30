import Button from './button';
import './action-bar.css';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  return (
    <div className="action-bar">
      <Button type="up" id={id} />
      <Button type="down" id={id} />
      <Button type="delete" id={id} />
    </div>
  );
};

export default ActionBar;
