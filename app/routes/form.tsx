import { Link, LinksFunction, Outlet } from 'remix';
import stylesUrl from '~/styles/form.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};
export default function FormRoute() {
  return (
    <div className="page-layout">
      <div className="header">
        <div>Page Header</div>
        <div className="navbar">
          <Link to="page1">Page 1</Link>
          <Link to="page2">Page 2</Link>
          <Link to="page3">Page 3</Link>
        </div>
        <div className="action-buttons">
          <button>Edit</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
