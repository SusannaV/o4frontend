import { Link } from "react-router";

const Breadcrumb = ({sivu, kategoria}) => {

  return (
    <div className='breadcrumb'>
      <Link to="/">Etusivu</Link>
      /
      <Link to={`/${kategoria}`} style={{ textTransform: 'capitalize' }}>{kategoria}</Link>
      /
      <Link to={`/${sivu}`} style={{ textTransform: 'capitalize' }}>{sivu}</Link>
    </div>
  )
}

export default Breadcrumb