function PageLink(props) {
  const { pageLink, className } = props;
  return (
    <li>
      <a href={pageLink.href} className={className}>
        {pageLink.text}
      </a>
    </li>
  );
}

export default PageLink;
