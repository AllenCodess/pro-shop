import { Pagination } from "react-bootstrap";
import { Link } from "react-router";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Paginate.Item
            as={Link}
            active={x + 1 === page}
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item>{x + 1}</Pagination.Item>
          </Paginate.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
