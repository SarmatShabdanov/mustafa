import "./index.css"
export function Button(props){
    const {variant,children} = props;
    className = `my-button my-button--${variant}`
    return <button className={className}>{children}</button>
}
