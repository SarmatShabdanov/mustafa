
import "./index.css";

export function Tooltip(props){
    const {position,children,tooltipText} = props;
    
    const  className = `con-tooltip con-tooltip--${position}`
    
    return <div className={className}>
    <p> Left </p>
    <div class="tooltip">
      <p>Click</p>
    </div>

  </div>
}
