import ReactPaginate from 'react-paginate';
import { useGlobalState } from '../../context/contextApi';
import '../_home.scss';

/* eslint-disable react/prop-types */
const Pages = ({ infoData }) => {
  const { page, setPage } = useGlobalState();

  return (
    <ReactPaginate
      className="pagination justify-content-center gap-2 my-3 mb-5"
      forcePage={page == 1 ? 0 : page - 1}
      previousLinkClassName="text-white text-decoration-none"
      nextLinkClassName="text-white text-decoration-none"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPage(data.selected + 1);
      }}
      pageCount={(infoData && infoData.pages) || 1}
    />
  );
};

export default Pages;
