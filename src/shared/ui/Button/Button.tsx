type ButtonProps = {
    onClick: () => void,
    className: string,
    name?: string,
    iconPath?: string,
    icon?: string,
    imgName?:string
}

const Button: React.FC<ButtonProps> = ({ onClick, className, iconPath, name, icon, imgName }) => {
    return (
        <div>
            <button 
            className={className}
            onClick={onClick}>
            {iconPath && <img src={iconPath} alt={icon} className={imgName} />}
            {name}
            </button>
        </div>
    )
}

export default Button;