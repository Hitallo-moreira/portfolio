const CustomButton = ({ value, url, openInNewTab, isDownloadButton, file }) => {
  if (isDownloadButton) {
    return (
      <div className="action">
        <a href={file} download>
          <input type="submit" value={value} />
        </a>
      </div>
    )
  } else {
    return (
      <div className="action">
        <a href={url} target={openInNewTab ? "_blank" : "_self"} rel={openInNewTab ? "noopener noreferrer" : ""}>
          <input type="submit" value={value} />
        </a>
      </div>
    )
  }
}

export default CustomButton;
