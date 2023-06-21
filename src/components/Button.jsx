const CustomButton = ({ value, url }) => {
  return (
    <div className="action">
      <a href={url}>
        <input type="submit" value={value} />
      </a>
    </div>
  )
}

export default CustomButton;
